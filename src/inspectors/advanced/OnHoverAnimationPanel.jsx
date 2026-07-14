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

const OnHoverAnimationPanel = ({ attributes, setAttributes }) => {
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

  const { margin, padding } = attributes;

  return (
    <>
      <PanelBody title={__('Spacing', 'blockwriter')} initialOpen={false}>
        {/* <DimensionComponent
                        label={__('Row Gap','blockwriter')}
                        dimension={row}
                        updatedDimension={updateAttribute}
                    /> */}
        {/* <DimensionComponent
                        label={__('Column Gap','blockwriter')}
                        dimension={column}
                        updatedDimension={updateAttribute}
                    /> */}
        {/* <DimensionComponent
            label={__('Padding Gap', 'blockwriter')}
            dimension={padding}
            updatedDimension={updateAttribute}
          />
          <DimensionComponent
            label={__('Margin Gap', 'blockwriter')}
            dimension={margin}
            updatedDimension={updateAttribute}
          /> */}
        <p>On Hover Animation here</p>
      </PanelBody>
    </>
  );
};

export default OnHoverAnimationPanel;
