import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getQuoteStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { content, citation, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getQuoteStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<blockquote { ...blockProps }>
				<RichText
					tagName="p"
					className="bw-quote-content"
					value={ content }
					onChange={ ( value ) => setAttributes( { content: value } ) }
					placeholder={ __( 'Write quote…', 'blockwriter' ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
				/>
				<RichText
					tagName="cite"
					className="bw-quote-citation"
					value={ citation }
					onChange={ ( value ) => setAttributes( { citation: value } ) }
					placeholder={ __( 'Write attribution…', 'blockwriter' ) }
				/>
			</blockquote>
		</>
	);
}
