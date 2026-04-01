import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from '@wordpress/block-editor';

import { PanelBody, SelectControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const { colMd } = attributes;

  const blockProps = useBlockProps({
    className: `${colMd}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Column Settings">
          <SelectControl
            label="Width (Desktop)"
            value={colMd}
            options={[
              { label: '100%', value: 'col-12' },
              { label: '75%', value: 'col-9' },
              { label: '66%', value: 'col-8' },
              { label: '50%', value: 'col-6' },
              { label: '33%', value: 'col-4' },
              { label: '25%', value: 'col-3' },
            ]}
            onChange={(value) => setAttributes({ colMd: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks
          template={['core/paragraph']}
          // templateLock="all"
        />
      </div>
    </>
  );
}
