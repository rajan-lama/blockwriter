import {
	Button,
	ButtonGroup,
	ColorPalette,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const STAR_COLORS = [
	{ name: __( 'Amber', 'blockwriter' ), color: '#f59e0b' },
	{ name: __( 'Yellow', 'blockwriter' ), color: '#eab308' },
	{ name: __( 'Orange', 'blockwriter' ), color: '#f97316' },
	{ name: __( 'Rose', 'blockwriter' ), color: '#e11d48' },
	{ name: __( 'Indigo', 'blockwriter' ), color: '#4f46e5' },
];

const EMPTY_COLORS = [
	{ name: __( 'Light Gray', 'blockwriter' ), color: '#e5e7eb' },
	{ name: __( 'Gray', 'blockwriter' ), color: '#d1d5db' },
	{ name: __( 'Slate', 'blockwriter' ), color: '#cbd5e1' },
];

const SocialProofSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		showRating,
		ratingValue,
		maxRating,
		reviewCount,
		reviewLabel,
		starColor,
		emptyStarColor,
		showLogos,
		logoColumns,
		grayscale,
		socialProofAlign,
	} = attributes;

	const alignmentOptions = [
		{ label: __( 'Left', 'blockwriter' ), value: 'left' },
		{ label: __( 'Center', 'blockwriter' ), value: 'center' },
		{ label: __( 'Right', 'blockwriter' ), value: 'right' },
	];

	return (
		<PanelBody
			title={ __( 'Social Proof Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Show rating summary', 'blockwriter' ) }
				checked={ !! showRating }
				onChange={ ( value ) => setAttributes( { showRating: value } ) }
			/>

			{ showRating && (
				<>
					<RangeControl
						__nextHasNoMarginBottom
						label={ __( 'Rating value', 'blockwriter' ) }
						value={ ratingValue || 0 }
						onChange={ ( value ) =>
							setAttributes( { ratingValue: value || 0 } )
						}
						min={ 0 }
						max={ parseInt( maxRating, 10 ) || 5 }
						step={ 0.1 }
					/>

					<RangeControl
						__nextHasNoMarginBottom
						label={ __( 'Number of stars', 'blockwriter' ) }
						value={ parseInt( maxRating, 10 ) || 5 }
						onChange={ ( value ) => setAttributes( { maxRating: value || 5 } ) }
						min={ 1 }
						max={ 10 }
						step={ 1 }
					/>

					<TextControl
						label={ __( 'Review count', 'blockwriter' ) }
						value={ String( reviewCount ?? '' ) }
						onChange={ ( value ) =>
							setAttributes( { reviewCount: parseInt( value, 10 ) || 0 } )
						}
						type="number"
						min={ 0 }
					/>

					<TextControl
						label={ __( 'Review label', 'blockwriter' ) }
						value={ reviewLabel }
						onChange={ ( value ) => setAttributes( { reviewLabel: value } ) }
						placeholder={ __( 'reviews', 'blockwriter' ) }
					/>

					<p>{ __( 'Star color', 'blockwriter' ) }</p>
					<ColorPalette
						asButtons="true"
						colors={ STAR_COLORS }
						value={ starColor }
						onChange={ ( color ) => setAttributes( { starColor: color } ) }
						headingLevel="3"
					/>

					<p>{ __( 'Empty star color', 'blockwriter' ) }</p>
					<ColorPalette
						asButtons="true"
						colors={ EMPTY_COLORS }
						value={ emptyStarColor }
						onChange={ ( color ) => setAttributes( { emptyStarColor: color } ) }
						headingLevel="3"
					/>
				</>
			) }

			<ToggleControl
				label={ __( 'Show logos', 'blockwriter' ) }
				checked={ !! showLogos }
				onChange={ ( value ) => setAttributes( { showLogos: value } ) }
			/>

			{ showLogos && (
				<>
					<RangeControl
						__nextHasNoMarginBottom
						label={ __( 'Logo columns', 'blockwriter' ) }
						value={ logoColumns || 4 }
						onChange={ ( value ) =>
							setAttributes( { logoColumns: value || 4 } )
						}
						min={ 2 }
						max={ 6 }
						step={ 1 }
					/>

					<ToggleControl
						label={ __( 'Grayscale logos', 'blockwriter' ) }
						help={ __( 'Logos regain color on hover.', 'blockwriter' ) }
						checked={ !! grayscale }
						onChange={ ( value ) => setAttributes( { grayscale: value } ) }
					/>
				</>
			) }

			<p>{ __( 'Alignment', 'blockwriter' ) }</p>
			<ButtonGroup aria-label={ __( 'Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () =>
							setAttributes( { socialProofAlign: option.value } )
						}
						isPressed={ socialProofAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>
		</PanelBody>
	);
};

export default SocialProofSettingsPanel;
