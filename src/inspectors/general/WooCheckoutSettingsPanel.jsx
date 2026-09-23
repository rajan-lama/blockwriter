import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooCheckoutSettingsPanel = ( { attributes, setAttributes } ) => {
	const { title } = attributes;

	return (
		<PanelBody
			title={ __( 'Checkout Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Title', 'blockwriter' ) }
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
		</PanelBody>
	);
};

export default WooCheckoutSettingsPanel;
