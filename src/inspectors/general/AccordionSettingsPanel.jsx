import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const AccordionSettingsPanel = ( { attributes, setAttributes } ) => {
	const { closeOthers } = attributes;

	return (
		<PanelBody
			title={ __( 'Accordion Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Only one open at a time', 'blockwriter' ) }
				help={ __( 'Opening a panel closes the other panels.', 'blockwriter' ) }
				checked={ !! closeOthers }
				onChange={ ( value ) => setAttributes( { closeOthers: value } ) }
			/>
		</PanelBody>
	);
};

export default AccordionSettingsPanel;
