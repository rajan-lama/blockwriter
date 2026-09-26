/**
 * BlockWriter pattern library.
 *
 * A small editor plugin that opens a searchable, category-filtered library of
 * registered block patterns and inserts the selected pattern at the current
 * insertion point.
 *
 * Data comes from the core `core/block-patterns` REST endpoints through the
 * `core` data store, and insertion uses the block editor data store, so no
 * pattern data is duplicated or stored by BlockWriter.
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
 * Determines whether a pattern matches a search term.
 *
 * @param {Object} pattern Pattern object.
 * @param {string} term    Search term.
 *
 * @return {boolean} Whether the pattern matches.
 */
function matchesSearch( pattern, term ) {
	if ( ! term ) {
		return true;
	}

	const haystack = [
		pattern.title,
		pattern.name,
		pattern.description,
		...( pattern.keywords || [] ),
		...( pattern.categories || [] ),
	]
		.filter( Boolean )
		.join( ' ' )
		.toLowerCase();

	return haystack.includes( term.toLowerCase() );
}

/**
 * The pattern library modal.
 *
 * @param {Object}   props                Component props.
 * @param {Function} props.onRequestClose Called when the modal should close.
 *
 * @return {Element} The modal.
 */
function PatternLibraryModal( { onRequestClose } ) {
	const { patterns, categories, isLoading } = usePatternData();
	const [ search, setSearch ] = useState( '' );
	const [ category, setCategory ] = useState( ALL_CATEGORIES );
	const [ selectedName, setSelectedName ] = useState( '' );

	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const { createNotice } = useDispatch( 'core/notices' );

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

	const selectedPattern =
		filteredPatterns.find( ( pattern ) => pattern.name === selectedName ) ||
		filteredPatterns[ 0 ] ||
		null;

	const previewBlocks = useMemo(
		() => ( selectedPattern ? parse( selectedPattern.content ) : [] ),
		[ selectedPattern ],
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

	const handleInsert = ( pattern ) => {
		const blocks = parse( pattern.content );

		if ( ! blocks.length ) {
			createNotice(
				'error',
				__( 'This pattern could not be inserted.', 'blockwriter' ),
				{ type: 'snackbar' },
			);
			return;
		}

		const insertionPoint =
			dataSelect( 'core/block-editor' ).getBlockInsertionPoint();

		insertBlocks( blocks, insertionPoint.index, insertionPoint.rootClientId );

		createNotice( 'success', __( 'Pattern inserted.', 'blockwriter' ), {
			type: 'snackbar',
		} );

		onRequestClose();
	};

	return (
		<Modal
			className="bw-pattern-library"
			title={ __( 'BlockWriter Pattern Library', 'blockwriter' ) }
			onRequestClose={ onRequestClose }
			size="large"
		>
			<Flex
				className="bw-pattern-library__toolbar"
				align="flex-start"
				gap={ 3 }
				wrap
			>
				<FlexItem isBlock>
					<SearchControl
						label={ __( 'Search patterns', 'blockwriter' ) }
						value={ search }
						onChange={ setSearch }
					/>
				</FlexItem>
				<FlexItem isBlock>
					<SelectControl
						label={ __( 'Category', 'blockwriter' ) }
						value={ category }
						options={ categoryOptions }
						onChange={ setCategory }
					/>
				</FlexItem>
			</Flex>

			{ isLoading && (
				<div className="bw-pattern-library__state">
					<Spinner />
					<p>{ __( 'Loading patterns…', 'blockwriter' ) }</p>
				</div>
			) }

			{ ! isLoading && patterns.length === 0 && (
				<div className="bw-pattern-library__state">
					<Notice status="info" isDismissible={ false }>
						{ __( 'No patterns are available yet.', 'blockwriter' ) }
					</Notice>
				</div>
			) }

			{ ! isLoading && patterns.length > 0 && (
				<div className="bw-pattern-library__body">
					<div className="bw-pattern-library__list">
						{ filteredPatterns.length === 0 && (
							<p className="bw-pattern-library__empty">
								{ __( 'No patterns match your search.', 'blockwriter' ) }
							</p>
						) }

						{ filteredPatterns.length > 0 && (
							<ul className="bw-pattern-library__items">
								{ filteredPatterns.map( ( pattern ) => {
									const isSelected =
										selectedPattern && selectedPattern.name === pattern.name;

									return (
										<li key={ pattern.name }>
											<Button
												className="bw-pattern-library__item"
												onClick={ () => setSelectedName( pattern.name ) }
												aria-current={ isSelected ? 'true' : undefined }
											>
												{ pattern.title || pattern.name }
											</Button>
										</li>
									);
								} ) }
							</ul>
						) }
					</div>

					{ selectedPattern && (
						<div className="bw-pattern-library__preview">
							<div className="bw-pattern-library__preview-frame">
								<BlockPreview
									blocks={ previewBlocks }
									viewportWidth={ selectedPattern.viewportWidth || 1200 }
								/>
							</div>

							{ selectedPattern.description && (
								<p className="bw-pattern-library__description">
									{ selectedPattern.description }
								</p>
							) }

							<Button
								variant="primary"
								onClick={ () => handleInsert( selectedPattern ) }
							>
								{ __( 'Insert pattern', 'blockwriter' ) }
							</Button>
						</div>
					) }
				</div>
			) }
		</Modal>
	);
}

/**
 * Editor plugin entry point. Registers the sidebar, the options menu item, and
 * the modal used to browse and insert patterns.
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
				{ __( 'BlockWriter Patterns', 'blockwriter' ) }
			</PluginMoreMenuItem>

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ layout }
				title={ __( 'BlockWriter Patterns', 'blockwriter' ) }
			>
				<div className="bw-pattern-library__sidebar">
					<p>
						{ __(
							'Browse reusable patterns and insert one at the current position.',
							'blockwriter',
						) }
					</p>
					<Button variant="primary" onClick={ openLibrary }>
						{ __( 'Browse patterns', 'blockwriter' ) }
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
