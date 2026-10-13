import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooCartSettingsPanel = ( { attributes, setAttributes } ) => {
	const { title } = attributes;

	return (
		<PanelBody
			title={ __( 'Cart Settings', 'blockwriter' ) }
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

export default WooCartSettingsPanel;
