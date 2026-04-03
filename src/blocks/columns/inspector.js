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
    paddingY,
    borderStyle,
    border,
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

  return (
    <InspectorControls>
      <PanelBody title="Column Layout Settings">
        <SelectControl
          label="Selector"
          value={layout}
          options={[
            { label: 'One Column', value: 'layout-one' },
            { label: 'Two Column', value: 'layout-two' },
            { label: 'Three Colum', value: 'layout-three' },
            { label: 'Four Column', value: 'layout-four' },
            { label: 'Five Column', value: 'layout-five' },
            { label: 'Six Column', value: 'layout-six' },
            { label: '8/12 + 4/12', value: 'layout-eight-four' },
            { label: '4/12 + 8/12', value: 'layout-four-eight' },
            { label: '9/12 + 3/12', value: 'layout-nine-three' },
            { label: '3/12 + 9/12', value: 'layout-three-nine' },
            { label: '7/12 + 5/12', value: 'layout-seven-five' },
            { label: '5/12 + 7/12', value: 'layout-five-seven' },
          ]}
          onChange={(value) => setAttributes({ layout: value })}
        />

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
          label="Vertical Spacing"
          value={paddingY}
          options={[
            { label: 'None', value: 'py-0' },
            { label: 'Small', value: 'py-2' },
            { label: 'Medium', value: 'py-4' },
            { label: 'Large', value: 'py-5' },
          ]}
          onChange={(value) => setAttributes({ paddingY: value })}
        />

      </PanelBody>
      <PanelBody title={__('Border Settings')}>
        <BorderBoxControl
          __next40pxDefaultSize
          colors={colors}
          label={__('Borders')}
          onChange={onChange}
          value={borders}
        />
      </PanelBody>
    </InspectorControls>
  );
};
export default Inspector;
