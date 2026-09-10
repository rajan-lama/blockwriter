import {
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const AVATAR_ALLOWED_TYPES = [ 'image' ];

const TeamMemberSettingsPanel = ( { attributes, setAttributes } ) => {
	const { memberAlign, avatarShape, hasShadow } = attributes;

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
			title={ __( 'Team Member Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelectAvatar }
					allowedTypes={ AVATAR_ALLOWED_TYPES }
					value={ attributes.avatarId }
					render={ ( { open } ) => (
						<Button variant="secondary" onClick={ open }>
							{ attributes.avatarUrl
								? __( 'Replace Photo', 'blockwriter' )
								: __( 'Choose Photo', 'blockwriter' ) }
						</Button>
					) }
				/>
			</MediaUploadCheck>

			{ attributes.avatarUrl && (
				<Button variant="link" isDestructive onClick={ onRemoveAvatar }>
					{ __( 'Remove Photo', 'blockwriter' ) }
				</Button>
			) }

			<SelectControl
				label={ __( 'HTML Tag', 'blockwriter' ) }
				value={ attributes.tagType }
				options={ [
					{ label: 'Div', value: 'div' },
					{ label: 'Article', value: 'article' },
					{ label: 'Aside', value: 'aside' },
					{ label: 'Section', value: 'section' },
				] }
				onChange={ ( value ) => setAttributes( { tagType: value } ) }
			/>

			<ButtonGroup aria-label={ __( 'Content Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { memberAlign: option.value } ) }
						isPressed={ memberAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<SelectControl
				label={ __( 'Photo Shape', 'blockwriter' ) }
				value={ avatarShape }
				options={ [
					{ label: 'Round', value: 'round' },
					{ label: 'Square', value: 'square' },
				] }
				onChange={ ( value ) => setAttributes( { avatarShape: value } ) }
			/>

			<ToggleControl
				label={ __( 'Shadow', 'blockwriter' ) }
				checked={ !! hasShadow }
				onChange={ ( value ) => setAttributes( { hasShadow: value } ) }
			/>
		</PanelBody>
	);
};

export default TeamMemberSettingsPanel;
