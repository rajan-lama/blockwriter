import {
	PanelBody,
	SelectControl,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

const StepsSettingsPanel = ( { attributes, setAttributes } ) => {
	const { steps, stepsLayout } = attributes;

	const items = Array.isArray( steps ) ? steps : [];

	const updateStep = ( index, field, value ) => {
		const updated = items.map( ( step, stepIndex ) => {
			if ( stepIndex !== index ) {
				return step;
			}

			return {
				...step,
				[ field ]: value,
			};
		} );

		setAttributes( { steps: updated } );
	};

	const removeStep = ( index ) => {
		setAttributes( { steps: items.filter( ( step, i ) => i !== index ) } );
	};

	const addStep = () => {
		setAttributes( {
			steps: [ ...items, { title: '', description: '' } ],
		} );
	};

	return (
		<PanelBody
			title={ __( 'Steps Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Layout', 'blockwriter' ) }
				value={ stepsLayout }
				options={ [
					{ label: 'Vertical', value: 'vertical' },
					{ label: 'Horizontal', value: 'horizontal' },
				] }
				onChange={ ( value ) => setAttributes( { stepsLayout: value } ) }
			/>

			{ items.map( ( step, index ) => (
				<div className="bw-step-settings" key={ index }>
					<h4>
						{
							/* translators: %d: Step number. */
							sprintf( __( 'Step %d', 'blockwriter' ), index + 1 )
						}
					</h4>

					<TextControl
						label={ __( 'Title', 'blockwriter' ) }
						value={ String( step.title || '' ) }
						onChange={ ( value ) => updateStep( index, 'title', value ) }
					/>

					<TextareaControl
						label={ __( 'Description', 'blockwriter' ) }
						value={ String( step.description || '' ) }
						onChange={ ( value ) => updateStep( index, 'description', value ) }
						rows={ 3 }
					/>

					<Button
						variant="link"
						isDestructive
						isSmall
						onClick={ () => removeStep( index ) }
					>
						{ __( 'Remove step', 'blockwriter' ) }
					</Button>
				</div>
			) ) }

			<Button
				variant="secondary"
				isSmall
				onClick={ addStep }
				className="bw-steps-add"
			>
				{ __( 'Add Step', 'blockwriter' ) }
			</Button>
		</PanelBody>
	);
};

export default StepsSettingsPanel;
