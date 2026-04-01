import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

export default function Edit({ clientId, setAttributes }) {
  const index = useSelect(
    (select) => select('core/block-editor').getBlockIndex(clientId),
    [clientId],
  );

  const ALLOWED_BLOCKS = ['blockwriter/sample'];

  const TEMPLATE = [['blockwriter/sample'], ['blockwriter/sample']];

  // Auto-set active for first slide
  // useEffect(() => {
  // 	setAttributes({ isActive: index === 0 });
  // }, [index]);

  // const className =
  // 	index === 0 ? 'carousel-item active' : 'carousel-item';

  const blockProps = useBlockProps({
    className: 'carousel slide',
  });

  return (
    <div {...blockProps}>
      <InnerBlocks
        allowedBlocks={ALLOWED_BLOCKS}
        template={TEMPLATE}
        // templateLock={all}
        renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
        // wrapperClassName="carousel-inner"
      />
    </div>
  );
}
