import {
	ColorPalette,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooSaleBadgeSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		text,
		showPercentage,
		badgeColor,
		textColor,
		fontSize,
		borderRadius,
	} = attributes;

	const colors = [
		{ name: 'Slate', color: '#1e293b' },
		{ name: 'Red', color: '#b91c1c' },
		{ name: 'Green', color: '#15803d' },
		{ name: 'Amber', color: '#d97706' },
		{ name: 'White', color: '#ffffff' },
	];

	return (
		<PanelBody
			title={ __( 'Sale Badge Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Badge text', 'blockwriter' ) }
				help={ __( 'Leave empty to use the default label.', 'blockwriter' ) }
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show discount percentage', 'blockwriter' ) }
				help={ __(
					'Replaces the label with the calculated percentage off.',
					'blockwriter',
				) }
				checked={ !! showPercentage }
				onChange={ ( value ) => setAttributes( { showPercentage: value } ) }
			/>

			<p>{ __( 'Badge color', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ badgeColor }
				onChange={ ( color ) => setAttributes( { badgeColor: color || '' } ) }
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
				resetFallbackValue={ 999 }
			/>
		</PanelBody>
	);
};

export default WooSaleBadgeSettingsPanel;
