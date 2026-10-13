import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductReviewsSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		perPage,
		order,
		headingLevel,
		showTitle,
		showRating,
		showAvatar,
		showDate,
		showVerified,
	} = attributes;

	return (
		<PanelBody
			title={ __( 'Product Reviews Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<RangeControl
				label={ __( 'Number of reviews', 'blockwriter' ) }
				help={ __( '0 shows all reviews.', 'blockwriter' ) }
				value={ perPage }
				min={ 0 }
				max={ 50 }
				step={ 1 }
				onChange={ ( value ) => setAttributes( { perPage: value } ) }
			/>

			<SelectControl
				label={ __( 'Order', 'blockwriter' ) }
				value={ order }
				options={ [
					{
						label: __( 'Newest first', 'blockwriter' ),
						value: 'DESC',
					},
					{
						label: __( 'Oldest first', 'blockwriter' ),
						value: 'ASC',
					},
				] }
				onChange={ ( value ) => setAttributes( { order: value } ) }
			/>

			<SelectControl
				label={ __( 'Heading level', 'blockwriter' ) }
				value={ headingLevel }
				options={ [
					{ label: 'H2', value: 2 },
					{ label: 'H3', value: 3 },
					{ label: 'H4', value: 4 },
					{ label: 'H5', value: 5 },
					{ label: 'H6', value: 6 },
				] }
				onChange={ ( value ) =>
					setAttributes( { headingLevel: parseInt( value, 10 ) } )
				}
			/>

			<ToggleControl
				label={ __( 'Show review count heading', 'blockwriter' ) }
				checked={ !! showTitle }
				onChange={ ( value ) => setAttributes( { showTitle: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show rating', 'blockwriter' ) }
				checked={ !! showRating }
				onChange={ ( value ) => setAttributes( { showRating: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show avatar', 'blockwriter' ) }
				checked={ !! showAvatar }
				onChange={ ( value ) => setAttributes( { showAvatar: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show date', 'blockwriter' ) }
				checked={ !! showDate }
				onChange={ ( value ) => setAttributes( { showDate: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show verified owner label', 'blockwriter' ) }
				checked={ !! showVerified }
				onChange={ ( value ) => setAttributes( { showVerified: value } ) }
			/>
		</PanelBody>
	);
};

export default WooProductReviewsSettingsPanel;
