/**
 * BlockWriter design sections.
 *
 * Registers a set of predefined section layouts as variations of the
 * BlockWriter Section block. Each variation carries a template of inner blocks,
 * so inserting it from the block inserter creates a ready-made design section
 * without BlockWriter storing or parsing any serialized block markup.
 */
import { getBlockType, registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { grid, page, payment, starFilled, symbol } from '@wordpress/icons';

const SECTION_BLOCK = 'blockwriter/section';

/**
 * Builds a heading inner block template.
 *
 * @param {string} content    Heading text.
 * @param {Object} attributes Extra heading attributes.
 *
 * @return {Array} Inner block template.
 */
function headingBlock( content, attributes = {} ) {
	return [ 'blockwriter/heading', { content, ...attributes } ];
}

/**
 * Builds a text inner block template.
 *
 * @param {string} content    Text content.
 * @param {Object} attributes Extra text attributes.
 *
 * @return {Array} Inner block template.
 */
function textBlock( content, attributes = {} ) {
	return [ 'blockwriter/text', { content, ...attributes } ];
}

/**
 * Builds a feature inner block template.
 *
 * @param {string} title       Feature title.
 * @param {string} description Feature description.
 *
 * @return {Array} Inner block template.
 */
function featureBlock( title, description ) {
	return [ 'blockwriter/feature', { title, description } ];
}

/**
 * Builds a stat inner block template.
 *
 * @param {string} statNumber Stat value.
 * @param {string} statLabel  Stat label.
 *
 * @return {Array} Inner block template.
 */
function statBlock( statNumber, statLabel ) {
	return [ 'blockwriter/stat', { statNumber, statLabel } ];
}

/**
 * Builds a pricing column inner block template.
 *
 * @param {string} planName   Plan name.
 * @param {string} planPrice  Plan price.
 * @param {string} features   Newline separated feature list.
 * @param {string} buttonText Button label.
 * @param {Object} attributes Extra attributes.
 *
 * @return {Array} Inner block template.
 */
function pricingBlock(
	planName,
	planPrice,
	features,
	buttonText,
	attributes = {},
) {
	return [
		'blockwriter/pricing-column',
		{
			planName,
			planPrice,
			planPeriod: __( '/mo', 'blockwriter' ),
			features,
			buttonText,
			buttonUrl: '#',
			...attributes,
		},
	];
}

/**
 * Builds a grid inner block template with children.
 *
 * @param {number} columns     Number of grid columns.
 * @param {Array}  innerBlocks Child inner block templates.
 *
 * @return {Array} Inner block template.
 */
function gridBlock( columns, innerBlocks ) {
	return [
		'blockwriter/grid',
		{ gridColumns: columns, gridColumnGap: 32, gridRowGap: 32 },
		innerBlocks,
	];
}

/**
 * Builds a button group inner block template.
 *
 * @param {Array} buttons Button definitions.
 *
 * @return {Array} Inner block template.
 */
function buttonsBlock( buttons ) {
	return [ 'blockwriter/buttons', { buttons } ];
}

/**
 * Joins feature strings into the newline separated format used by the pricing
 * block while keeping each feature separately translatable.
 *
 * @param {...string} items Feature strings.
 *
 * @return {string} Newline separated feature list.
 */
function featureList( ...items ) {
	return items.join( '\n' );
}

const designSections = [
	{
		name: 'design-hero',
		title: __( 'Hero section', 'blockwriter' ),
		description: __(
			'Centered hero with a heading, supporting text, and buttons.',
			'blockwriter',
		),
		icon: page,
		category: 'blockwriter',
		keywords: [ 'hero', 'section', 'banner', 'header' ],
		attributes: { paddingY: 'py-5' },
		innerBlocks: [
			headingBlock( __( 'Build something people love', 'blockwriter' ), {
				tagType: 'h1',
				fontSize: 48,
				fontWeight: '700',
				lineHeight: '1.15',
				textAlign: 'center',
			} ),
			textBlock(
				__(
					'A short supporting line that explains the value of your offer.',
					'blockwriter',
				),
				{ fontSize: 18, lineHeight: '1.6', textAlign: 'center' },
			),
			buttonsBlock( [
				{ text: __( 'Get started', 'blockwriter' ), url: '#' },
				{ text: __( 'Learn more', 'blockwriter' ), url: '#' },
			] ),
		],
	},
	{
		name: 'design-features',
		title: __( 'Feature grid', 'blockwriter' ),
		description: __(
			'Three feature columns with a title and description each.',
			'blockwriter',
		),
		icon: grid,
		category: 'blockwriter',
		keywords: [ 'features', 'benefits', 'grid', 'section' ],
		attributes: { paddingY: 'py-5' },
		innerBlocks: [
			headingBlock( __( 'Why choose us', 'blockwriter' ), {
				tagType: 'h2',
				fontSize: 32,
				fontWeight: '700',
				textAlign: 'center',
			} ),
			gridBlock( 3, [
				featureBlock(
					__( 'Fast', 'blockwriter' ),
					__( 'Ship changes quickly with reusable blocks.', 'blockwriter' ),
				),
				featureBlock(
					__( 'Flexible', 'blockwriter' ),
					__( 'Compose layouts that fit any content.', 'blockwriter' ),
				),
				featureBlock(
					__( 'Accessible', 'blockwriter' ),
					__( 'Built on accessible WordPress patterns.', 'blockwriter' ),
				),
			] ),
		],
	},
	{
		name: 'design-stats',
		title: __( 'Stats row', 'blockwriter' ),
		description: __( 'Three animated statistics in a row.', 'blockwriter' ),
		icon: symbol,
		category: 'blockwriter',
		keywords: [ 'stats', 'numbers', 'counter', 'section' ],
		attributes: { paddingY: 'py-5' },
		innerBlocks: [
			gridBlock( 3, [
				statBlock( '150+', __( 'Projects delivered', 'blockwriter' ) ),
				statBlock( '98%', __( 'Client satisfaction', 'blockwriter' ) ),
				statBlock( '12', __( 'Years of experience', 'blockwriter' ) ),
			] ),
		],
	},
	{
		name: 'design-cta',
		title: __( 'Call to action', 'blockwriter' ),
		description: __(
			'Centered call to action with a heading, text, and button.',
			'blockwriter',
		),
		icon: symbol,
		category: 'blockwriter',
		keywords: [ 'cta', 'call to action', 'banner', 'section' ],
		attributes: { paddingY: 'py-5' },
		innerBlocks: [
			headingBlock( __( 'Ready to get started?', 'blockwriter' ), {
				tagType: 'h2',
				fontSize: 36,
				fontWeight: '700',
				textAlign: 'center',
			} ),
			textBlock(
				__(
					'Create an account and launch your first section today.',
					'blockwriter',
				),
				{ fontSize: 18, textAlign: 'center' },
			),
			buttonsBlock( [
				{ text: __( 'Create account', 'blockwriter' ), url: '#' },
			] ),
		],
	},
	{
		name: 'design-pricing',
		title: __( 'Pricing table', 'blockwriter' ),
		description: __(
			'Three pricing plans with a highlighted recommended plan.',
			'blockwriter',
		),
		icon: payment,
		category: 'blockwriter',
		keywords: [ 'pricing', 'plans', 'table', 'section' ],
		attributes: { paddingY: 'py-5' },
		innerBlocks: [
			headingBlock( __( 'Simple, transparent pricing', 'blockwriter' ), {
				tagType: 'h2',
				fontSize: 32,
				fontWeight: '700',
				textAlign: 'center',
			} ),
			gridBlock( 3, [
				pricingBlock(
					__( 'Starter', 'blockwriter' ),
					'$9',
					featureList(
						__( '1 project', 'blockwriter' ),
						__( 'Basic support', 'blockwriter' ),
					),
					__( 'Choose Starter', 'blockwriter' ),
				),
				pricingBlock(
					__( 'Growth', 'blockwriter' ),
					'$29',
					featureList(
						__( '10 projects', 'blockwriter' ),
						__( 'Priority support', 'blockwriter' ),
					),
					__( 'Choose Growth', 'blockwriter' ),
					{ isHighlight: true },
				),
				pricingBlock(
					__( 'Scale', 'blockwriter' ),
					'$99',
					featureList(
						__( 'Unlimited projects', 'blockwriter' ),
						__( 'Dedicated support', 'blockwriter' ),
					),
					__( 'Choose Scale', 'blockwriter' ),
				),
			] ),
		],
	},
	{
		name: 'design-testimonial',
		title: __( 'Testimonial section', 'blockwriter' ),
		description: __(
			'Centered testimonial with a quote and attribution.',
			'blockwriter',
		),
		icon: starFilled,
		category: 'blockwriter',
		keywords: [ 'testimonial', 'quote', 'review', 'section' ],
		attributes: { paddingY: 'py-5' },
		innerBlocks: [
			[
				'blockwriter/testimonial',
				{
					quote: __( 'BlockWriter cut our build time in half.', 'blockwriter' ),
					authorName: 'Jordan Lee',
					authorRole: __( 'Head of Design', 'blockwriter' ),
					testimonialAlign: 'center',
				},
			],
		],
	},
];

// Only register when the Section block is available so a missing block cannot
// break the rest of the editor bundle.
if ( getBlockType( SECTION_BLOCK ) ) {
	designSections.forEach( ( variation ) => {
		registerBlockVariation( SECTION_BLOCK, variation );
	} );
}
