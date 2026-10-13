import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	ColorPalette,
	ButtonGroup,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const HeadingSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		tagType,
		headingColor,
		fontSize,
		fontWeight,
		textAlign,
		textTransform,
		letterSpacing,
		lineHeight,
	} = attributes;

	const colors = [
		{ name: 'Black', color: '#111111' },
		{ name: 'Gray', color: '#6b7280' },
		{ name: 'White', color: '#ffffff' },
		{ name: 'Accent', color: '#4f46e5' },
	];

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Heading Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Level', 'blockwriter' ) }
				value={ tagType }
				options={ [
					{ label: 'H1', value: 'h1' },
					{ label: 'H2', value: 'h2' },
					{ label: 'H3', value: 'h3' },
					{ label: 'H4', value: 'h4' },
					{ label: 'H5', value: 'h5' },
					{ label: 'H6', value: 'h6' },
				] }
				onChange={ ( value ) => setAttributes( { tagType: value } ) }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Font Size (px)', 'blockwriter' ) }
				value={ fontSize || 0 }
				onChange={ ( value ) => setAttributes( { fontSize: value || '' } ) }
				min={ 10 }
				max={ 120 }
				step={ 1 }
				allowReset
				resetFallbackValue={ undefined }
			/>

			<SelectControl
				label={ __( 'Font Weight', 'blockwriter' ) }
				value={ fontWeight }
				options={ [
					{ label: 'Default', value: '' },
					{ label: 'Regular (400)', value: '400' },
					{ label: 'Medium (500)', value: '500' },
					{ label: 'Semibold (600)', value: '600' },
					{ label: 'Bold (700)', value: '700' },
					{ label: 'Extra Bold (800)', value: '800' },
				] }
				onChange={ ( value ) => setAttributes( { fontWeight: value } ) }
			/>

			<ButtonGroup aria-label={ __( 'Text Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { textAlign: option.value } ) }
						isPressed={ textAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<SelectControl
				label={ __( 'Text Transform', 'blockwriter' ) }
				value={ textTransform }
				options={ [
					{ label: 'Default', value: '' },
					{ label: 'Uppercase', value: 'uppercase' },
					{ label: 'Lowercase', value: 'lowercase' },
					{ label: 'Capitalize', value: 'capitalize' },
				] }
				onChange={ ( value ) => setAttributes( { textTransform: value } ) }
			/>

			<TextControl
				label={ __( 'Letter Spacing', 'blockwriter' ) }
				help={ __( 'e.g. 0.5px or -0.02em', 'blockwriter' ) }
				value={ letterSpacing }
				onChange={ ( value ) => setAttributes( { letterSpacing: value } ) }
			/>

			<TextControl
				label={ __( 'Line Height', 'blockwriter' ) }
				help={ __( 'e.g. 1.5 or 1.2em', 'blockwriter' ) }
				value={ lineHeight }
				onChange={ ( value ) => setAttributes( { lineHeight: value } ) }
			/>

			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ headingColor }
				onChange={ ( color ) => setAttributes( { headingColor: color } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default HeadingSettingsPanel;
