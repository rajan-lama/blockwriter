import {
	PanelBody,
	ButtonGroup,
	Button,
	ColorPalette,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const CtaSettingsPanel = ( { attributes, setAttributes } ) => {
	const { ctaAlign, ctaBackground, ctaTextColor } = attributes;

	const colors = [
		{ name: 'Accent', color: '#4f46e5' },
		{ name: 'Dark', color: '#111827' },
		{ name: 'Green', color: '#059669' },
		{ name: 'Orange', color: '#ea580c' },
	];

	const textColors = [
		{ name: 'White', color: '#ffffff' },
		{ name: 'Black', color: '#111111' },
	];

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'CTA Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'HTML Tag', 'blockwriter' ) }
				value={ attributes.tagType }
				options={ [
					{ label: 'Div', value: 'div' },
					{ label: 'Section', value: 'section' },
					{ label: 'Aside', value: 'aside' },
				] }
				onChange={ ( value ) => setAttributes( { tagType: value } ) }
			/>

			<ButtonGroup aria-label={ __( 'Content Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { ctaAlign: option.value } ) }
						isPressed={ ctaAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ ctaBackground }
				onChange={ ( color ) => setAttributes( { ctaBackground: color } ) }
				headingLevel="3"
			/>

			<ColorPalette
				asButtons="true"
				colors={ textColors }
				value={ ctaTextColor }
				onChange={ ( color ) => setAttributes( { ctaTextColor: color } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default CtaSettingsPanel;
