/**
 * BlockWriter block collection.
 *
 * Registers an editor sidebar that browses BlockWriter's own blocks grouped
 * into curated collections and inserts a block at the current position.
 *
 * Block metadata (title, description, icon) is read from the block registry,
 * so collections only reference block names and nothing is duplicated or
 * persisted.
 */
import { createBlock } from '@wordpress/blocks';
import {
	Button,
	Notice,
	PanelBody,
	SearchControl,
} from '@wordpress/components';
import { select as dataSelect, useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { grid } from '@wordpress/icons';

import blockCollections from '../collections/blockCollections';

import './block-collection.scss';

const SIDEBAR_NAME = 'blockwriter-block-collection';

/**
 * Resolves the curated collections against the registered blocks.
 *
 * @return {Array} Collections with their registered block items.
 */
function useCollections() {
	return useSelect( ( select ) => {
		const blocksStore = select( 'core/blocks' );

		return blockCollections
			.map( ( collection ) => ( {
				...collection,
				items: collection.blocks
					.map( ( name ) => {
						const blockType = blocksStore.getBlockType( name );

						if ( ! blockType ) {
							return null;
						}

						return {
							name,
							title: blockType.title,
							description: blockType.description,
							icon: blockType.icon,
						};
					} )
					.filter( Boolean ),
			} ) )
			.filter( ( collection ) => collection.items.length > 0 );
	}, [] );
}

/**
 * Determines whether any of the given values contains a search term.
 *
 * @param {Array}  values Values to search.
 * @param {string} needle Lowercase search term.
 *
 * @return {boolean} Whether a match was found.
 */
function hasMatch( values, needle ) {
	return values.filter( Boolean ).join( ' ' ).toLowerCase().includes( needle );
}

/**
 * Filters collections and their blocks by a search term.
 *
 * @param {Array}  collections Collections to filter.
 * @param {string} term        Search term.
 *
 * @return {Array} Filtered collections.
 */
function filterCollections( collections, term ) {
	if ( ! term ) {
		return collections;
	}

	const needle = term.toLowerCase();

	return collections
		.map( ( collection ) => {
			const collectionMatches = hasMatch(
				[ collection.title, collection.description ],
				needle,
			);

			const items = collectionMatches
				? collection.items
				: collection.items.filter( ( item ) =>
						hasMatch( [ item.title, item.description ], needle ),
				  );

			return { ...collection, items };
		} )
		.filter( ( collection ) => collection.items.length > 0 );
}

/**
 * The block collection sidebar content.
 *
 * @return {Element} The collection list.
 */
function BlockCollectionPanel() {
	const collections = useCollections();
	const [ search, setSearch ] = useState( '' );

	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const { createNotice } = useDispatch( 'core/notices' );

	const filteredCollections = filterCollections( collections, search );

	const insertBlock = ( item ) => {
		const block = createBlock( item.name );
		const insertionPoint =
			dataSelect( 'core/block-editor' ).getBlockInsertionPoint();

		insertBlocks( block, insertionPoint.index, insertionPoint.rootClientId );

		createNotice(
			'success',
			sprintf(
				/* translators: %s: block title. */
				__( '%s block inserted.', 'blockwriter' ),
				item.title,
			),
			{ type: 'snackbar' },
		);
	};

	return (
		<div className="bw-block-collection">
			<p className="bw-block-collection__intro">
				{ __(
					'Browse BlockWriter blocks by collection and insert one at the current position.',
					'blockwriter',
				) }
			</p>

			{ collections.length === 0 && (
				<Notice status="info" isDismissible={ false }>
					{ __( 'No BlockWriter blocks are available yet.', 'blockwriter' ) }
				</Notice>
			) }

			{ collections.length > 0 && (
				<>
					<SearchControl
						label={ __( 'Search blocks', 'blockwriter' ) }
						value={ search }
						onChange={ setSearch }
					/>

					{ filteredCollections.length === 0 && (
						<p className="bw-block-collection__empty">
							{ __( 'No blocks match your search.', 'blockwriter' ) }
						</p>
					) }

					{ filteredCollections.map( ( collection ) => (
						<PanelBody
							key={ collection.name }
							title={ collection.title }
							initialOpen
						>
							{ collection.description && (
								<p className="bw-block-collection__description">
									{ collection.description }
								</p>
							) }

							<div className="bw-block-collection__items">
								{ collection.items.map( ( item ) => (
									<Button
										key={ item.name }
										className="bw-block-collection__item"
										variant="secondary"
										icon={ item.icon }
										onClick={ () => insertBlock( item ) }
									>
										<span className="bw-block-collection__item-title">
											{ item.title }
										</span>
										{ item.description && (
											<span className="bw-block-collection__item-description">
												{ item.description }
											</span>
										) }
									</Button>
								) ) }
							</div>
						</PanelBody>
					) ) }
				</>
			) }
		</div>
	);
}

/**
 * Editor plugin entry point. Registers the collection sidebar.
 *
 * @return {Element} The editor plugin UI.
 */
function BlockCollection() {
	// The sidebar components live on `wp.editor` from WordPress 6.6 onward.
	// Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar ) {
		return null;
	}

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ grid }>
					{ __( 'BlockWriter Blocks', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ grid }
				title={ __( 'BlockWriter Blocks', 'blockwriter' ) }
			>
				<BlockCollectionPanel />
			</PluginSidebar>
		</>
	);
}

registerPlugin( SIDEBAR_NAME, {
	render: BlockCollection,
} );
