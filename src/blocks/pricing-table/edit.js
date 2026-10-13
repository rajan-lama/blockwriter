import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';

import './editor.scss';

const TEMPLATE = [
	[ 'blockwriter/pricing-column' ],
	[ 'blockwriter/pricing-column' ],
	[ 'blockwriter/pricing-column' ],
];

const ALLOWED_BLOCKS = [ 'blockwriter/pricing-column' ];

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
