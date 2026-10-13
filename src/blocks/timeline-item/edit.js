import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { itemDate, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<RichText
					tagName="div"
					className="bw-timeline-item__date"
					value={ itemDate }
					onChange={ ( value ) => setAttributes( { itemDate: value } ) }
					placeholder={ __( 'Date', 'blockwriter' ) }
				/>
				<div className="bw-timeline-item__content">
					<InnerBlocks renderAppender={ InnerBlocks.ButtonBlockAppender } />
				</div>
			</div>
		</>
	);
}
