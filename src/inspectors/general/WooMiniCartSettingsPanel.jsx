import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooMiniCartSettingsPanel = ( { attributes, setAttributes } ) => {
	const { title, toggleText, showToggle, showCount, openByDefault } =
		attributes;

	return (
		<PanelBody
			title={ __( 'Mini Cart Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Title', 'blockwriter' ) }
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show toggle button', 'blockwriter' ) }
				help={ __(
					'When disabled the cart contents are always visible.',
					'blockwriter',
				) }
				checked={ !! showToggle }
				onChange={ ( value ) => setAttributes( { showToggle: value } ) }
			/>

			{ showToggle && (
				<>
					<TextControl
						label={ __( 'Toggle text', 'blockwriter' ) }
						value={ toggleText }
						onChange={ ( value ) => setAttributes( { toggleText: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show item count', 'blockwriter' ) }
						checked={ !! showCount }
						onChange={ ( value ) => setAttributes( { showCount: value } ) }
					/>

					<ToggleControl
						label={ __( 'Open by default', 'blockwriter' ) }
						checked={ !! openByDefault }
						onChange={ ( value ) => setAttributes( { openByDefault: value } ) }
					/>
				</>
			) }
		</PanelBody>
	);
};

export default WooMiniCartSettingsPanel;
