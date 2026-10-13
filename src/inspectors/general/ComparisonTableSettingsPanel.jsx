import {
	PanelBody,
	Button,
	SelectControl,
	ColorPalette,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	addProduct,
	removeProduct,
} from '../../blocks/comparison-table/helpers';

const ComparisonTableSettingsPanel = ( { attributes, setAttributes } ) => {
	const { products, rows, highlightIndex, accentColor } = attributes;

	const handleAddProduct = () => {
		const { products: nextProducts, rows: nextRows } = addProduct(
			products,
			rows,
		);

		setAttributes( {
			products: nextProducts,
			rows: nextRows,
		} );
	};

	const handleRemoveProduct = () => {
		if ( products.length <= 1 ) {
			return;
		}

		const { products: nextProducts, rows: nextRows } = removeProduct(
			products,
			rows,
		);

		setAttributes( {
			products: nextProducts,
			rows: nextRows,
			highlightIndex:
				highlightIndex >= nextProducts.length
					? nextProducts.length - 1
					: highlightIndex,
		} );
	};

	const highlightOptions = [
		{ label: __( 'None', 'blockwriter' ), value: '-1' },
		...products.map( ( product, index ) => ( {
			label:
				product.name || `${ __( 'Product', 'blockwriter' ) } ${ index + 1 }`,
			value: String( index ),
		} ) ),
	];

	const colors = [
		{ name: 'Indigo', color: '#4f46e5' },
		{ name: 'Blue', color: '#2563eb' },
		{ name: 'Emerald', color: '#059669' },
		{ name: 'Rose', color: '#e11d48' },
	];

	return (
		<PanelBody
			title={ __( 'Comparison Table Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<Button variant="secondary" onClick={ handleAddProduct }>
				{ __( 'Add Column', 'blockwriter' ) }
			</Button>
			<Button
				variant="secondary"
				disabled={ products.length <= 1 }
				onClick={ handleRemoveProduct }
			>
				{ __( 'Remove Column', 'blockwriter' ) }
			</Button>

			<SelectControl
				label={ __( 'Highlight Column', 'blockwriter' ) }
				value={ String( highlightIndex ) }
				options={ highlightOptions }
				onChange={ ( value ) =>
					setAttributes( { highlightIndex: parseInt( value, 10 ) } )
				}
				__nextHasNoMarginBottom
			/>

			<ColorPalette
				asButtons="true"
				colors={ colors }
				value={ accentColor }
				onChange={ ( color ) => setAttributes( { accentColor: color } ) }
				headingLevel="3"
			/>
		</PanelBody>
	);
};

export default ComparisonTableSettingsPanel;
