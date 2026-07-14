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

const BorderControlPanel = ({ attributes, setAttributes }) => {
  const [color, setColor] = useState();
  const [gradient, setGradient] = useState(null);
  const [currentBgOption, setCurrentBgOption] = useState();
  const [imageOverlay, setImageOverlay] = useState(false);
  const [columns, setColumns] = useState(2);
  const [linkColor, setLinkColor] = useState('normal');
  const [focalPoint, setFocalPoint] = useState({
    x: 0.5,
    y: 0.5,
  });

  const url =
    'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{ name: 'red', color: '#f00' }];

  const updateAttribute = (newValue) => {
    setAttributes({ margin: newValue });
  };

  return (
    <>
      <PanelBody title={__('Border', 'blockwriter')} initialOpen={false}>
        <SelectControl
          label={__('Repeat', 'blockwriter')}
          labelPosition="side"
          // value={attributes.htmlTag}
          options={[
            {
              label: 'Default',
              value: 'no-repeat',
            },
            { label: 'None', value: 'repeat' },
            {
              label: 'Solid',
              value: 'repeat-x',
            },
            {
              label: 'Dotted',
              value: 'repeat-y',
            },
            {
              label: 'Dashed',
              value: 'no-repeat',
            },
            { label: 'Doubled', value: 'repeat' },
            {
              label: 'Groove',
              value: 'repeat-x',
            },
            {
              label: 'Inset',
              value: 'repeat-y',
            },
            {
              label: 'Outset',
              value: 'repeat-y',
            },
            {
              label: 'Ridget',
              value: 'repeat-y',
            },
          ]}
          // onChange={(value) => {
          //   setAttributes({ htmlTag: value });
          // }}
        />
        <PanelRow>Width</PanelRow>
        <PanelRow>Radius</PanelRow>
        <ButtonGroup>
          <Button
            variant="secondary"
            isSmall="true"
            onClick={() => setLinkColor('normal')}
            isPressed={linkColor === 'normal' ? true : false}
          >
            Normal
          </Button>
          <Button
            variant="secondary"
            isSmall="true"
            onClick={() => setLinkColor('hover')}
            isPressed={linkColor === 'hover' ? true : false}
          >
            Hover
          </Button>
        </ButtonGroup>
        {linkColor === 'normal' && (
          <ColorPalette
            asButtons="true"
            colors={colors}
            value={color}
            onChange={(color) => setColor(color)}
            headingLevel="2"
          />
        )}
        {linkColor === 'hover' && (
          <ColorPalette
            asButtons="true"
            colors={colors}
            value={color}
            onChange={(color) => setColor(color)}
            headingLevel="2"
          />
        )}
      </PanelBody>
    </>
  );
};

export default BorderControlPanel;
