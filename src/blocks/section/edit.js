import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';

import { PanelBody, SelectControl } from '@wordpress/components';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { tagType, container, paddingY, background } = attributes;

	const blockProps = useBlockProps({
		className: `${paddingY} ${background}`,
	});

	const Tag = tagType;

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<Tag {...blockProps}>
				<div className={container}>
					<InnerBlocks />
				</div>
			</Tag>
		</>
	);
}
