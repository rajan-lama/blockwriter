import {
	Notice,
	PanelBody,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const NewsletterSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		heading,
		description,
		placeholder,
		buttonText,
		showName,
		namePlaceholder,
		actionUrl,
		method,
		emailField,
		nameField,
		consentText,
	} = attributes;

	return (
		<PanelBody
			title={ __( 'Newsletter Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Heading', 'blockwriter' ) }
				value={ heading }
				onChange={ ( value ) => setAttributes( { heading: value } ) }
			/>

			<TextareaControl
				label={ __( 'Description', 'blockwriter' ) }
				value={ description }
				onChange={ ( value ) => setAttributes( { description: value } ) }
				rows={ 2 }
			/>

			<TextControl
				label={ __( 'Email placeholder', 'blockwriter' ) }
				value={ placeholder }
				onChange={ ( value ) => setAttributes( { placeholder: value } ) }
			/>

			<TextControl
				label={ __( 'Button text', 'blockwriter' ) }
				value={ buttonText }
				onChange={ ( value ) => setAttributes( { buttonText: value } ) }
			/>

			<TextareaControl
				label={ __( 'Consent text', 'blockwriter' ) }
				value={ consentText }
				onChange={ ( value ) => setAttributes( { consentText: value } ) }
				help={ __(
					'Optional small print shown below the form.',
					'blockwriter',
				) }
				rows={ 2 }
			/>

			<ToggleControl
				label={ __( 'Include a name field', 'blockwriter' ) }
				checked={ !! showName }
				onChange={ ( value ) => setAttributes( { showName: value } ) }
			/>

			{ showName && (
				<TextControl
					label={ __( 'Name placeholder', 'blockwriter' ) }
					value={ namePlaceholder }
					onChange={ ( value ) => setAttributes( { namePlaceholder: value } ) }
				/>
			) }

			<TextControl
				label={ __( 'Form action URL', 'blockwriter' ) }
				value={ actionUrl }
				onChange={ ( value ) => setAttributes( { actionUrl: value } ) }
				type="url"
				help={ __(
					'Paste the form endpoint provided by your newsletter service (for example a Mailchimp or Brevo embed action).',
					'blockwriter',
				) }
			/>

			{ '' === actionUrl.trim() && (
				<Notice status="warning" isDismissible={ false }>
					{ __(
						'Add a form action URL so submissions are delivered to your newsletter provider.',
						'blockwriter',
					) }
				</Notice>
			) }

			<SelectControl
				label={ __( 'Method', 'blockwriter' ) }
				value={ method }
				options={ [
					{ label: 'POST', value: 'post' },
					{ label: 'GET', value: 'get' },
				] }
				onChange={ ( value ) => setAttributes( { method: value } ) }
			/>

			<TextControl
				label={ __( 'Email field name', 'blockwriter' ) }
				value={ emailField }
				onChange={ ( value ) => setAttributes( { emailField: value } ) }
				help={ __(
					'The "name" attribute expected by your provider, e.g. EMAIL.',
					'blockwriter',
				) }
			/>

			{ showName && (
				<TextControl
					label={ __( 'Name field name', 'blockwriter' ) }
					value={ nameField }
					onChange={ ( value ) => setAttributes( { nameField: value } ) }
				/>
			) }
		</PanelBody>
	);
};

export default NewsletterSettingsPanel;
