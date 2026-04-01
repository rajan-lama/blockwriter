import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { container, paddingY, background } = attributes;

  const blockProps = useBlockProps.save({
    className: `${paddingY} ${background}`,
  });

  return (
    <section {...blockProps}>
      <div className={container}>
        <InnerBlocks.Content />
      </div>
    </section>
  );
}
