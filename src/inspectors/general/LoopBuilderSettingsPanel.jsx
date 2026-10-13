import {
	CheckboxControl,
	PanelBody,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const LoopBuilderSettingsPanel = ( { attributes, setAttributes } ) => {
	const { postType, perPage, columns, gap, orderBy, order, categoryIds } =
		attributes;

	const postTypeOptions = useSelect( ( select ) => {
		const types = select( 'core' ).getPostTypes( { per_page: -1 } ) || [];

		return types
			.filter( ( type ) => type.viewable && type.slug !== 'attachment' )
			.map( ( type ) => ( {
				label: type.labels?.singular_name || type.slug,
				value: type.slug,
			} ) );
	}, [] );

	const categories = useSelect(
		( select ) => {
			if ( postType !== 'post' ) {
				return [];
			}

			return (
				select( 'core' ).getEntityRecords( 'taxonomy', 'category', {
					per_page: 100,
					_fields: 'id,name',
				} ) || []
			);
		},
		[ postType ],
	);

	const toggleCategory = ( id ) => {
		const next = categoryIds.includes( id )
			? categoryIds.filter( ( value ) => value !== id )
			: [ ...categoryIds, id ];

		setAttributes( { categoryIds: next } );
	};

	return (
		<PanelBody
			title={ __( 'Loop Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Post type', 'blockwriter' ) }
				value={ postType }
				options={ postTypeOptions }
				onChange={ ( value ) =>
					setAttributes( { postType: value, categoryIds: [] } )
				}
			/>

			<RangeControl
				label={ __( 'Number of items', 'blockwriter' ) }
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

			<RangeControl
				label={ __( 'Gap (px)', 'blockwriter' ) }
				value={ gap }
				min={ 0 }
				max={ 80 }
				step={ 2 }
				onChange={ ( value ) => setAttributes( { gap: value } ) }
			/>

			<SelectControl
				label={ __( 'Order by', 'blockwriter' ) }
				value={ orderBy }
				options={ [
					{ label: __( 'Date', 'blockwriter' ), value: 'date' },
					{ label: __( 'Title', 'blockwriter' ), value: 'title' },
					{
						label: __( 'Last modified', 'blockwriter' ),
						value: 'modified',
					},
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

			{ postType === 'post' && categories.length > 0 && (
				<>
					<p>{ __( 'Categories', 'blockwriter' ) }</p>
					<div
						className="bw-loop-builder-categories"
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
	);
};

export default LoopBuilderSettingsPanel;
