import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getCoverStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { tagType, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getCoverStyles( attributes ),
	} );

	const Tag = tagType;

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<Tag { ...blockProps }>
				<div className="bw-cover-content">
					<InnerBlocks />
				</div>
			</Tag>
		</>
	);
}
