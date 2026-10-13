import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getHeroStyles, getHeroContentWidth } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { htmlId, extraClass, contentAlign, contentWidth } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getHeroStyles( attributes ),
	} );

	const contentStyle = {
		textAlign: contentAlign,
		maxWidth: getHeroContentWidth( contentWidth ),
	};

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-hero-content" style={ contentStyle }>
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
