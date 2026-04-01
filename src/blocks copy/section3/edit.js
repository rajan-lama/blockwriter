import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from '@wordpress/block-editor';

import { PanelBody, SelectControl } from '@wordpress/components';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes }) {
  const { container, paddingY, background } = attributes;

  const blockProps = useBlockProps({
    className: `${paddingY} ${background}`,
  });

  return (
    <>
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <section {...blockProps}>
        <div className={container}>
          <InnerBlocks />
        </div>
      </section>
    </>
  );
}
