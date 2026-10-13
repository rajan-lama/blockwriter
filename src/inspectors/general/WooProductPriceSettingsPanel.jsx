import {
	Button,
	ButtonGroup,
	ColorPalette,
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductPriceSettingsPanel = ( { attributes, setAttributes } ) => {
	const { textAlign, fontSize, priceColor } = attributes;

	const colors = [
		{ name: 'Black', color: '#111111' },
		{ name: 'Gray', color: '#6b7280' },
		{ name: 'Green', color: '#15803d' },
		{ name: 'Red', color: '#b91c1c' },
		{ name: 'Accent', color: '#4f46e5' },
	];

	const alignmentOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Center', value: 'center' },
		{ label: 'Right', value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Price Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ButtonGroup aria-label={ __( 'Price Alignment', 'blockwriter' ) }>
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

			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ priceColor }
				onChange={ ( color ) => setAttributes( { priceColor: color || '' } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default WooProductPriceSettingsPanel;
