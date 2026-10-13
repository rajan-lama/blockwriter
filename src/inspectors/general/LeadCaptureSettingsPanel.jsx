import {
	Button,
	Notice,
	PanelBody,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const FIELD_TYPES = [
	{ label: __( 'Text', 'blockwriter' ), value: 'text' },
	{ label: __( 'Email', 'blockwriter' ), value: 'email' },
	{ label: __( 'Phone', 'blockwriter' ), value: 'tel' },
	{ label: __( 'URL', 'blockwriter' ), value: 'url' },
	{ label: __( 'Message', 'blockwriter' ), value: 'textarea' },
];

const LeadCaptureSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		heading,
		description,
		fields,
		buttonText,
		actionUrl,
		method,
		consentText,
	} = attributes;

	const fieldList = Array.isArray( fields ) ? fields : [];

	const updateField = ( index, key, value ) => {
		setAttributes( {
			fields: fieldList.map( ( field, position ) =>
				position === index ? { ...field, [ key ]: value } : field,
			),
		} );
	};

	const addField = () => {
		setAttributes( {
			fields: [
				...fieldList,
				{
					label: __( 'New field', 'blockwriter' ),
					name: `field_${ fieldList.length + 1 }`,
					type: 'text',
					placeholder: '',
					required: false,
				},
			],
		} );
	};

	const removeField = ( index ) => {
		setAttributes( {
			fields: fieldList.filter( ( _, position ) => position !== index ),
		} );
	};

	return (
		<PanelBody
			title={ __( 'Lead Capture Settings', 'blockwriter' ) }
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

			<TextControl
				label={ __( 'Form action URL', 'blockwriter' ) }
				value={ actionUrl }
				onChange={ ( value ) => setAttributes( { actionUrl: value } ) }
				type="url"
				help={ __(
					'Paste the form endpoint provided by your form or CRM service.',
					'blockwriter',
				) }
			/>

			{ '' === actionUrl.trim() && (
				<Notice status="warning" isDismissible={ false }>
					{ __(
						'Add a form action URL so submissions are delivered.',
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

			<h3 className="bw-lead-capture__fields-title">
				{ __( 'Fields', 'blockwriter' ) }
			</h3>

			{ fieldList.map( ( field, index ) => (
				<div className="bw-lead-capture__field-control" key={ index }>
					<TextControl
						label={ __( 'Label', 'blockwriter' ) }
						value={ field.label }
						onChange={ ( value ) => updateField( index, 'label', value ) }
					/>

					<TextControl
						label={ __( 'Name', 'blockwriter' ) }
						value={ field.name }
						onChange={ ( value ) => updateField( index, 'name', value ) }
						help={ __(
							'Used as the form field name sent to your provider.',
							'blockwriter',
						) }
					/>

					<SelectControl
						label={ __( 'Type', 'blockwriter' ) }
						value={ field.type }
						options={ FIELD_TYPES }
						onChange={ ( value ) => updateField( index, 'type', value ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'blockwriter' ) }
						value={ field.placeholder }
						onChange={ ( value ) => updateField( index, 'placeholder', value ) }
					/>

					<ToggleControl
						label={ __( 'Required', 'blockwriter' ) }
						checked={ !! field.required }
						onChange={ ( value ) => updateField( index, 'required', value ) }
					/>

					<Button
						variant="link"
						isDestructive
						onClick={ () => removeField( index ) }
					>
						{ __( 'Remove field', 'blockwriter' ) }
					</Button>
				</div>
			) ) }

			<Button variant="secondary" onClick={ addField }>
				{ __( 'Add field', 'blockwriter' ) }
			</Button>
		</PanelBody>
	);
};

export default LeadCaptureSettingsPanel;
