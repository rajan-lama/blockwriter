import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { BackToTopIcon } from './icon';
import { getBackToTopStyleVars, getBackToTopClassName } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, getBackToTopClassName( attributes ) ]
				.filter( Boolean )
				.join( ' ' ) || undefined,
		style: getBackToTopStyleVars( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-btt__editor">
					<span className="bw-btt__button" aria-hidden="true">
						{ BackToTopIcon }
					</span>
					<span className="bw-btt__editor-label">
						{ __( 'Back to top button', 'blockwriter' ) }
					</span>
				</div>
			</div>
		</>
	);
}
