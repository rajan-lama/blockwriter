import {
	ColorPalette,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooAddToCartSettingsPanel = ( { attributes, setAttributes } ) => {
	const { text, buttonColor, textColor, fontSize, borderRadius, fullWidth } =
		attributes;

	const colors = [
		{ name: 'Slate', color: '#1e293b' },
		{ name: 'Indigo', color: '#4f46e5' },
		{ name: 'Green', color: '#15803d' },
		{ name: 'Red', color: '#b91c1c' },
		{ name: 'White', color: '#ffffff' },
	];

	return (
		<PanelBody
			title={ __( 'Add To Cart Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Button label', 'blockwriter' ) }
				help={ __(
					'Leave empty to use the WooCommerce label.',
					'blockwriter',
				) }
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
			/>

			<ToggleControl
				label={ __( 'Full width', 'blockwriter' ) }
				help={ __(
					'Stretch the button to the full column width.',
					'blockwriter',
				) }
				checked={ !! fullWidth }
				onChange={ ( value ) => setAttributes( { fullWidth: value } ) }
			/>

			<p>{ __( 'Button color', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ buttonColor }
				onChange={ ( color ) => setAttributes( { buttonColor: color || '' } ) }
				headingLevel="3"
			/>

			<p>{ __( 'Text color', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ textColor }
				onChange={ ( color ) => setAttributes( { textColor: color || '' } ) }
				headingLevel="3"
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Font Size (px)', 'blockwriter' ) }
				value={ fontSize || 0 }
				onChange={ ( value ) => setAttributes( { fontSize: value || 0 } ) }
				min={ 0 }
				max={ 120 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 0 }
			/>

			<RangeControl
				label={ __( 'Corner radius (px)', 'blockwriter' ) }
				value={ borderRadius }
				onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
				min={ 0 }
				max={ 999 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 4 }
			/>
		</PanelBody>
	);
};

export default WooAddToCartSettingsPanel;
