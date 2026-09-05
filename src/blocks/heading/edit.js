import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getHeadingStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { tagType, content, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getHeadingStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<RichText
				{ ...blockProps }
				tagName={ tagType }
				value={ content }
				onChange={ ( value ) => setAttributes( { content: value } ) }
				placeholder={ __( 'Write heading…', 'blockwriter' ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</>
	);
}
