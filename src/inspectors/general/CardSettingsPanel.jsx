import {
	PanelBody,
	ButtonGroup,
	Button,
	RangeControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const CARD_IMAGE_ALLOWED_TYPES = [ 'image' ];

const CardSettingsPanel = ( { attributes, setAttributes } ) => {
	const { cardAlign, cardPadding, borderRadius, hasShadow } = attributes;

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	const onSelectImage = ( media ) => {
		setAttributes( {
			cardImageUrl: media.url,
			cardImageId: media.id,
			cardImageAlt: media.alt || '',
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			cardImageUrl: '',
			cardImageId: 0,
			cardImageAlt: '',
		} );
	};

	return (
		<PanelBody
			title={ __( 'Card Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes={ CARD_IMAGE_ALLOWED_TYPES }
					value={ attributes.cardImageId }
					render={ ( { open } ) => (
						<Button variant="secondary" onClick={ open }>
							{ attributes.cardImageUrl
								? __( 'Replace Image', 'blockwriter' )
								: __( 'Choose Image', 'blockwriter' ) }
						</Button>
					) }
				/>
			</MediaUploadCheck>

			{ attributes.cardImageUrl && (
				<Button variant="link" isDestructive onClick={ onRemoveImage }>
					{ __( 'Remove Image', 'blockwriter' ) }
				</Button>
			) }

			<ButtonGroup aria-label={ __( 'Content Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { cardAlign: option.value } ) }
						isPressed={ cardAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<SelectControl
				label={ __( 'Content Padding', 'blockwriter' ) }
				value={ cardPadding }
				options={ [
					{ label: 'None', value: 'none' },
					{ label: 'Small', value: 'small' },
					{ label: 'Medium', value: 'medium' },
					{ label: 'Large', value: 'large' },
				] }
				onChange={ ( value ) => setAttributes( { cardPadding: value } ) }
			/>

			<SelectControl
				label={ __( 'HTML Tag', 'blockwriter' ) }
				value={ attributes.tagType }
				options={ [
					{ label: 'Div', value: 'div' },
					{ label: 'Article', value: 'article' },
					{ label: 'Aside', value: 'aside' },
				] }
				onChange={ ( value ) => setAttributes( { tagType: value } ) }
			/>

			<RangeControl
				label={ __( 'Border Radius', 'blockwriter' ) }
				value={ borderRadius || 0 }
				onChange={ ( value ) => setAttributes( { borderRadius: value || '' } ) }
				min={ 0 }
				max={ 50 }
			/>

			<ToggleControl
				label={ __( 'Shadow', 'blockwriter' ) }
				checked={ !! hasShadow }
				onChange={ ( value ) => setAttributes( { hasShadow: value } ) }
			/>
		</PanelBody>
	);
};

export default CardSettingsPanel;
