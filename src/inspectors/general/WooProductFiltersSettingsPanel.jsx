import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductFiltersSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		title,
		showCategories,
		categoryLimit,
		showCounts,
		showPrice,
		priceMin,
		priceMax,
		buttonText,
	} = attributes;

	return (
		<PanelBody
			title={ __( 'Product Filters Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<TextControl
				label={ __( 'Title', 'blockwriter' ) }
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show product categories', 'blockwriter' ) }
				checked={ !! showCategories }
				onChange={ ( value ) => setAttributes( { showCategories: value } ) }
			/>

			{ showCategories && (
				<>
					<RangeControl
						label={ __( 'Maximum categories', 'blockwriter' ) }
						value={ categoryLimit }
						min={ 1 }
						max={ 50 }
						onChange={ ( value ) => setAttributes( { categoryLimit: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show product counts', 'blockwriter' ) }
						checked={ !! showCounts }
						onChange={ ( value ) => setAttributes( { showCounts: value } ) }
					/>
				</>
			) }

			<ToggleControl
				label={ __( 'Show price filter', 'blockwriter' ) }
				checked={ !! showPrice }
				onChange={ ( value ) => setAttributes( { showPrice: value } ) }
			/>

			{ showPrice && (
				<>
					<TextControl
						label={ __( 'Minimum price', 'blockwriter' ) }
						type="number"
						min={ 0 }
						value={ priceMin }
						onChange={ ( value ) =>
							setAttributes( {
								priceMin: parseInt( value, 10 ) || 0,
							} )
						}
					/>

					<TextControl
						label={ __( 'Maximum price', 'blockwriter' ) }
						type="number"
						min={ 0 }
						value={ priceMax }
						onChange={ ( value ) =>
							setAttributes( {
								priceMax: parseInt( value, 10 ) || 0,
							} )
						}
					/>

					<TextControl
						label={ __( 'Button text', 'blockwriter' ) }
						value={ buttonText }
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
					/>
				</>
			) }
		</PanelBody>
	);
};

export default WooProductFiltersSettingsPanel;
