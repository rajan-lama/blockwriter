import {
	PanelBody,
	ColorPalette,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ModalSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		triggerText,
		triggerBackground,
		triggerColor,
		panelWidth,
		position,
		panelBackground,
		panelRadius,
		showCloseButton,
		closeOnBackdrop,
	} = attributes;

	const colors = [
		{ name: 'Indigo', color: '#4f46e5' },
		{ name: 'Emerald', color: '#059669' },
		{ name: 'Blue', color: '#2563eb' },
		{ name: 'Amber', color: '#d97706' },
		{ name: 'Rose', color: '#e11d48' },
		{ name: 'White', color: '#ffffff' },
		{ name: 'Slate', color: '#334155' },
	];

	return (
		<PanelBody
			title={ __( 'Modal Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Trigger text', 'blockwriter' ) }
				value={ triggerText }
				onChange={ ( value ) => setAttributes( { triggerText: value } ) }
			/>

			<SelectControl
				label={ __( 'Position', 'blockwriter' ) }
				value={ position }
				options={ [
					{ label: __( 'Center', 'blockwriter' ), value: 'center' },
					{
						label: __( 'Bottom sheet', 'blockwriter' ),
						value: 'bottom',
					},
				] }
				onChange={ ( value ) => setAttributes( { position: value } ) }
			/>

			<RangeControl
				label={ __( 'Panel width (px)', 'blockwriter' ) }
				value={ panelWidth }
				min={ 320 }
				max={ 900 }
				step={ 20 }
				onChange={ ( value ) => setAttributes( { panelWidth: value } ) }
			/>

			<RangeControl
				label={ __( 'Panel corner radius (px)', 'blockwriter' ) }
				value={ panelRadius }
				min={ 0 }
				max={ 40 }
				step={ 2 }
				onChange={ ( value ) => setAttributes( { panelRadius: value } ) }
			/>

			<p>{ __( 'Trigger background', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ triggerBackground }
				onChange={ ( color ) => setAttributes( { triggerBackground: color } ) }
				headingLevel="3"
			/>

			<p>{ __( 'Trigger text color', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ triggerColor }
				onChange={ ( color ) => setAttributes( { triggerColor: color } ) }
				headingLevel="3"
			/>

			<p>{ __( 'Panel background', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ panelBackground }
				onChange={ ( color ) => setAttributes( { panelBackground: color } ) }
				headingLevel="3"
			/>

			<ToggleControl
				label={ __( 'Show close button', 'blockwriter' ) }
				checked={ !! showCloseButton }
				onChange={ ( value ) => setAttributes( { showCloseButton: value } ) }
			/>

			<ToggleControl
				label={ __( 'Close when clicking the backdrop', 'blockwriter' ) }
				checked={ !! closeOnBackdrop }
				onChange={ ( value ) => setAttributes( { closeOnBackdrop: value } ) }
			/>
		</PanelBody>
	);
};

export default ModalSettingsPanel;
