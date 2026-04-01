import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { isActive } = attributes;

  const className = isActive ? 'carousel-item active' : 'carousel-item';

  const blockProps = useBlockProps.save({
    className,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
