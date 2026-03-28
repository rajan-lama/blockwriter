import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const SlideEdit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[
					['core/paragraph', { placeholder: 'Slide content...' }],
				]}
			/>
		</div>
	);
};

const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType('namespace/slide-block', {
	title: 'Slide',
	parent: ['namespace/slider-block'], // Restrict usage to only within the slider block
	category: 'layout',
	icon: 'slides',
	supports: { reusable: false },
	edit: SlideEdit,
	save,
});
