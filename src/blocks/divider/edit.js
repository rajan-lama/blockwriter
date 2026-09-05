import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getDividerStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<hr className="bw-divider" style={ getDividerStyles( attributes ) } />
			</div>
		</>
	);
}
