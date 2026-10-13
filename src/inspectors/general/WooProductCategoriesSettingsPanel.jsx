import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const WooProductCategoriesSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		layout,
		columns,
		hierarchical,
		hideEmpty,
		showCount,
		showThumbnail,
		orderBy,
		order,
		limit,
	} = attributes;

	return (
		<PanelBody
			title={ __( 'Product Categories Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Layout', 'blockwriter' ) }
				value={ layout }
				options={ [
					{ label: __( 'Grid', 'blockwriter' ), value: 'grid' },
					{ label: __( 'List', 'blockwriter' ), value: 'list' },
					{ label: __( 'Inline', 'blockwriter' ), value: 'inline' },
				] }
				onChange={ ( value ) => setAttributes( { layout: value } ) }
			/>

			{ layout === 'grid' && (
				<RangeControl
					label={ __( 'Columns', 'blockwriter' ) }
					value={ columns }
					min={ 1 }
					max={ 6 }
					step={ 1 }
					onChange={ ( value ) => setAttributes( { columns: value } ) }
				/>
			) }

			<ToggleControl
				label={ __( 'Nest child categories', 'blockwriter' ) }
				checked={ !! hierarchical }
				onChange={ ( value ) => setAttributes( { hierarchical: value } ) }
			/>

			<ToggleControl
				label={ __( 'Hide empty categories', 'blockwriter' ) }
				checked={ !! hideEmpty }
				onChange={ ( value ) => setAttributes( { hideEmpty: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show product count', 'blockwriter' ) }
				checked={ !! showCount }
				onChange={ ( value ) => setAttributes( { showCount: value } ) }
			/>

			{ layout !== 'inline' && (
				<ToggleControl
					label={ __( 'Show thumbnail', 'blockwriter' ) }
					checked={ !! showThumbnail }
					onChange={ ( value ) => setAttributes( { showThumbnail: value } ) }
				/>
			) }

			<SelectControl
				label={ __( 'Order by', 'blockwriter' ) }
				value={ orderBy }
				options={ [
					{ label: __( 'Name', 'blockwriter' ), value: 'name' },
					{ label: __( 'Count', 'blockwriter' ), value: 'count' },
					{ label: __( 'Slug', 'blockwriter' ), value: 'slug' },
					{ label: __( 'Term ID', 'blockwriter' ), value: 'term_id' },
				] }
				onChange={ ( value ) => setAttributes( { orderBy: value } ) }
			/>

			<SelectControl
				label={ __( 'Order', 'blockwriter' ) }
				value={ order }
				options={ [
					{ label: __( 'Ascending', 'blockwriter' ), value: 'ASC' },
					{ label: __( 'Descending', 'blockwriter' ), value: 'DESC' },
				] }
				onChange={ ( value ) => setAttributes( { order: value } ) }
			/>

			<RangeControl
				label={ __( 'Maximum categories', 'blockwriter' ) }
				help={ __( '0 shows all categories.', 'blockwriter' ) }
				value={ limit }
				min={ 0 }
				max={ 100 }
				step={ 1 }
				onChange={ ( value ) => setAttributes( { limit: value } ) }
			/>
		</PanelBody>
	);
};

export default WooProductCategoriesSettingsPanel;
