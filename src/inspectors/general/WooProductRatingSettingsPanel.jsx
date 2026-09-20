import {
	Button,
	ButtonGroup,
	ColorPalette,
	PanelBody,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductRatingSettingsPanel = ( { attributes, setAttributes } ) => {
	const { showStars, showCount, textAlign, fontSize, textColor } = attributes;

	const colors = [
		{ name: 'Black', color: '#111111' },
		{ name: 'Gray', color: '#6b7280' },
		{ name: 'Amber', color: '#d97706' },
		{ name: 'White', color: '#ffffff' },
	];

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Rating Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Show stars', 'blockwriter' ) }
				checked={ !! showStars }
				onChange={ ( value ) => setAttributes( { showStars: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show review count', 'blockwriter' ) }
				checked={ !! showCount }
				onChange={ ( value ) => setAttributes( { showCount: value } ) }
			/>

			<ButtonGroup aria-label={ __( 'Rating Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () =>
							setAttributes( {
								textAlign: textAlign === option.value ? '' : option.value,
							} )
						}
						isPressed={ textAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Font Size (px)', 'blockwriter' ) }
				help={ __( '0 inherits the theme font size.', 'blockwriter' ) }
				value={ fontSize || 0 }
				onChange={ ( value ) => setAttributes( { fontSize: value || 0 } ) }
				min={ 0 }
				max={ 120 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 0 }
			/>

			<p>{ __( 'Text color', 'blockwriter' ) }</p>
			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ textColor }
				onChange={ ( color ) => setAttributes( { textColor: color || '' } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default WooProductRatingSettingsPanel;
