import { PanelBody, SelectControl, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ListSettingsPanel = ( { attributes, setAttributes } ) => {
	const { markerStyle, markerColor } = attributes;

	const colors = [
		{ name: 'Indigo', color: '#4f46e5' },
		{ name: 'Emerald', color: '#059669' },
		{ name: 'Blue', color: '#2563eb' },
		{ name: 'Amber', color: '#d97706' },
		{ name: 'Rose', color: '#e11d48' },
		{ name: 'Slate', color: '#334155' },
	];

	return (
		<PanelBody
			title={ __( 'List Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Marker Style', 'blockwriter' ) }
				value={ markerStyle }
				options={ [
					{ label: __( 'Check', 'blockwriter' ), value: 'check' },
					{ label: __( 'Arrow', 'blockwriter' ), value: 'arrow' },
					{ label: __( 'Disc', 'blockwriter' ), value: 'disc' },
					{ label: __( 'Dash', 'blockwriter' ), value: 'dash' },
					{ label: __( 'Numbered', 'blockwriter' ), value: 'number' },
				] }
				onChange={ ( value ) => setAttributes( { markerStyle: value } ) }
				__nextHasNoMarginBottom
			/>

			<p>{ __( 'Marker Color', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ markerColor }
				onChange={ ( color ) => setAttributes( { markerColor: color } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default ListSettingsPanel;
