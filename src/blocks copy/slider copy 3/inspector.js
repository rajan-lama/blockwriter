/**
 * Internal block libraries
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  BorderBoxControl,
  PanelBody,
  ToggleControl,
  RangeControl,
} from '@wordpress/components';

/**
 * Create an Inspector Controls wrapper Component
 */

const Inspector = ({ attributes, setAttributes }) => {
  const {
    layout,
    container,
    background,
    backgroundColor,
    backgroundImage,
    tagType,
    // paddingY,
    borderStyle,
    // border,
    customMargin,
  } = attributes;

  const colors = [{ name: 'Blue 20', color: '#72aee6' }];

  const defaultBorder = {
    color: '#72aee6',
    style: 'dashed',
    width: '1px',
  };
  const [borders, setBorders] = useState({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });
  const onChange = (newBorders) => setBorders(newBorders);

  const [paddingSize, setPaddingSize] = useState('');
  const [paddingY, setPaddingY] = useState('');

  const [border, setBorder] = useState();
  return (
    <InspectorControls>
      <PanelBody title="Slider Settings">
        <ToggleControl
          label="Show Indicators"
          checked={attributes.showIndicators}
          onChange={(val) => setAttributes({ showIndicators: val })}
        />

        <ToggleControl
          label="Show Controls"
          checked={attributes.showControls}
          onChange={(val) => setAttributes({ showControls: val })}
        />

        <ToggleControl
          label="Fade Effect"
          checked={attributes.fade}
          onChange={(val) => setAttributes({ fade: val })}
        />

        <RangeControl
          label="Interval (ms)"
          value={attributes.interval}
          onChange={(val) => setAttributes({ interval: val })}
          min={1000}
          max={10000}
        />
      </PanelBody>
    </InspectorControls>
  );
};
export default Inspector;
