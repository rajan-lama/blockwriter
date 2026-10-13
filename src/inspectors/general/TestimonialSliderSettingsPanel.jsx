import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TestimonialSliderSettingsPanel = ( { attributes, setAttributes } ) => {
	const { autoplay, interval, showArrows, showDots, showQuoteMark } =
		attributes;

	return (
		<PanelBody
			title={ __( 'Slider Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Autoplay', 'blockwriter' ) }
				checked={ !! autoplay }
				onChange={ ( value ) => setAttributes( { autoplay: value } ) }
			/>

			{ autoplay && (
				<RangeControl
					label={ __( 'Autoplay delay (ms)', 'blockwriter' ) }
					value={ interval }
					min={ 2000 }
					max={ 15000 }
					step={ 500 }
					onChange={ ( value ) => setAttributes( { interval: value } ) }
				/>
			) }

			<ToggleControl
				label={ __( 'Show navigation arrows', 'blockwriter' ) }
				checked={ !! showArrows }
				onChange={ ( value ) => setAttributes( { showArrows: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show navigation dots', 'blockwriter' ) }
				checked={ !! showDots }
				onChange={ ( value ) => setAttributes( { showDots: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show decorative quote mark', 'blockwriter' ) }
				checked={ !! showQuoteMark }
				onChange={ ( value ) => setAttributes( { showQuoteMark: value } ) }
			/>
		</PanelBody>
	);
};

export default TestimonialSliderSettingsPanel;
