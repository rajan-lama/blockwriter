import {
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const StatSettingsPanel = ( { attributes, setAttributes } ) => {
	const { statAlign, enableCount } = attributes;

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Stat Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ButtonGroup aria-label={ __( 'Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { statAlign: option.value } ) }
						isPressed={ statAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<TextControl
				label={ __( 'Prefix', 'blockwriter' ) }
				help={ __( 'Shown before the number, for example $.', 'blockwriter' ) }
				value={ attributes.statPrefix }
				onChange={ ( value ) => setAttributes( { statPrefix: value } ) }
			/>

			<TextControl
				label={ __( 'Suffix', 'blockwriter' ) }
				help={ __( 'Shown after the number, for example %.', 'blockwriter' ) }
				value={ attributes.statSuffix }
				onChange={ ( value ) => setAttributes( { statSuffix: value } ) }
			/>

			<ToggleControl
				label={ __( 'Animate number (count up)', 'blockwriter' ) }
				help={ __(
					'Counts up when the stat scrolls into view.',
					'blockwriter',
				) }
				checked={ !! enableCount }
				onChange={ ( value ) => setAttributes( { enableCount: value } ) }
			/>
		</PanelBody>
	);
};

export default StatSettingsPanel;
