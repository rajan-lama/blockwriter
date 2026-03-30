import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { bgImage, isActive } = attributes;

	const blockProps = useBlockProps.save({
		className: `carousel-item ${isActive ? 'active' : ''}`,
		style: {
			backgroundImage: bgImage ? `url(${bgImage})` : undefined,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},
	});

	return (
		<div {...blockProps}>
			<div className="carousel-caption">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
