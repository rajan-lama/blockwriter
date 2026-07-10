import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes }) {
  const { colMd } = attributes;

  const blockProps = useBlockProps({
    className: colMd || '',
  });

  return (
    <div {...blockProps}>
      <InnerBlocks
        template={[['core/paragraph', { placeholder: 'Add content...' }]]}
        templateLock={false}
      />
    </div>
  );
}
