import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { getCoverStyles } from './helpers';

import './style.scss';

export default function save( { attributes } ) {
	const { tagType, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps.save( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getCoverStyles( attributes ),
	} );

	const Tag = tagType;

	return (
		<Tag { ...blockProps }>
			<div className="bw-cover-content">
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
}
