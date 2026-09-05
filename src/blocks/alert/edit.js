import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getAlertIcon } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { content, alertType, showIcon, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, `bw-alert bw-alert--${ alertType }` ]
				.filter( Boolean )
				.join( ' ' ) || undefined,
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				{ showIcon && (
					<span className="bw-alert-icon">{ getAlertIcon( alertType ) }</span>
				) }
				<RichText
					className="bw-alert-content"
					tagName="div"
					value={ content }
					onChange={ ( value ) => setAttributes( { content: value } ) }
					placeholder={ __( 'Write message…', 'blockwriter' ) }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
				/>
			</div>
		</>
	);
}
