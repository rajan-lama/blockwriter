import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const RelatedPostsSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		perPage,
		columns,
		orderBy,
		order,
		showFeaturedImage,
		imageSize,
		showExcerpt,
		excerptLength,
		showDate,
		readMoreText,
	} = attributes;

	return (
		<PanelBody
			title={ __( 'Related Posts Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<p>
				{ __(
					'Posts sharing taxonomy terms with the current entry. When no shared terms exist, the most recent entries are shown.',
					'blockwriter',
				) }
			</p>

			<RangeControl
				label={ __( 'Number of items', 'blockwriter' ) }
				value={ perPage }
				min={ 1 }
				max={ 12 }
				step={ 1 }
				onChange={ ( value ) => setAttributes( { perPage: value } ) }
			/>

			<RangeControl
				label={ __( 'Columns', 'blockwriter' ) }
				value={ columns }
				min={ 1 }
				max={ 4 }
				step={ 1 }
				onChange={ ( value ) => setAttributes( { columns: value } ) }
			/>

			<SelectControl
				label={ __( 'Order by', 'blockwriter' ) }
				value={ orderBy }
				options={ [
					{ label: __( 'Date', 'blockwriter' ), value: 'date' },
					{ label: __( 'Title', 'blockwriter' ), value: 'title' },
					{
						label: __( 'Last modified', 'blockwriter' ),
						value: 'modified',
					},
					{ label: __( 'Random', 'blockwriter' ), value: 'rand' },
				] }
				onChange={ ( value ) => setAttributes( { orderBy: value } ) }
			/>

			<SelectControl
				label={ __( 'Order', 'blockwriter' ) }
				value={ order }
				options={ [
					{
						label: __( 'Descending', 'blockwriter' ),
						value: 'DESC',
					},
					{ label: __( 'Ascending', 'blockwriter' ), value: 'ASC' },
				] }
				onChange={ ( value ) => setAttributes( { order: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show featured image', 'blockwriter' ) }
				checked={ !! showFeaturedImage }
				onChange={ ( value ) => setAttributes( { showFeaturedImage: value } ) }
			/>

			{ showFeaturedImage && (
				<SelectControl
					label={ __( 'Image size', 'blockwriter' ) }
					value={ imageSize }
					options={ [
						{
							label: __( 'Thumbnail', 'blockwriter' ),
							value: 'thumbnail',
						},
						{ label: __( 'Medium', 'blockwriter' ), value: 'medium' },
						{
							label: __( 'Medium large', 'blockwriter' ),
							value: 'medium_large',
						},
						{ label: __( 'Large', 'blockwriter' ), value: 'large' },
						{ label: __( 'Full', 'blockwriter' ), value: 'full' },
					] }
					onChange={ ( value ) => setAttributes( { imageSize: value } ) }
				/>
			) }

			<ToggleControl
				label={ __( 'Show excerpt', 'blockwriter' ) }
				checked={ !! showExcerpt }
				onChange={ ( value ) => setAttributes( { showExcerpt: value } ) }
			/>

			{ showExcerpt && (
				<RangeControl
					label={ __( 'Excerpt length (words)', 'blockwriter' ) }
					value={ excerptLength }
					min={ 5 }
					max={ 60 }
					step={ 1 }
					onChange={ ( value ) => setAttributes( { excerptLength: value } ) }
				/>
			) }

			<ToggleControl
				label={ __( 'Show date', 'blockwriter' ) }
				checked={ !! showDate }
				onChange={ ( value ) => setAttributes( { showDate: value } ) }
			/>

			<TextControl
				label={ __( 'Read more text', 'blockwriter' ) }
				help={ __( 'Leave empty to hide the read more link.', 'blockwriter' ) }
				value={ readMoreText }
				onChange={ ( value ) => setAttributes( { readMoreText: value } ) }
			/>
		</PanelBody>
	);
};

export default RelatedPostsSettingsPanel;
