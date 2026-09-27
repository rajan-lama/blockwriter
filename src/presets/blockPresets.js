/**
 * BlockWriter block presets.
 *
 * A curated registry of named attribute presets for BlockWriter blocks. Each
 * preset is a plain object of block attributes that is merged onto the selected
 * block, so applying a preset only changes the block's own attributes. Presets
 * intentionally avoid content attributes such as `content`, `buttons`, or
 * `steps` so they never overwrite user content.
 *
 * Keys are block names and each value is an ordered list of
 * `{ name, title, description, attributes }` entries.
 */
import { __ } from '@wordpress/i18n';

/**
 * Baseline heading typography attributes. Each heading preset spreads this so
 * applying a preset fully resets typography instead of inheriting values left
 * over from a previously applied preset.
 */
const headingDefaults = {
	headingColor: '',
	fontSize: '',
	fontWeight: '',
	textAlign: '',
	textTransform: '',
	letterSpacing: '',
	lineHeight: '',
};

const blockPresets = {
	'blockwriter/heading': [
		{
			name: 'display',
			title: __( 'Display', 'blockwriter' ),
			description: __( 'Large hero title.', 'blockwriter' ),
			attributes: {
				...headingDefaults,
				tagType: 'h1',
				fontSize: 56,
				fontWeight: '800',
				lineHeight: '1.1',
				letterSpacing: '-0.02em',
				textAlign: 'left',
			},
		},
		{
			name: 'section-title',
			title: __( 'Section title', 'blockwriter' ),
			description: __( 'Standard section heading.', 'blockwriter' ),
			attributes: {
				...headingDefaults,
				tagType: 'h2',
				fontSize: 32,
				fontWeight: '700',
				lineHeight: '1.2',
				textAlign: 'left',
			},
		},
		{
			name: 'centered',
			title: __( 'Centered title', 'blockwriter' ),
			description: __( 'Centered heading for heroes and CTAs.', 'blockwriter' ),
			attributes: {
				...headingDefaults,
				tagType: 'h2',
				fontSize: 36,
				fontWeight: '700',
				lineHeight: '1.2',
				textAlign: 'center',
			},
		},
		{
			name: 'eyebrow',
			title: __( 'Eyebrow', 'blockwriter' ),
			description: __(
				'Small uppercase label above a heading.',
				'blockwriter',
			),
			attributes: {
				...headingDefaults,
				tagType: 'h3',
				fontSize: 14,
				fontWeight: '600',
				textTransform: 'uppercase',
				letterSpacing: '0.08em',
				textAlign: 'left',
			},
		},
	],
	'blockwriter/alert': [
		{
			name: 'info',
			title: __( 'Info', 'blockwriter' ),
			description: __( 'Informational notice.', 'blockwriter' ),
			attributes: { alertType: 'info', showIcon: true },
		},
		{
			name: 'success',
			title: __( 'Success', 'blockwriter' ),
			description: __( 'Positive confirmation.', 'blockwriter' ),
			attributes: { alertType: 'success', showIcon: true },
		},
		{
			name: 'warning',
			title: __( 'Warning', 'blockwriter' ),
			description: __( 'Caution message.', 'blockwriter' ),
			attributes: { alertType: 'warning', showIcon: true },
		},
		{
			name: 'error',
			title: __( 'Error', 'blockwriter' ),
			description: __( 'Error or critical message.', 'blockwriter' ),
			attributes: { alertType: 'error', showIcon: true },
		},
	],
	'blockwriter/card': [
		{
			name: 'elevated',
			title: __( 'Elevated', 'blockwriter' ),
			description: __( 'Rounded card with a soft shadow.', 'blockwriter' ),
			attributes: {
				cardPadding: 'medium',
				borderRadius: 12,
				hasShadow: true,
				cardAlign: 'left',
			},
		},
		{
			name: 'flat',
			title: __( 'Flat', 'blockwriter' ),
			description: __( 'Squared corners without a shadow.', 'blockwriter' ),
			attributes: {
				cardPadding: 'medium',
				borderRadius: 0,
				hasShadow: false,
				cardAlign: 'left',
			},
		},
		{
			name: 'compact',
			title: __( 'Compact', 'blockwriter' ),
			description: __( 'Tighter padding for dense layouts.', 'blockwriter' ),
			attributes: {
				cardPadding: 'small',
				borderRadius: 8,
				hasShadow: false,
				cardAlign: 'left',
			},
		},
		{
			name: 'feature',
			title: __( 'Feature', 'blockwriter' ),
			description: __( 'Spacious, centered, rounded card.', 'blockwriter' ),
			attributes: {
				cardPadding: 'large',
				borderRadius: 16,
				hasShadow: true,
				cardAlign: 'center',
			},
		},
	],
	'blockwriter/grid': [
		{
			name: 'two-columns',
			title: __( 'Two columns', 'blockwriter' ),
			attributes: { gridColumns: 2, gridColumnGap: 24, gridRowGap: 24 },
		},
		{
			name: 'three-columns',
			title: __( 'Three columns', 'blockwriter' ),
			attributes: { gridColumns: 3, gridColumnGap: 24, gridRowGap: 24 },
		},
		{
			name: 'four-columns',
			title: __( 'Four columns', 'blockwriter' ),
			attributes: { gridColumns: 4, gridColumnGap: 20, gridRowGap: 20 },
		},
		{
			name: 'tight',
			title: __( 'Tight gaps', 'blockwriter' ),
			description: __( 'Three columns with small gaps.', 'blockwriter' ),
			attributes: { gridColumns: 3, gridColumnGap: 12, gridRowGap: 12 },
		},
	],
	'blockwriter/cta': [
		{
			name: 'primary',
			title: __( 'Primary', 'blockwriter' ),
			description: __( 'Indigo banner with centered content.', 'blockwriter' ),
			attributes: {
				ctaAlign: 'center',
				ctaBackground: '#4f46e5',
				ctaTextColor: '#ffffff',
			},
		},
		{
			name: 'dark',
			title: __( 'Dark', 'blockwriter' ),
			description: __(
				'Near-black banner with centered content.',
				'blockwriter',
			),
			attributes: {
				ctaAlign: 'center',
				ctaBackground: '#111827',
				ctaTextColor: '#ffffff',
			},
		},
		{
			name: 'light',
			title: __( 'Light', 'blockwriter' ),
			description: __(
				'Light banner with left aligned content.',
				'blockwriter',
			),
			attributes: {
				ctaAlign: 'left',
				ctaBackground: '#f3f4f6',
				ctaTextColor: '#111827',
			},
		},
	],
	'blockwriter/cover': [
		{
			name: 'centered',
			title: __( 'Centered', 'blockwriter' ),
			description: __( 'Centered content over a medium cover.', 'blockwriter' ),
			attributes: {
				contentAlign: 'center',
				minHeight: 480,
				overlayOpacity: 40,
			},
		},
		{
			name: 'tall',
			title: __( 'Tall', 'blockwriter' ),
			description: __( 'Tall cover with a stronger overlay.', 'blockwriter' ),
			attributes: {
				contentAlign: 'center',
				minHeight: 640,
				overlayOpacity: 50,
			},
		},
		{
			name: 'bottom-left',
			title: __( 'Bottom left', 'blockwriter' ),
			description: __(
				'Left aligned content with a light overlay.',
				'blockwriter',
			),
			attributes: {
				contentAlign: 'left',
				minHeight: 400,
				overlayOpacity: 30,
			},
		},
	],
	'blockwriter/hero': [
		{
			name: 'tall-centered',
			title: __( 'Tall centered', 'blockwriter' ),
			description: __(
				'Wide, centered hero with a strong overlay.',
				'blockwriter',
			),
			attributes: {
				contentAlign: 'center',
				contentWidth: 'wide',
				heroHeight: 'tall',
				overlayOpacity: 50,
			},
		},
		{
			name: 'full-screen',
			title: __( 'Full screen', 'blockwriter' ),
			description: __( 'Full height hero with narrow content.', 'blockwriter' ),
			attributes: {
				contentAlign: 'center',
				contentWidth: 'narrow',
				heroHeight: 'full',
				overlayOpacity: 60,
			},
		},
		{
			name: 'compact',
			title: __( 'Compact', 'blockwriter' ),
			description: __( 'Short, left aligned hero.', 'blockwriter' ),
			attributes: {
				contentAlign: 'left',
				contentWidth: 'wide',
				heroHeight: 'short',
				overlayOpacity: 30,
			},
		},
	],
	'blockwriter/image': [
		{
			name: 'rounded',
			title: __( 'Rounded', 'blockwriter' ),
			description: __( 'Centered image with soft corners.', 'blockwriter' ),
			attributes: { borderRadius: 12, objectFit: '', imageAlign: 'center' },
		},
		{
			name: 'circle',
			title: __( 'Circle', 'blockwriter' ),
			description: __( 'Centered circular crop.', 'blockwriter' ),
			attributes: {
				borderRadius: 200,
				objectFit: 'cover',
				imageAlign: 'center',
			},
		},
		{
			name: 'cover',
			title: __( 'Cover', 'blockwriter' ),
			description: __(
				'Left aligned image that fills its box.',
				'blockwriter',
			),
			attributes: { borderRadius: 0, objectFit: 'cover', imageAlign: 'left' },
		},
	],
	'blockwriter/stat': [
		{
			name: 'centered',
			title: __( 'Centered', 'blockwriter' ),
			description: __(
				'Centered stat with a count up animation.',
				'blockwriter',
			),
			attributes: { statAlign: 'center', enableCount: true },
		},
		{
			name: 'left',
			title: __( 'Left aligned', 'blockwriter' ),
			description: __( 'Left aligned stat without animation.', 'blockwriter' ),
			attributes: { statAlign: 'left', enableCount: false },
		},
	],
	'blockwriter/feature': [
		{
			name: 'icon-card',
			title: __( 'Icon card', 'blockwriter' ),
			description: __(
				'Left aligned feature with a rounded icon.',
				'blockwriter',
			),
			attributes: {
				showIcon: true,
				contentAlign: 'left',
				iconPosition: 'top',
				iconShape: 'rounded',
				iconSize: 40,
				iconColor: '#4f46e5',
				iconBackground: '#eef2ff',
			},
		},
		{
			name: 'centered',
			title: __( 'Centered icon', 'blockwriter' ),
			description: __(
				'Centered feature with a circular icon.',
				'blockwriter',
			),
			attributes: {
				showIcon: true,
				contentAlign: 'center',
				iconPosition: 'top',
				iconShape: 'circle',
				iconSize: 32,
				iconColor: '#ffffff',
				iconBackground: '#4f46e5',
			},
		},
		{
			name: 'text-only',
			title: __( 'Text only', 'blockwriter' ),
			description: __( 'Left aligned feature without an icon.', 'blockwriter' ),
			attributes: { showIcon: false, contentAlign: 'left' },
		},
	],
	'blockwriter/team-member': [
		{
			name: 'centered',
			title: __( 'Centered', 'blockwriter' ),
			description: __( 'Centered round photo with a shadow.', 'blockwriter' ),
			attributes: {
				memberAlign: 'center',
				avatarShape: 'round',
				hasShadow: true,
			},
		},
		{
			name: 'compact',
			title: __( 'Compact', 'blockwriter' ),
			description: __(
				'Left aligned square photo without a shadow.',
				'blockwriter',
			),
			attributes: {
				memberAlign: 'left',
				avatarShape: 'square',
				hasShadow: false,
			},
		},
	],
	'blockwriter/quote': [
		{
			name: 'large-accent',
			title: __( 'Large accent', 'blockwriter' ),
			description: __(
				'Large left aligned quote with an accent border.',
				'blockwriter',
			),
			attributes: {
				quoteAlign: 'left',
				quoteSize: 'large',
				borderColor: '#4f46e5',
			},
		},
		{
			name: 'small-centered',
			title: __( 'Small centered', 'blockwriter' ),
			description: __(
				'Small centered quote with a gray border.',
				'blockwriter',
			),
			attributes: {
				quoteAlign: 'center',
				quoteSize: 'small',
				borderColor: '#6b7280',
			},
		},
	],
	'blockwriter/rating': [
		{
			name: 'compact',
			title: __( 'Compact', 'blockwriter' ),
			description: __(
				'Small amber stars with the numeric value.',
				'blockwriter',
			),
			attributes: {
				starSize: 'small',
				starColor: '#f59e0b',
				emptyStarColor: '#e5e7eb',
				showValue: true,
			},
		},
		{
			name: 'large',
			title: __( 'Large', 'blockwriter' ),
			description: __( 'Large amber stars.', 'blockwriter' ),
			attributes: {
				starSize: 'large',
				starColor: '#f59e0b',
				emptyStarColor: '#e5e7eb',
				showValue: false,
			},
		},
	],
	'blockwriter/testimonial': [
		{
			name: 'centered',
			title: __( 'Centered', 'blockwriter' ),
			description: __(
				'Centered quote with a decorative mark.',
				'blockwriter',
			),
			attributes: { testimonialAlign: 'center', showQuoteMark: true },
		},
		{
			name: 'plain-left',
			title: __( 'Plain left', 'blockwriter' ),
			description: __( 'Left aligned quote without the mark.', 'blockwriter' ),
			attributes: { testimonialAlign: 'left', showQuoteMark: false },
		},
	],
};

export default blockPresets;
