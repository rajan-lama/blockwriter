import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { tagType, container, paddingY, background } = attributes;

  const blockProps = useBlockProps.save({
    className: `${paddingY} ${background}`,
  });

  const Tag = tagType;

  return (
    <Tag {...blockProps}>
      {container !== 'none' && (
        <div className={container}>
          <InnerBlocks.Content />
        </div>
      )}
      {container === 'none' && <InnerBlocks.Content />}
    </Tag>
  );
}
