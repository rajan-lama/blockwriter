import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getTimelineStyles } from './helpers';

import './editor.scss';

const TEMPLATE = [
	[ 'blockwriter/timeline-item' ],
	[ 'blockwriter/timeline-item' ],
	[ 'blockwriter/timeline-item' ],
];

const ALLOWED_BLOCKS = [ 'blockwriter/timeline-item' ];

export default function Edit( { attributes, setAttributes } ) {
	const { htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getTimelineStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<InnerBlocks
					template={ TEMPLATE }
					allowedBlocks={ ALLOWED_BLOCKS }
					templateInsertUpdatesSelection={ false }
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		</>
	);
}
