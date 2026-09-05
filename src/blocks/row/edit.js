import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getRowStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { tagType, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getRowStyles( attributes ),
	} );

	const Tag = tagType;

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<Tag { ...blockProps }>
				<InnerBlocks />
			</Tag>
		</>
	);
}
