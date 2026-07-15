import { more } from '@wordpress/icons';
import { useState } from '@wordpress/element';
//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
  Panel,
  PanelBody,
  PanelRow,
  Icon,
  SelectControl,
  RangeControl,
  Button,
  ButtonGroup,
  ToggleControl,
  ColorPicker,
  GradientPicker,
  FocalPointPicker,
  ColorPalette,
} from '@wordpress/components';
import DimensionComponent from '../../components/DimensionComponent';

const SpacingPanel = ({ attributes, setAttributes }) => {

  const updateAttribute = (newValue) => {
    setAttributes({ margin: newValue });
  };

  const { rowGap,columnGap,margin, padding } = attributes;

  return (
    <>
      <PanelBody title={__('Spacing', 'blockwriter')} initialOpen={false}>
        <DimensionComponent
          label={__('Row Gap', 'blockwriter')}
          dimension={rowGap}
          updatedDimension={updateAttribute}
        />
        <DimensionComponent
          label={__('Column Gap', 'blockwriter')}
          dimension={columnGap}
          updatedDimension={updateAttribute}
        />
        <DimensionComponent
          label={__('Padding', 'blockwriter')}
          dimension={padding}
          updatedDimension={updateAttribute}
        />
        <DimensionComponent
          label={__('Margin', 'blockwriter')}
          dimension={margin}
          updatedDimension={updateAttribute}
        />
      </PanelBody>
    </>
  );
};

export default SpacingPanel;
