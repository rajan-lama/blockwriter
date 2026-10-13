/**
 * BlockWriter pattern and template library.
 *
 * A small editor plugin that opens a searchable library of registered block
 * patterns and theme templates and inserts the selected item at the current
 * insertion point.
 *
 * Patterns come from the core `core/block-patterns` REST endpoints through the
 * `core` data store. Templates come from the `wp_template` and
 * `wp_template_part` entities in the same store, so no pattern or template data
 * is duplicated or stored by BlockWriter.
 */
import { useMemo, useState } from '@wordpress/element';
import { select as dataSelect, useDispatch, useSelect } from '@wordpress/data';
import {
	Button,
	Flex,
	FlexItem,
	Modal,
	Notice,
	SearchControl,
	SelectControl,
	Spinner,
	TabPanel,
} from '@wordpress/components';
import { BlockPreview } from '@wordpress/block-editor';
import { parse } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { PluginMoreMenuItem, PluginSidebar } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

import './pattern-library.scss';

const SIDEBAR_NAME = 'blockwriter-pattern-library';
const ALL_CATEGORIES = '';
const SOURCE_PATTERNS = 'patterns';
const SOURCE_TEMPLATES = 'templates';

// Shared query args so `hasFinishedResolution` matches the resolver call.
const TEMPLATE_QUERY = { per_page: -1, context: 'edit' };

/**
 * Reads registered patterns and pattern categories from the core data store.
 *
 * @return {{patterns: Array, categories: Array, isLoading: boolean}} Pattern data.
 */
function usePatternData() {
	return useSelect( ( select ) => {
		const store = select( 'core' );

		return {
			patterns: store.getBlockPatterns() || [],
			categories: store.getBlockPatternCategories() || [],
			isLoading: ! store.hasFinishedResolution( 'getBlockPatterns', [] ),
		};
	}, [] );
}

/**
 * Reads theme templates and template parts from the core data store.
 *
 * @return {{templates: Array, isLoading: boolean}} Template data.
 */
function useTemplateData() {
	return useSelect( ( select ) => {
		const store = select( 'core' );
		const templates =
			store.getEntityRecords( 'postType', 'wp_template', TEMPLATE_QUERY ) || [];
		const templateParts =
			store.getEntityRecords(
				'postType',
				'wp_template_part',
				TEMPLATE_QUERY,
			) || [];

		return {
			templates: [ ...templates, ...templateParts ],
			// `isResolving` is used instead of `hasFinishedResolution` so that a
			// failed request (for example when the user cannot view templates)
			// stops the spinner rather than leaving it running forever.
			isLoading:
				store.isResolving( 'getEntityRecords', [
					'postType',
					'wp_template',
					TEMPLATE_QUERY,
				] ) ||
				store.isResolving( 'getEntityRecords', [
					'postType',
					'wp_template_part',
					TEMPLATE_QUERY,
				] ),
		};
	}, [] );
}

/**
 * Determines whether a library item matches a search term.
 *
 * @param {Object} item Library item (pattern or normalized template).
 * @param {string} term Search term.
 *
 * @return {boolean} Whether the item matches.
 */
function matchesSearch( item, term ) {
	if ( ! term ) {
		return true;
	}

	const haystack = [
		item.title,
		item.name,
		item.description,
		...( item.keywords || [] ),
		...( item.categories || [] ),
	]
		.filter( Boolean )
		.join( ' ' )
		.toLowerCase();

	return haystack.includes( term.toLowerCase() );
}

/**
 * Normalizes a theme template entity into the shape used by the library UI.
 *
 * @param {Object} template Template or template part entity.
 *
 * @return {?Object} Normalized item, or null when it has no content.
 */
function normalizeTemplate( template ) {
	const content = template.content ? template.content.raw : '';
	const title = template.title || {};

	if ( ! content ) {
		return null;
	}

	return {
		name: `${ template.type }:${ template.id }`,
		title:
			title.rendered ||
			title.raw ||
			template.slug ||
			__( 'Template', 'blockwriter' ),
		description: '',
		content,
		categories: [],
		keywords: [ template.slug, template.type ],
		viewportWidth: 1200,
	};
}

/**
 * The pattern and template library modal.
 *
 * @param {Object}   props                Component props.
 * @param {Function} props.onRequestClose Called when the modal should close.
 *
 * @return {Element} The modal.
 */
function PatternLibraryModal( { onRequestClose } ) {
	const { patterns, categories, isLoading: patternsLoading } = usePatternData();
	const { templates, isLoading: templatesLoading } = useTemplateData();
	const [ source, setSource ] = useState( SOURCE_PATTERNS );
	const [ search, setSearch ] = useState( '' );
	const [ category, setCategory ] = useState( ALL_CATEGORIES );
	const [ selectedName, setSelectedName ] = useState( '' );

	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const { createNotice } = useDispatch( 'core/notices' );

	const isTemplates = source === SOURCE_TEMPLATES;

	const templateItems = useMemo(
		() => templates.map( normalizeTemplate ).filter( Boolean ),
		[ templates ],
	);

	const filteredPatterns = useMemo(
		() =>
			patterns.filter( ( pattern ) => {
				if ( category && ! ( pattern.categories || [] ).includes( category ) ) {
					return false;
				}

				return matchesSearch( pattern, search );
			} ),
		[ patterns, category, search ],
	);

	const filteredTemplates = useMemo(
		() => templateItems.filter( ( item ) => matchesSearch( item, search ) ),
		[ templateItems, search ],
	);

	const sourceItems = isTemplates ? templateItems : patterns;
	const sourceLoading = isTemplates ? templatesLoading : patternsLoading;
	const filteredItems = isTemplates ? filteredTemplates : filteredPatterns;

	const selectedItem =
		filteredItems.find( ( item ) => item.name === selectedName ) ||
		filteredItems[ 0 ] ||
		null;

	const previewBlocks = useMemo(
		() => ( selectedItem ? parse( selectedItem.content ) : [] ),
		[ selectedItem ],
	);

	const categoryOptions = useMemo(
		() => [
			{
				label: __( 'All categories', 'blockwriter' ),
				value: ALL_CATEGORIES,
			},
			...categories.map( ( item ) => ( {
				label: item.label,
				value: item.name,
			} ) ),
		],
		[ categories ],
	);

	const tabs = [
		{ name: SOURCE_PATTERNS, title: __( 'Patterns', 'blockwriter' ) },
		{ name: SOURCE_TEMPLATES, title: __( 'Templates', 'blockwriter' ) },
	];

	const handleSourceChange = ( name ) => {
		setSource( name );
		setSearch( '' );
		setCategory( ALL_CATEGORIES );
		setSelectedName( '' );
	};

	const handleInsert = ( item ) => {
		const blocks = parse( item.content );

		if ( ! blocks.length ) {
			createNotice(
				'error',
				isTemplates
					? __( 'This template could not be inserted.', 'blockwriter' )
					: __( 'This pattern could not be inserted.', 'blockwriter' ),
				{ type: 'snackbar' },
			);
			return;
		}

		const insertionPoint =
			dataSelect( 'core/block-editor' ).getBlockInsertionPoint();

		insertBlocks( blocks, insertionPoint.index, insertionPoint.rootClientId );

		createNotice(
			'success',
			isTemplates
				? __( 'Template inserted.', 'blockwriter' )
				: __( 'Pattern inserted.', 'blockwriter' ),
			{ type: 'snackbar' },
		);

		onRequestClose();
	};

	const renderBody = () => {
		if ( sourceLoading ) {
			return (
				<div className="bw-pattern-library__state">
					<Spinner />
					<p>
						{ isTemplates
							? __( 'Loading templates…', 'blockwriter' )
							: __( 'Loading patterns…', 'blockwriter' ) }
					</p>
				</div>
			);
		}

		if ( sourceItems.length === 0 ) {
			return (
				<div className="bw-pattern-library__state">
					<Notice status="info" isDismissible={ false }>
						{ isTemplates
							? __( 'No templates are available yet.', 'blockwriter' )
							: __( 'No patterns are available yet.', 'blockwriter' ) }
					</Notice>
				</div>
			);
		}

		return (
			<>
				<Flex
					className="bw-pattern-library__toolbar"
					align="flex-start"
					gap={ 3 }
					wrap
				>
					<FlexItem isBlock>
						<SearchControl
							label={
								isTemplates
									? __( 'Search templates', 'blockwriter' )
									: __( 'Search patterns', 'blockwriter' )
							}
							value={ search }
							onChange={ setSearch }
						/>
					</FlexItem>

					{ ! isTemplates && (
						<FlexItem isBlock>
							<SelectControl
								label={ __( 'Category', 'blockwriter' ) }
								value={ category }
								options={ categoryOptions }
								onChange={ setCategory }
							/>
						</FlexItem>
					) }
				</Flex>

				<div className="bw-pattern-library__body">
					<div className="bw-pattern-library__list">
						{ filteredItems.length === 0 && (
							<p className="bw-pattern-library__empty">
								{ isTemplates
									? __( 'No templates match your search.', 'blockwriter' )
									: __( 'No patterns match your search.', 'blockwriter' ) }
							</p>
						) }

						{ filteredItems.length > 0 && (
							<ul className="bw-pattern-library__items">
								{ filteredItems.map( ( item ) => {
									const isSelected =
										selectedItem && selectedItem.name === item.name;

									return (
										<li key={ item.name }>
											<Button
												className="bw-pattern-library__item"
												onClick={ () => setSelectedName( item.name ) }
												aria-current={ isSelected ? 'true' : undefined }
											>
												{ item.title || item.name }
											</Button>
										</li>
									);
								} ) }
							</ul>
						) }
					</div>

					{ selectedItem && (
						<div className="bw-pattern-library__preview">
							<div className="bw-pattern-library__preview-frame">
								<BlockPreview
									blocks={ previewBlocks }
									viewportWidth={ selectedItem.viewportWidth || 1200 }
								/>
							</div>

							{ selectedItem.description && (
								<p className="bw-pattern-library__description">
									{ selectedItem.description }
								</p>
							) }

							<Button
								variant="primary"
								onClick={ () => handleInsert( selectedItem ) }
							>
								{ isTemplates
									? __( 'Insert template', 'blockwriter' )
									: __( 'Insert pattern', 'blockwriter' ) }
							</Button>
						</div>
					) }
				</div>
			</>
		);
	};

	return (
		<Modal
			className="bw-pattern-library"
			title={ __( 'BlockWriter Library', 'blockwriter' ) }
			onRequestClose={ onRequestClose }
			size="large"
		>
			<TabPanel
				key={ source }
				className="bw-pattern-library__tabs"
				tabs={ tabs }
				initialTabName={ source }
				onSelect={ handleSourceChange }
			>
				{ () => renderBody() }
			</TabPanel>
		</Modal>
	);
}

/**
 * Editor plugin entry point. Registers the sidebar, the options menu item, and
 * the modal used to browse and insert patterns and templates.
 *
 * @return {Element} The editor plugin UI.
 */
function PatternLibrary() {
	const [ isOpen, setIsOpen ] = useState( false );

	// The sidebar and menu item components live on `wp.editor` from WordPress
	// 6.6 onward. Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar || ! PluginMoreMenuItem ) {
		return null;
	}

	const openLibrary = () => setIsOpen( true );
	const closeLibrary = () => setIsOpen( false );

	return (
		<>
			<PluginMoreMenuItem icon={ layout } onClick={ openLibrary }>
				{ __( 'BlockWriter Library', 'blockwriter' ) }
			</PluginMoreMenuItem>

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ layout }
				title={ __( 'BlockWriter Library', 'blockwriter' ) }
			>
				<div className="bw-pattern-library__sidebar">
					<p>
						{ __(
							'Browse reusable patterns and theme templates and insert one at the current position.',
							'blockwriter',
						) }
					</p>
					<Button variant="primary" onClick={ openLibrary }>
						{ __( 'Browse library', 'blockwriter' ) }
					</Button>
				</div>
			</PluginSidebar>

			{ isOpen && <PatternLibraryModal onRequestClose={ closeLibrary } /> }
		</>
	);
}

registerPlugin( SIDEBAR_NAME, {
	render: PatternLibrary,
} );
