import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ReactSlider from './ReactSlider';

const ALLOWED_BLOCKS = ['namespace/slide-block'];
const BLOCK_TEMPLATE = [['namespace/slide-block']];

const SliderEdit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<ReactSlider>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={BLOCK_TEMPLATE}
				/>
			</ReactSlider>
		</div>
	);
};

const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<ReactSlider>
				<InnerBlocks.Content />
			</ReactSlider>
		</div>
	);
};

registerBlockType('namespace/slider-block', {
	title: 'Custom Slick Slider',
	category: 'layout',
	icon: 'images-alt2',
	edit: SliderEdit,
	save,
});
