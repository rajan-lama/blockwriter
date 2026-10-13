import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const SOURCE_OPTIONS = [
	{
		label: __( 'Post title', 'blockwriter' ),
		value: 'post-title',
	},
	{
		label: __( 'Post excerpt', 'blockwriter' ),
		value: 'post-excerpt',
	},
	{
		label: __( 'Post date', 'blockwriter' ),
		value: 'post-date',
	},
	{
		label: __( 'Post author', 'blockwriter' ),
		value: 'post-author',
	},
	{
		label: __( 'Post terms', 'blockwriter' ),
		value: 'post-terms',
	},
	{
		label: __( 'Custom field', 'blockwriter' ),
		value: 'post-meta',
	},
	{
		label: __( 'Site title', 'blockwriter' ),
		value: 'site-title',
	},
	{
		label: __( 'Site tagline', 'blockwriter' ),
		value: 'site-tagline',
	},
	{
		label: __( 'Site URL', 'blockwriter' ),
		value: 'site-url',
	},
	{
		label: __( 'Current year', 'blockwriter' ),
		value: 'current-year',
	},
	{
		label: __( 'Archive title', 'blockwriter' ),
		value: 'archive-title',
	},
	{
		label: __( 'Archive description', 'blockwriter' ),
		value: 'archive-description',
	},
	{
		label: __( 'Search query', 'blockwriter' ),
		value: 'search-query',
	},
];

const LINKABLE_SOURCES = [
	'post-title',
	'post-excerpt',
	'post-author',
	'site-title',
	'site-url',
];

const TAG_OPTIONS = [
	{ label: __( 'Paragraph', 'blockwriter' ), value: 'p' },
	{ label: __( 'Span', 'blockwriter' ), value: 'span' },
	{ label: __( 'Div', 'blockwriter' ), value: 'div' },
	{ label: __( 'Heading 1', 'blockwriter' ), value: 'h1' },
	{ label: __( 'Heading 2', 'blockwriter' ), value: 'h2' },
	{ label: __( 'Heading 3', 'blockwriter' ), value: 'h3' },
	{ label: __( 'Heading 4', 'blockwriter' ), value: 'h4' },
	{ label: __( 'Heading 5', 'blockwriter' ), value: 'h5' },
	{ label: __( 'Heading 6', 'blockwriter' ), value: 'h6' },
];

const DynamicContentSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		source,
		tagName,
		link,
		metaKey,
		taxonomy,
		separator,
		dateFormat,
		excerptLength,
		prefix,
		suffix,
	} = attributes;

	const taxonomies = useSelect( ( select ) => {
		const records = select( 'core' ).getTaxonomies( { per_page: -1 } ) || [];

		return records
			.filter( ( record ) => record.visibility?.public )
			.map( ( record ) => ( {
				label: record.labels?.singular_name || record.slug,
				value: record.slug,
			} ) );
	}, [] );

	return (
		<PanelBody
			title={ __( 'Dynamic Content Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Source', 'blockwriter' ) }
				value={ source }
				options={ SOURCE_OPTIONS }
				onChange={ ( value ) => setAttributes( { source: value } ) }
			/>

			<SelectControl
				label={ __( 'HTML tag', 'blockwriter' ) }
				value={ tagName }
				options={ TAG_OPTIONS }
				onChange={ ( value ) => setAttributes( { tagName: value } ) }
			/>

			{ LINKABLE_SOURCES.includes( source ) && (
				<ToggleControl
					label={ __( 'Link to source', 'blockwriter' ) }
					checked={ !! link }
					onChange={ ( value ) => setAttributes( { link: value } ) }
				/>
			) }

			{ source === 'post-excerpt' && (
				<RangeControl
					label={ __( 'Excerpt length (words)', 'blockwriter' ) }
					value={ excerptLength }
					min={ 5 }
					max={ 80 }
					step={ 1 }
					onChange={ ( value ) => setAttributes( { excerptLength: value } ) }
				/>
			) }

			{ source === 'post-date' && (
				<TextControl
					label={ __( 'Date format', 'blockwriter' ) }
					help={ __( 'PHP date format, for example F j, Y.', 'blockwriter' ) }
					value={ dateFormat }
					onChange={ ( value ) => setAttributes( { dateFormat: value } ) }
				/>
			) }

			{ source === 'post-terms' && (
				<>
					<SelectControl
						label={ __( 'Taxonomy', 'blockwriter' ) }
						value={ taxonomy }
						options={ taxonomies }
						onChange={ ( value ) => setAttributes( { taxonomy: value } ) }
					/>

					<TextControl
						label={ __( 'Separator', 'blockwriter' ) }
						value={ separator }
						onChange={ ( value ) => setAttributes( { separator: value } ) }
					/>
				</>
			) }

			{ source === 'post-meta' && (
				<TextControl
					label={ __( 'Custom field key', 'blockwriter' ) }
					help={ __(
						'Enter the meta key of the field to display.',
						'blockwriter',
					) }
					value={ metaKey }
					onChange={ ( value ) => setAttributes( { metaKey: value } ) }
				/>
			) }

			<TextControl
				label={ __( 'Prefix', 'blockwriter' ) }
				value={ prefix }
				onChange={ ( value ) => setAttributes( { prefix: value } ) }
			/>

			<TextControl
				label={ __( 'Suffix', 'blockwriter' ) }
				value={ suffix }
				onChange={ ( value ) => setAttributes( { suffix: value } ) }
			/>
		</PanelBody>
	);
};

export default DynamicContentSettingsPanel;
