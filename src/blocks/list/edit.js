import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';
import ListMarker from './marker';
import { getListClassName, getListStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { items, markerStyle, htmlId } = attributes;

	const listItems = Array.isArray( items ) ? items : [];

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: getListClassName( attributes ),
		style: getListStyles( attributes ),
	} );

	const updateItem = ( index, text ) => {
		setAttributes( {
			items: listItems.map( ( item, itemIndex ) =>
				itemIndex === index ? { ...item, text } : item,
			),
		} );
	};

	const addItem = () => {
		setAttributes( { items: [ ...listItems, { text: '' } ] } );
	};

	const removeItem = ( index ) => {
		setAttributes( {
			items: listItems.filter( ( item, itemIndex ) => itemIndex !== index ),
		} );
	};

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				{ listItems.length === 0 && (
					<p className="bw-list__hint">
						{ __( 'Add your list items below.', 'blockwriter' ) }
					</p>
				) }
				<ul className="bw-list__items">
					{ listItems.map( ( item, index ) => (
						<li className="bw-list__item" key={ index }>
							<ListMarker style={ markerStyle } index={ index } />
							<RichText
								tagName="span"
								className="bw-list__text"
								value={ item.text }
								onChange={ ( value ) => updateItem( index, value ) }
								placeholder={ __( 'List item', 'blockwriter' ) }
							/>
							<Button
								className="bw-list__remove"
								icon={ trash }
								label={ __( 'Remove item', 'blockwriter' ) }
								isSmall
								isDestructive
								disabled={ listItems.length <= 1 }
								onClick={ () => removeItem( index ) }
							/>
						</li>
					) ) }
				</ul>
				<Button
					className="bw-list__add"
					variant="secondary"
					icon={ plus }
					onClick={ addItem }
				>
					{ __( 'Add Item', 'blockwriter' ) }
				</Button>
			</div>
		</>
	);
}
