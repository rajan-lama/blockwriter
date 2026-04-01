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
      {/* <InspectorControls>
                <PanelBody title="Section Settings">
                    
                    <SelectControl
                        label="Container"
                        value={container}
                        options={[
                            { label: 'Container', value: 'container' },
                            { label: 'Fluid', value: 'container-fluid' },
                        ]}
                        onChange={(value) => setAttributes({ container: value })}
                    />

                    <SelectControl
                        label="Padding"
                        value={paddingY}
                        options={[
                            { label: 'Small', value: 'py-2' },
                            { label: 'Medium', value: 'py-4' },
                            { label: 'Large', value: 'py-5' },
                        ]}
                        onChange={(value) => setAttributes({ paddingY: value })}
                    />

                    <SelectControl
                        label="Background"
                        value={background}
                        options={[
                            { label: 'None', value: '' },
                            { label: 'Light', value: 'bg-light' },
                            { label: 'Dark', value: 'bg-dark text-white' },
                        ]}
                        onChange={(value) => setAttributes({ background: value })}
                    />

                </PanelBody>
            </InspectorControls> */}

      <section {...blockProps}>
        <div className={container}>
          <InnerBlocks />
        </div>
      </section>
    </>
  );
}
