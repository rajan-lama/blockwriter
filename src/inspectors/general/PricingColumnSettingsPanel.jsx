import {
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
	TextareaControl,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PricingColumnSettingsPanel = ( { attributes, setAttributes } ) => {
	const { planAlign, isHighlight } = attributes;

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Pricing Column Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'HTML Tag', 'blockwriter' ) }
				value={ attributes.tagType }
				options={ [
					{ label: 'Div', value: 'div' },
					{ label: 'Article', value: 'article' },
					{ label: 'Aside', value: 'aside' },
					{ label: 'Section', value: 'section' },
				] }
				onChange={ ( value ) => setAttributes( { tagType: value } ) }
			/>

			<ButtonGroup aria-label={ __( 'Content Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { planAlign: option.value } ) }
						isPressed={ planAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<TextareaControl
				label={ __( 'Features (one per line)', 'blockwriter' ) }
				help={ __(
					'Each line becomes a bullet point in the plan.',
					'blockwriter',
				) }
				value={ attributes.features }
				onChange={ ( value ) => setAttributes( { features: value } ) }
				rows={ 6 }
			/>

			<TextControl
				label={ __( 'Button Text', 'blockwriter' ) }
				value={ attributes.buttonText }
				onChange={ ( value ) => setAttributes( { buttonText: value } ) }
			/>

			<TextControl
				type="url"
				label={ __( 'Button URL', 'blockwriter' ) }
				value={ attributes.buttonUrl }
				onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
			/>

			<ToggleControl
				label={ __( 'Highlight this plan', 'blockwriter' ) }
				help={ __( 'Marks the column as the featured option.', 'blockwriter' ) }
				checked={ !! isHighlight }
				onChange={ ( value ) => setAttributes( { isHighlight: value } ) }
			/>
		</PanelBody>
	);
};

export default PricingColumnSettingsPanel;
