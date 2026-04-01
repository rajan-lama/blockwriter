import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['blockwriter/sample'];

const TEMPLATE = [['blockwriter/sample'], ['blockwriter/sample']];

export default function Edit({ attributes }) {
  const { interval } = attributes;

  const blockProps = useBlockProps({
    className: 'carousel slide',
  });

  return (
    <div {...blockProps} data-bs-ride="carousel" data-bs-interval={interval}>
      <div className="carousel-inner">
        <InnerBlocks
          // allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
          // templateLock={false} // ✅ allow adding/removing
          // renderAppender={InnerBlocks.ButtonBlockAppender} // ✅ show + button
        />
      </div>
    </div>
  );
}
