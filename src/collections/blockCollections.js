/**
 * BlockWriter block collections.
 *
 * A curated grouping of the blocks BlockWriter ships with so they can be
 * browsed and inserted from a single editor sidebar. Collections only reference
 * existing block names; titles, descriptions, and icons are read from the block
 * registry at runtime, so this file never duplicates block metadata and never
 * stores or serializes block content.
 */
import { __ } from '@wordpress/i18n';

const blockCollections = [
	{
		name: 'layout',
		title: __( 'Layout', 'blockwriter' ),
		description: __(
			'Structure and spacing primitives for building page layouts.',
			'blockwriter',
		),
		blocks: [
			'blockwriter/section',
			'blockwriter/row',
			'blockwriter/grid',
			'blockwriter/columns',
			'blockwriter/column',
			'blockwriter/spacer',
			'blockwriter/divider',
		],
	},
	{
		name: 'content',
		title: __( 'Content', 'blockwriter' ),
		description: __(
			'Basic text, media, and link blocks for page content.',
			'blockwriter',
		),
		blocks: [
			'blockwriter/heading',
			'blockwriter/text',
			'blockwriter/list',
			'blockwriter/icon',
			'blockwriter/image',
			'blockwriter/video',
			'blockwriter/buttons',
			'blockwriter/quote',
		],
	},
	{
		name: 'components',
		title: __( 'Components', 'blockwriter' ),
		description: __(
			'Ready-made content components such as cards, pricing, and accordions.',
			'blockwriter',
		),
		blocks: [
			'blockwriter/card',
			'blockwriter/feature',
			'blockwriter/testimonial',
			'blockwriter/testimonial-slider',
			'blockwriter/pricing-column',
			'blockwriter/pricing-table',
			'blockwriter/stat',
			'blockwriter/accordion',
			'blockwriter/accordion-item',
			'blockwriter/tabs',
			'blockwriter/alert',
			'blockwriter/cta',
			'blockwriter/steps',
			'blockwriter/timeline',
			'blockwriter/timeline-item',
			'blockwriter/comparison-table',
			'blockwriter/logo-grid',
			'blockwriter/team-member',
			'blockwriter/carousel',
		],
	},
	{
		name: 'navigation',
		title: __( 'Navigation and utility', 'blockwriter' ),
		description: __(
			'Navigation, overlays, and utility blocks for site layouts.',
			'blockwriter',
		),
		blocks: [
			'blockwriter/advance-header',
			'blockwriter/back-to-top',
			'blockwriter/modal',
			'blockwriter/offcanvas',
			'blockwriter/sticky-section',
			'blockwriter/search',
			'blockwriter/archive-header',
			'blockwriter/pagination',
			'blockwriter/term-list',
		],
	},
	{
		name: 'dynamic',
		title: __( 'Dynamic content', 'blockwriter' ),
		description: __(
			'Blocks that query and display WordPress posts and authors.',
			'blockwriter',
		),
		blocks: [
			'blockwriter/post-grid',
			'blockwriter/post-carousel',
			'blockwriter/related-posts',
			'blockwriter/author-box',
		],
	},
	{
		name: 'woocommerce',
		title: __( 'WooCommerce', 'blockwriter' ),
		description: __(
			'Product and cart blocks, shown only when WooCommerce is active.',
			'blockwriter',
		),
		blocks: [
			'blockwriter/woo-product-grid',
			'blockwriter/woo-product-carousel',
			'blockwriter/woo-product-card',
			'blockwriter/woo-product-categories',
			'blockwriter/woo-product-price',
			'blockwriter/woo-product-rating',
			'blockwriter/woo-product-reviews',
			'blockwriter/woo-product-search',
			'blockwriter/woo-product-filters',
			'blockwriter/woo-add-to-cart',
			'blockwriter/woo-mini-cart',
			'blockwriter/woo-cart',
			'blockwriter/woo-checkout',
			'blockwriter/woo-sale-badge',
		],
	},
];

export default blockCollections;
