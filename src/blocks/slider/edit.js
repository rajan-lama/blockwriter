import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['blockwriter/slide'];

const TEMPLATE = [['blockwriter/slide'], ['blockwriter/slide']];

export default function Edit({ attributes }) {
	const { interval } = attributes;

	const blockProps = useBlockProps({
		className: 'carousel slide',
	});

	return (
		<div
			{...blockProps}
			data-bs-ride="carousel"
			data-bs-interval={interval}
		>
			<div className="carousel-inner">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
				/>
			</div>
		</div>
	);
}
