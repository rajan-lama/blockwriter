import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getTextStyles, getTextClasses } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { tagType, content, htmlId, extraClass } = attributes;

	const className = [ extraClass, getTextClasses( attributes ) ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: className || undefined,
		style: getTextStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<RichText
				{ ...blockProps }
				tagName={ tagType }
				value={ content }
				onChange={ ( value ) => setAttributes( { content: value } ) }
				placeholder={ __( 'Write text…', 'blockwriter' ) }
				allowedFormats={ [
					'core/bold',
					'core/italic',
					'core/link',
					'core/strikethrough',
				] }
			/>
		</>
	);
}
