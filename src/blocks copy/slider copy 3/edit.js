import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['blockwriter/sample-slide'];

const TEMPLATE = [['blockwriter/sample-slide']];

export default function Edit({ attributes, clientId }) {
	const carouselId = `carousel-${clientId}`;

	// const { interval } = attributes;

	const blockProps = useBlockProps({
		// className: 'carousel slide',
	});
	console.log('Edit blockProps:', carouselId);

	return (
		<div
			{...blockProps}
			id={carouselId} // Make sure ID is unique
			data-bs-ride="carousel"
			data-bs-interval="false" // disable auto sliding
		>
			<div className="carousel-inner">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					// templateLock={all}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					// wrapperClassName="carousel-inner"
				/>
			</div>

			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target={`#${carouselId}`}
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon"></span>
			</button>

			<button
				className="carousel-control-next"
				type="button"
				data-bs-target={`#${carouselId}`}
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon"></span>
			</button>
		</div>
	);
}
