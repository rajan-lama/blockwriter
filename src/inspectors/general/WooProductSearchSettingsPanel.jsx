import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductSearchSettingsPanel = ( { attributes, setAttributes } ) => {
	const { label, placeholder, buttonText, showButton } = attributes;

	return (
		<PanelBody
			title={ __( 'Product Search Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Accessible label', 'blockwriter' ) }
				help={ __(
					'Visually hidden label for the search field.',
					'blockwriter',
				) }
				value={ label }
				onChange={ ( value ) => setAttributes( { label: value } ) }
			/>

			<TextControl
				label={ __( 'Placeholder', 'blockwriter' ) }
				value={ placeholder }
				onChange={ ( value ) => setAttributes( { placeholder: value } ) }
			/>

			<TextControl
				label={ __( 'Button text', 'blockwriter' ) }
				value={ buttonText }
				onChange={ ( value ) => setAttributes( { buttonText: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show search button', 'blockwriter' ) }
				checked={ !! showButton }
				onChange={ ( value ) => setAttributes( { showButton: value } ) }
			/>
		</PanelBody>
	);
};

export default WooProductSearchSettingsPanel;
