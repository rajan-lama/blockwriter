import {
	PanelBody,
	ButtonGroup,
	Button,
	ColorPalette,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { FEATURE_ICON_OPTIONS } from '../../blocks/feature/icons';

const FeatureSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		icon,
		showIcon,
		iconColor,
		iconBackground,
		iconSize,
		iconPosition,
		iconShape,
		contentAlign,
		linkText,
		linkUrl,
		linkNewTab,
	} = attributes;

	const colors = [
		{ name: 'Indigo', color: '#4f46e5' },
		{ name: 'Emerald', color: '#059669' },
		{ name: 'Blue', color: '#2563eb' },
		{ name: 'Amber', color: '#d97706' },
		{ name: 'Rose', color: '#e11d48' },
		{ name: 'Slate', color: '#334155' },
	];

	const positionOptions = [
		{ label: __( 'Top', 'blockwriter' ), value: 'top' },
		{ label: __( 'Left', 'blockwriter' ), value: 'left' },
	];

	const alignmentOptions = [
		{ label: __( 'Left', 'blockwriter' ), value: 'left' },
		{ label: __( 'Center', 'blockwriter' ), value: 'center' },
		{ label: __( 'Right', 'blockwriter' ), value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Feature Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Show icon', 'blockwriter' ) }
				checked={ !! showIcon }
				onChange={ ( value ) => setAttributes( { showIcon: value } ) }
			/>

			{ showIcon && (
				<>
					<SelectControl
						label={ __( 'Icon', 'blockwriter' ) }
						value={ icon }
						options={ FEATURE_ICON_OPTIONS }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
						__nextHasNoMarginBottom
					/>

					<p>{ __( 'Icon color', 'blockwriter' ) }</p>
					<ColorPalette
						asButtons="true"
						colors={ colors }
						value={ iconColor }
						onChange={ ( color ) => setAttributes( { iconColor: color } ) }
						headingLevel="3"
					/>

					<p>{ __( 'Icon background', 'blockwriter' ) }</p>
					<ColorPalette
						asButtons="true"
						colors={ colors }
						value={ iconBackground }
						onChange={ ( color ) => setAttributes( { iconBackground: color } ) }
						headingLevel="3"
					/>

					<RangeControl
						label={ __( 'Icon size (px)', 'blockwriter' ) }
						value={ iconSize }
						min={ 16 }
						max={ 64 }
						step={ 2 }
						onChange={ ( value ) => setAttributes( { iconSize: value } ) }
					/>

					<ButtonGroup aria-label={ __( 'Icon position', 'blockwriter' ) }>
						{ positionOptions.map( ( option ) => (
							<Button
								key={ option.value }
								variant="secondary"
								isSmall
								onClick={ () =>
									setAttributes( {
										iconPosition: option.value,
									} )
								}
								isPressed={ iconPosition === option.value }
							>
								{ option.label }
							</Button>
						) ) }
					</ButtonGroup>

					<SelectControl
						label={ __( 'Icon shape', 'blockwriter' ) }
						value={ iconShape }
						options={ [
							{
								label: __( 'Rounded', 'blockwriter' ),
								value: 'rounded',
							},
							{
								label: __( 'Circle', 'blockwriter' ),
								value: 'circle',
							},
							{
								label: __( 'Square', 'blockwriter' ),
								value: 'square',
							},
							{ label: __( 'None', 'blockwriter' ), value: 'none' },
						] }
						onChange={ ( value ) => setAttributes( { iconShape: value } ) }
					/>
				</>
			) }

			<ButtonGroup aria-label={ __( 'Content alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { contentAlign: option.value } ) }
						isPressed={ contentAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			<TextControl
				label={ __( 'Link text', 'blockwriter' ) }
				value={ linkText }
				onChange={ ( value ) => setAttributes( { linkText: value } ) }
			/>

			<TextControl
				label={ __( 'Link URL', 'blockwriter' ) }
				type="url"
				value={ linkUrl }
				onChange={ ( value ) => setAttributes( { linkUrl: value } ) }
			/>

			<ToggleControl
				label={ __( 'Open link in new tab', 'blockwriter' ) }
				checked={ !! linkNewTab }
				onChange={ ( value ) => setAttributes( { linkNewTab: value } ) }
			/>
		</PanelBody>
	);
};

export default FeatureSettingsPanel;
