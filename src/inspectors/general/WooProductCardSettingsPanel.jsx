import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductCardSettingsPanel = ( { attributes, setAttributes } ) => {
	const { showImage, showCategory, showRating, showPrice, showAddToCart } =
		attributes;

	return (
		<PanelBody
			title={ __( 'Product Card Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Show image', 'blockwriter' ) }
				checked={ !! showImage }
				onChange={ ( value ) => setAttributes( { showImage: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show categories', 'blockwriter' ) }
				checked={ !! showCategory }
				onChange={ ( value ) => setAttributes( { showCategory: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show rating', 'blockwriter' ) }
				checked={ !! showRating }
				onChange={ ( value ) => setAttributes( { showRating: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show price', 'blockwriter' ) }
				checked={ !! showPrice }
				onChange={ ( value ) => setAttributes( { showPrice: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show add to cart', 'blockwriter' ) }
				checked={ !! showAddToCart }
				onChange={ ( value ) => setAttributes( { showAddToCart: value } ) }
			/>
		</PanelBody>
	);
};

export default WooProductCardSettingsPanel;
