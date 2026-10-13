import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './style.scss';

export default function save( { attributes } ) {
	const { htmlId, extraClass } = attributes;

	const blockProps = useBlockProps.save( {
		id: htmlId || undefined,
		className: extraClass || undefined,
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
