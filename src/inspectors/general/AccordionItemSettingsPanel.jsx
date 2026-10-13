import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const AccordionItemSettingsPanel = ( { attributes, setAttributes } ) => {
	const { itemOpen } = attributes;

	return (
		<PanelBody
			title={ __( 'Accordion Item Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Open by default', 'blockwriter' ) }
				help={ __( 'Shows the panel content on page load.', 'blockwriter' ) }
				checked={ !! itemOpen }
				onChange={ ( value ) => setAttributes( { itemOpen: value } ) }
			/>
		</PanelBody>
	);
};

export default AccordionItemSettingsPanel;
