import { MediaUpload } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ButtonGroup,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ImageSettingsPanel = ( { attributes, setAttributes } ) => {
	const { alt, imageWidth, imageHeight, objectFit, borderRadius, imageAlign } =
		attributes;

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Image Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Alt Text', 'blockwriter' ) }
				help={ __(
					'Describe the image for accessibility and SEO.',
					'blockwriter',
				) }
				value={ alt }
				onChange={ ( value ) => setAttributes( { alt: value } ) }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Width (px)', 'blockwriter' ) }
				value={ imageWidth || 0 }
				onChange={ ( value ) => setAttributes( { imageWidth: value || '' } ) }
				min={ 1 }
				max={ 2000 }
				step={ 1 }
				allowReset
				resetFallbackValue={ undefined }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Height (px)', 'blockwriter' ) }
				value={ imageHeight || 0 }
				onChange={ ( value ) => setAttributes( { imageHeight: value || '' } ) }
				min={ 1 }
				max={ 2000 }
				step={ 1 }
				allowReset
				resetFallbackValue={ undefined }
			/>

			<SelectControl
				label={ __( 'Object Fit', 'blockwriter' ) }
				help={ __( 'How the image fits its set dimensions.', 'blockwriter' ) }
				value={ objectFit }
				options={ [
					{ label: 'Default', value: '' },
					{ label: 'Cover', value: 'cover' },
					{ label: 'Contain', value: 'contain' },
					{ label: 'Fill', value: 'fill' },
				] }
				onChange={ ( value ) => setAttributes( { objectFit: value } ) }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Border Radius (px)', 'blockwriter' ) }
				value={ borderRadius || 0 }
				onChange={ ( value ) => setAttributes( { borderRadius: value || '' } ) }
				min={ 0 }
				max={ 200 }
				step={ 1 }
				allowReset
				resetFallbackValue={ undefined }
			/>

			<ButtonGroup aria-label={ __( 'Image Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { imageAlign: option.value } ) }
						isPressed={ imageAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<div style={ { marginTop: '12px' } }>
				<MediaUpload
					allowedTypes={ [ 'image' ] }
					value={ attributes.id }
					onSelect={ ( media ) =>
						setAttributes( {
							url: media.url,
							id: media.id,
							alt: media.alt || attributes.alt,
						} )
					}
					render={ ( { open } ) => (
						<Button variant="secondary" onClick={ open }>
							{ __( 'Replace Image', 'blockwriter' ) }
						</Button>
					) }
				/>
			</div>
		</PanelBody>
	);
};

export default ImageSettingsPanel;
