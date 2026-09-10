import { PanelBody, RangeControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SpacerSettingsPanel = ( { attributes, setAttributes } ) => {
	const { spacerHeight } = attributes;

	return (
		<PanelBody
			title={ __( 'Spacer Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Height (px)', 'blockwriter' ) }
				help={ __( 'Amount of vertical space to add.', 'blockwriter' ) }
				value={ spacerHeight }
				onChange={ ( value ) => setAttributes( { spacerHeight: value } ) }
				min={ 0 }
				max={ 600 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 50 }
			/>

			<Button
				variant="secondary"
				isSmall
				onClick={ () => setAttributes( { spacerHeight: 0 } ) }
			>
				{ __( 'Collapse', 'blockwriter' ) }
			</Button>
		</PanelBody>
	);
};

export default SpacerSettingsPanel;
