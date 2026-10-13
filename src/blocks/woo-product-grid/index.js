/**
 * Registers the product grid block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import advancedOptionsAttributes from '../../constants/advancedOptionsAttributes';
import layoutOptionsAttributes from '../../constants/layoutOptionsAttributes';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	attributes: {
		...metadata.attributes,
		...advancedOptionsAttributes,
		...layoutOptionsAttributes,
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );

registerBlockVariation( metadata.name, {
	name: 'product-list',
	title: __( 'BW Product List', 'blockwriter' ),
	description: __(
		'A single-column list of WooCommerce products.',
		'blockwriter',
	),
	icon: 'list-view',
	attributes: {
		layout: 'list',
		columns: 1,
	},
	isActive: ( blockAttributes ) => blockAttributes.layout === 'list',
} );
