import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TimelineSettingsPanel = ( { attributes, setAttributes } ) => {
	const { timelineColor } = attributes;

	const colors = [
		{ name: 'Indigo', color: '#4f46e5' },
		{ name: 'Blue', color: '#2563eb' },
		{ name: 'Emerald', color: '#059669' },
		{ name: 'Amber', color: '#d97706' },
		{ name: 'Rose', color: '#e11d48' },
		{ name: 'Slate', color: '#334155' },
	];

	return (
		<PanelBody
			title={ __( 'Timeline Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ timelineColor }
				onChange={ ( color ) => setAttributes( { timelineColor: color } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default TimelineSettingsPanel;
