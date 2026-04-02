import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody, RangeControl, ColorPalette } from '@wordpress/components';

export default function Inspector({ attributes, setAttributes }) {
  const { size, color, bgColor, padding, borderRadius } = attributes;

  return (
    <InspectorControls>
      <PanelBody title="Icon Settings">
        <RangeControl
          label="Size"
          value={size}
          onChange={(val) => setAttributes({ size: val })}
          min={10}
          max={500}
        />

        <p>Icon Color</p>
        <ColorPalette
          value={color}
          onChange={(val) => setAttributes({ color: val })}
        />

        <p>Background Color</p>
        <ColorPalette
          value={bgColor}
          onChange={(val) => setAttributes({ bgColor: val })}
        />

        <RangeControl
          label="Padding"
          value={padding}
          onChange={(val) => setAttributes({ padding: val })}
          min={0}
          max={100}
        />

        <RangeControl
          label="Border Radius"
          value={borderRadius}
          onChange={(val) => setAttributes({ borderRadius: val })}
          min={0}
          max={100}
        />
      </PanelBody>
    </InspectorControls>
  );
}
