import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { check, close, plus, trash } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';
import {
	getComparisonTableStyles,
	createRow,
	toggleCell,
	updateRowLabel,
	removeRow,
} from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		featureColLabel,
		products,
		rows,
		highlightIndex,
		htmlId,
		extraClass,
	} = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getComparisonTableStyles( attributes ),
	} );

	const handleAddRow = () => {
		setAttributes( {
			rows: [ ...rows, createRow( products ) ],
		} );
	};

	const handleProductChange = ( index, key, value ) => {
		const nextProducts = products.map( ( product, productIndex ) =>
			productIndex === index ? { ...product, [ key ]: value } : product,
		);

		setAttributes( { products: nextProducts } );
	};

	const renderProductHeader = ( product, index ) => {
		const isFeatured = index === highlightIndex;

		return (
			<th
				key={ index }
				className={ isFeatured ? 'is-featured' : undefined }
				scope="col"
			>
				{ isFeatured && (
					<span className="bw-comparison-table__badge">
						{ __( 'Most Popular', 'blockwriter' ) }
					</span>
				) }
				<RichText
					tagName="span"
					className="bw-comparison-table__product-name"
					value={ product.name }
					onChange={ ( value ) => handleProductChange( index, 'name', value ) }
					placeholder={ __( 'Product', 'blockwriter' ) }
				/>
				<RichText
					tagName="span"
					className="bw-comparison-table__product-price"
					value={ product.price }
					onChange={ ( value ) => handleProductChange( index, 'price', value ) }
					placeholder={ __( 'Price', 'blockwriter' ) }
				/>
			</th>
		);
	};

	const renderCell = ( row, rowIndex, productIndex ) => {
		const included = row.included?.[ productIndex ] ?? false;
		const isFeatured = productIndex === highlightIndex;

		return (
			<td
				key={ productIndex }
				className={ isFeatured ? 'is-featured' : undefined }
			>
				<div className="bw-comparison-table__cell-toggle">
					<Button
						icon={ check }
						label={ __( 'Included', 'blockwriter' ) }
						isSmall
						onClick={ () =>
							setAttributes( {
								rows: toggleCell( rows, rowIndex, productIndex ),
							} )
						}
						isPressed={ included }
						aria-pressed={ included }
					/>
					<Button
						icon={ close }
						label={ __( 'Not included', 'blockwriter' ) }
						isSmall
						onClick={ () =>
							setAttributes( {
								rows: toggleCell( rows, rowIndex, productIndex ),
							} )
						}
						isPressed={ ! included }
						aria-pressed={ ! included }
					/>
				</div>
			</td>
		);
	};

	const renderRow = ( row, rowIndex ) => {
		return (
			<tr key={ rowIndex }>
				<th scope="row">
					<RichText
						tagName="span"
						className="bw-comparison-table__feature-label"
						value={ row.label }
						onChange={ ( value ) =>
							setAttributes( {
								rows: updateRowLabel( rows, rowIndex, value ),
							} )
						}
						placeholder={ __( 'Feature', 'blockwriter' ) }
					/>
				</th>
				{ products.map( ( product, productIndex ) =>
					renderCell( row, rowIndex, productIndex ),
				) }
				<td className="bw-comparison-table__editor-actions">
					<Button
						icon={ trash }
						label={ __( 'Remove feature row', 'blockwriter' ) }
						isSmall
						isDestructive
						onClick={ () =>
							setAttributes( {
								rows: removeRow( rows, rowIndex ),
							} )
						}
					/>
				</td>
			</tr>
		);
	};

	const columnCount = products.length + 1;

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-comparison-table__scroll">
					<table className="bw-comparison-table__table">
						<thead>
							<tr>
								<th className="bw-comparison-table__feature-col" scope="col">
									<RichText
										tagName="span"
										value={ featureColLabel }
										onChange={ ( value ) =>
											setAttributes( { featureColLabel: value } )
										}
										placeholder={ __( 'Features', 'blockwriter' ) }
									/>
								</th>
								{ products.map( renderProductHeader ) }
							</tr>
						</thead>
						<tbody>
							{ rows.length === 0 && (
								<tr>
									<td colSpan={ columnCount + 1 }>
										<div className="bw-comparison-table__empty">
											<p>
												{ __(
													'No features yet. Add your first feature row.',
													'blockwriter',
												) }
											</p>
											<Button
												variant="secondary"
												icon={ plus }
												onClick={ handleAddRow }
											>
												{ __( 'Add Feature Row', 'blockwriter' ) }
											</Button>
										</div>
									</td>
								</tr>
							) }
							{ rows.map( renderRow ) }
						</tbody>
					</table>
				</div>
				{ rows.length > 0 && (
					<div className="bw-comparison-table__add-row">
						<Button variant="secondary" icon={ plus } onClick={ handleAddRow }>
							{ __( 'Add Feature Row', 'blockwriter' ) }
						</Button>
					</div>
				) }
			</div>
		</>
	);
}
