import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { interval } = attributes;

  const blockProps = useBlockProps.save({
    className: 'carousel slide',
  });

  return (
    <div {...blockProps} data-bs-ride="carousel" data-bs-interval={interval}>
      <div className="carousel-inner">
        <InnerBlocks.Content />
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${blockProps.id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${blockProps.id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
