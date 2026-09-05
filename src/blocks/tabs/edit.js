import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import {
	addTabItem,
	removeTabItem,
	updateTabItem,
	clampIndex,
} from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { tabItems, htmlId, extraClass } = attributes;

	const items = Array.isArray( tabItems ) ? tabItems : [];

	const [ activeIndex, setActiveIndex ] = useState( 0 );

	const safeIndex = clampIndex( activeIndex, items.length );

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
	} );

	const onAddTab = () => {
		addTabItem( tabItems, setAttributes );
		setActiveIndex( items.length );
	};

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-tabs-header" role="tablist">
					{ items.map( ( item, index ) => (
						<Button
							key={ index }
							className={
								'bw-tabs-tab' + ( index === safeIndex ? ' is-active' : '' )
							}
							variant="tertiary"
							onClick={ () => setActiveIndex( index ) }
						>
							<RichText
								tagName="span"
								value={ item.label }
								onChange={ ( value ) =>
									updateTabItem(
										index,
										'label',
										value,
										tabItems,
										setAttributes,
									)
								}
								placeholder={ __( 'Tab label', 'blockwriter' ) }
							/>
						</Button>
					) ) }
					<Button
						className="bw-tabs-add"
						variant="primary"
						isSmall
						onClick={ onAddTab }
					>
						+
					</Button>
				</div>

				<div className="bw-tabs-panels">
					{ items.length === 0 && (
						<p className="bw-tabs-empty">
							{ __(
								'No tabs yet. Use the + button to add one.',
								'blockwriter',
							) }
						</p>
					) }

					{ items.map( ( item, index ) => (
						<div
							className="bw-tabs-panel"
							key={ index }
							role="tabpanel"
							hidden={ index !== safeIndex }
						>
							<RichText
								tagName="div"
								value={ item.content }
								onChange={ ( value ) =>
									updateTabItem(
										index,
										'content',
										value,
										tabItems,
										setAttributes,
									)
								}
								placeholder={ __( 'Panel content…', 'blockwriter' ) }
							/>
						</div>
					) ) }
				</div>

				{ items.length > 1 && (
					<ButtonGroup className="bw-tabs-actions">
						<Button
							variant="link"
							isDestructive
							isSmall
							onClick={ () => {
								const current = clampIndex( activeIndex, items.length );
								const remaining = items.length - 1;
								removeTabItem( current, tabItems, setAttributes );
								setActiveIndex( clampIndex( current, remaining ) );
							} }
						>
							{ __( 'Remove active tab', 'blockwriter' ) }
						</Button>
					</ButtonGroup>
				) }
			</div>
		</>
	);
}
