import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getSpacerStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getSpacerStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps } aria-hidden="true" />
		</>
	);
}
