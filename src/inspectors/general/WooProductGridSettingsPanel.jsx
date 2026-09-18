import {
	CheckboxControl,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const WooProductGridSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		perPage,
		columns,
		layout,
		orderBy,
		order,
		categoryIds,
		featuredOnly,
		onSaleOnly,
		showImage,
		showCategory,
		showRating,
		showPrice,
		showAddToCart,
	} = attributes;

	const categories = useSelect( ( select ) => {
		return (
			select( 'core' ).getEntityRecords( 'taxonomy', 'product_cat', {
				per_page: 100,
				_fields: 'id,name',
			} ) || []
		);
	}, [] );

	const toggleCategory = ( id ) => {
		const next = categoryIds.includes( id )
			? categoryIds.filter( ( value ) => value !== id )
			: [ ...categoryIds, id ];

		setAttributes( { categoryIds: next } );
	};

	return (
		<>
			<PanelBody
				title={ __( 'Product Query', 'blockwriter' ) }
				initialOpen={ true }
			>
				<RangeControl
					label={ __( 'Number of products', 'blockwriter' ) }
					value={ perPage }
					min={ 1 }
					max={ 24 }
					step={ 1 }
					onChange={ ( value ) => setAttributes( { perPage: value } ) }
				/>

				<RangeControl
					label={ __( 'Columns', 'blockwriter' ) }
					value={ columns }
					min={ 1 }
					max={ 4 }
					step={ 1 }
					onChange={ ( value ) => setAttributes( { columns: value } ) }
				/>

				<SelectControl
					label={ __( 'Layout', 'blockwriter' ) }
					value={ layout }
					options={ [
						{ label: __( 'Grid', 'blockwriter' ), value: 'grid' },
						{ label: __( 'List', 'blockwriter' ), value: 'list' },
					] }
					onChange={ ( value ) => setAttributes( { layout: value } ) }
				/>

				<SelectControl
					label={ __( 'Order by', 'blockwriter' ) }
					value={ orderBy }
					options={ [
						{ label: __( 'Date', 'blockwriter' ), value: 'date' },
						{ label: __( 'Title', 'blockwriter' ), value: 'title' },
						{ label: __( 'Price', 'blockwriter' ), value: 'price' },
						{
							label: __( 'Popularity', 'blockwriter' ),
							value: 'popularity',
						},
						{ label: __( 'Rating', 'blockwriter' ), value: 'rating' },
						{
							label: __( 'Menu order', 'blockwriter' ),
							value: 'menu_order',
						},
						{ label: __( 'Random', 'blockwriter' ), value: 'rand' },
					] }
					onChange={ ( value ) => setAttributes( { orderBy: value } ) }
				/>

				<SelectControl
					label={ __( 'Order', 'blockwriter' ) }
					value={ order }
					options={ [
						{
							label: __( 'Descending', 'blockwriter' ),
							value: 'DESC',
						},
						{ label: __( 'Ascending', 'blockwriter' ), value: 'ASC' },
					] }
					onChange={ ( value ) => setAttributes( { order: value } ) }
				/>

				<ToggleControl
					label={ __( 'Featured products only', 'blockwriter' ) }
					checked={ !! featuredOnly }
					onChange={ ( value ) => setAttributes( { featuredOnly: value } ) }
				/>

				<ToggleControl
					label={ __( 'Products on sale only', 'blockwriter' ) }
					checked={ !! onSaleOnly }
					onChange={ ( value ) => setAttributes( { onSaleOnly: value } ) }
				/>

				{ categories.length > 0 && (
					<>
						<p>{ __( 'Product categories', 'blockwriter' ) }</p>
						<div
							className="bw-woo-product-grid-categories"
							style={ {
								maxHeight: 180,
								overflowY: 'auto',
								marginBottom: 12,
							} }
						>
							{ categories.map( ( category ) => (
								<CheckboxControl
									key={ category.id }
									label={ category.name }
									checked={ categoryIds.includes( category.id ) }
									onChange={ () => toggleCategory( category.id ) }
								/>
							) ) }
						</div>
					</>
				) }
			</PanelBody>

			<PanelBody
				title={ __( 'Product Display', 'blockwriter' ) }
				initialOpen={ false }
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
		</>
	);
};

export default WooProductGridSettingsPanel;
