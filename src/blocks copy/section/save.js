/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps} style={attributes.generatedCss}>
			<div className="gs-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};
export default Save;
