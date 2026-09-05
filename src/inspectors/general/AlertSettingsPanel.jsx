import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const AlertSettingsPanel = ( { attributes, setAttributes } ) => {
	const { alertType, showIcon } = attributes;

	return (
		<PanelBody
			title={ __( 'Alert Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Type', 'blockwriter' ) }
				value={ alertType }
				options={ [
					{ label: 'Info', value: 'info' },
					{ label: 'Success', value: 'success' },
					{ label: 'Warning', value: 'warning' },
					{ label: 'Error', value: 'error' },
				] }
				onChange={ ( value ) => setAttributes( { alertType: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show Icon', 'blockwriter' ) }
				checked={ showIcon }
				onChange={ ( value ) => setAttributes( { showIcon: value } ) }
			/>
		</PanelBody>
	);
};

export default AlertSettingsPanel;
