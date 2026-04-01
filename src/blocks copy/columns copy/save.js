import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { colMd } = attributes;

  // const blockProps = useBlockProps.save({
  // 	className: colMd,
  // });

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="row">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
