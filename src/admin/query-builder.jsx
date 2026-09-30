/**
 * BlockWriter query builder.
 *
 * Registers an editor sidebar that adds advanced filters to the BlockWriter
 * Post Grid and Post Carousel blocks: tags, author, offset, included and
 * excluded posts, and sticky post handling.
 *
 * The controls only change the block's own query attributes through the block
 * editor data store, so undo and redo keep working and nothing is stored on the
 * site. The attributes are read by `Blockwriter\Query_Builder` when the block is
 * rendered.
 */
import {
	Button,
	CheckboxControl,
	Notice,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { funnel } from '@wordpress/icons';

import './query-builder.scss';

const SIDEBAR_NAME = 'blockwriter-query-builder';

// Blocks that render a query and expose the advanced query attributes.
const SUPPORTED_BLOCKS = [
	'blockwriter/post-grid',
	'blockwriter/post-carousel',
];

/**
 * Parses a comma separated list of IDs into a positive integer array.
 *
 * @param {string} value Comma separated IDs.
 *
 * @return {number[]} Positive IDs.
 */
function parseIds( value ) {
	return value
		.split( ',' )
		.map( ( item ) => parseInt( item.trim(), 10 ) )
		.filter( ( item ) => Number.isInteger( item ) && item > 0 );
}

/**
 * Formats an ID array for display in a text field.
 *
 * @param {Array} value Stored IDs.
 *
 * @return {string} Comma separated IDs.
 */
function formatIds( value ) {
	return Array.isArray( value ) ? value.join( ', ' ) : '';
}

/**
 * The query builder sidebar content.
 *
 * @return {Element} The query controls.
 */
function QueryBuilderPanel() {
	const { clientId, blockName, attributes } = useSelect( ( select ) => {
		const block = select( 'core/block-editor' ).getSelectedBlock();

		return {
			clientId: block ? block.clientId : '',
			blockName: block ? block.name : '',
			attributes: block ? block.attributes : {},
		};
	}, [] );

	const { postType, tagIds, authorId, offset, includeIds, excludeIds } =
		attributes;

	const tags = useSelect(
		( select ) => {
			if ( postType && postType !== 'post' ) {
				return [];
			}

			return (
				select( 'core' ).getEntityRecords( 'taxonomy', 'post_tag', {
					per_page: 100,
					_fields: 'id,name',
				} ) || []
			);
		},
		[ postType ],
	);

	const authors = useSelect( ( select ) => {
		return (
			select( 'core' ).getEntityRecords( 'root', 'user', {
				per_page: 100,
				_fields: 'id,name',
			} ) || []
		);
	}, [] );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const isSupported = !! blockName && SUPPORTED_BLOCKS.includes( blockName );

	const setAttribute = ( key, value ) => {
		if ( clientId ) {
			updateBlockAttributes( clientId, { [ key ]: value } );
		}
	};

	if ( ! clientId ) {
		return (
			<div className="bw-query-builder">
				<Notice status="info" isDismissible={ false }>
					{ __(
						'Select a post grid or post carousel block to build its query.',
						'blockwriter',
					) }
				</Notice>
			</div>
		);
	}

	if ( ! isSupported ) {
		return (
			<div className="bw-query-builder">
				<Notice status="info" isDismissible={ false }>
					{ __(
						'The query builder is available for the Post Grid and Post Carousel blocks.',
						'blockwriter',
					) }
				</Notice>
			</div>
		);
	}

	const selectedTags = Array.isArray( tagIds ) ? tagIds : [];

	const toggleTag = ( id ) => {
		const next = selectedTags.includes( id )
			? selectedTags.filter( ( value ) => value !== id )
			: [ ...selectedTags, id ];

		setAttribute( 'tagIds', next );
	};

	const authorOptions = [
		{ label: __( 'Any author', 'blockwriter' ), value: 0 },
		...authors.map( ( author ) => ( {
			label: author.name,
			value: author.id,
		} ) ),
	];

	return (
		<div className="bw-query-builder">
			<p className="bw-query-builder__intro">
				{ __(
					'Add advanced filters to this block’s query. Post type, count, order, and categories are set in the block’s settings.',
					'blockwriter',
				) }
			</p>

			<SelectControl
				label={ __( 'Author', 'blockwriter' ) }
				value={ authorId || 0 }
				options={ authorOptions }
				onChange={ ( value ) =>
					setAttribute( 'authorId', parseInt( value, 10 ) || 0 )
				}
			/>

			<RangeControl
				label={ __( 'Skip first', 'blockwriter' ) }
				help={ __(
					'Number of matching posts to skip before displaying.',
					'blockwriter',
				) }
				value={ offset || 0 }
				min={ 0 }
				max={ 20 }
				step={ 1 }
				onChange={ ( value ) => setAttribute( 'offset', value || 0 ) }
			/>

			{ ( ! postType || postType === 'post' ) && tags.length > 0 && (
				<fieldset className="bw-query-builder__tags">
					<legend className="bw-query-builder__legend">
						{ __( 'Tags', 'blockwriter' ) }
					</legend>

					<div className="bw-query-builder__scroll">
						{ tags.map( ( tag ) => (
							<CheckboxControl
								key={ tag.id }
								label={ tag.name }
								checked={ selectedTags.includes( tag.id ) }
								onChange={ () => toggleTag( tag.id ) }
							/>
						) ) }
					</div>
				</fieldset>
			) }

			<TextControl
				label={ __( 'Include posts', 'blockwriter' ) }
				help={ __(
					'Comma separated post IDs. Only these posts are shown.',
					'blockwriter',
				) }
				value={ formatIds( includeIds ) }
				onChange={ ( value ) =>
					setAttribute( 'includeIds', parseIds( value ) )
				}
			/>

			<TextControl
				label={ __( 'Exclude posts', 'blockwriter' ) }
				help={ __( 'Comma separated post IDs to leave out.', 'blockwriter' ) }
				value={ formatIds( excludeIds ) }
				onChange={ ( value ) =>
					setAttribute( 'excludeIds', parseIds( value ) )
				}
			/>

			{ ( ! postType || postType === 'post' ) && (
				<ToggleControl
					label={ __( 'Ignore sticky posts', 'blockwriter' ) }
					help={ __(
						'Do not move sticky posts to the top of the query.',
						'blockwriter',
					) }
					checked={ attributes.ignoreSticky !== false }
					onChange={ ( value ) => setAttribute( 'ignoreSticky', value ) }
				/>
			) }

			<Button
				className="bw-query-builder__reset"
				variant="secondary"
				onClick={ () =>
					updateBlockAttributes( clientId, {
						tagIds: [],
						authorId: 0,
						offset: 0,
						includeIds: [],
						excludeIds: [],
						ignoreSticky: true,
					} )
				}
			>
				{ __( 'Clear advanced filters', 'blockwriter' ) }
			</Button>
		</div>
	);
}

/**
 * Editor plugin entry point. Registers the query builder sidebar.
 *
 * @return {Element} The editor plugin UI.
 */
function QueryBuilder() {
	// The sidebar components live on `wp.editor` from WordPress 6.6 onward.
	// Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar ) {
		return null;
	}

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ funnel }>
					{ __( 'BlockWriter Query', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ funnel }
				title={ __( 'BlockWriter Query', 'blockwriter' ) }
			>
				<QueryBuilderPanel />
			</PluginSidebar>
		</>
	);
}

registerPlugin( SIDEBAR_NAME, {
	render: QueryBuilder,
} );
