import {
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const TestimonialSettingsPanel = ( { attributes, setAttributes } ) => {
	const { testimonialAlign, showQuoteMark } = attributes;

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	const onSelectAvatar = ( media ) => {
		setAttributes( {
			avatarUrl: media.url,
			avatarId: media.id,
			avatarAlt: media.alt || '',
		} );
	};

	const onRemoveAvatar = () => {
		setAttributes( {
			avatarUrl: '',
			avatarId: 0,
			avatarAlt: '',
		} );
	};

	return (
		<PanelBody
			title={ __( 'Testimonial Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ButtonGroup aria-label={ __( 'Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () =>
							setAttributes( { testimonialAlign: option.value } )
						}
						isPressed={ testimonialAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<ToggleControl
				label={ __( 'Show decorative quote mark', 'blockwriter' ) }
				checked={ !! showQuoteMark }
				onChange={ ( value ) => setAttributes( { showQuoteMark: value } ) }
			/>

			{ attributes.avatarUrl ? (
				<Button variant="link" isDestructive onClick={ onRemoveAvatar }>
					{ __( 'Remove Avatar', 'blockwriter' ) }
				</Button>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectAvatar }
						allowedTypes={ [ 'image' ] }
						value={ attributes.avatarId }
						render={ ( { open } ) => (
							<Button variant="secondary" onClick={ open }>
								{ __( 'Add Avatar', 'blockwriter' ) }
							</Button>
						) }
					/>
				</MediaUploadCheck>
			) }
		</PanelBody>
	);
};

export default TestimonialSettingsPanel;
