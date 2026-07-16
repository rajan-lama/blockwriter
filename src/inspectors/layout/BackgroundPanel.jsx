import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';
import { useState, useEffect } from '@wordpress/element';
import {
  Button,
  ButtonGroup,
  ColorPicker,
  GradientPicker,
  ToggleControl,
  SelectControl,
  RangeControl,
} from '@wordpress/components';

import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const BackgroundPanel = ({ attributes, setAttributes }) => {
  const [color, setColor] = useState();
  const [gradient, setGradient] = useState(null);
  const [currentBgOption, setCurrentBgOption] = useState(
    attributes.backgroundOption,
  );
  const [imageOverlay, setImageOverlay] = useState(false);
  const [columns, setColumns] = useState(2);
  const [linkColor, setLinkColor] = useState('normal');
  const [focalPoint, setFocalPoint] = useState({
    x: 0.5,
    y: 0.5,
  });

  useEffect(() => {
    setAttributes({ backgroundOption: currentBgOption });
  }, [currentBgOption]);

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
      <PanelBody title={__('Background', 'blockwriter')} initialOpen={true}>
        <div className="gs-title-button-units-section">
          <ButtonGroup>
            <Button
              icon="admin-customizer"
              variant="secondary"
              isSmall="true"
              iconSize="15"
              onClick={() =>
                setAttributes({ currentBgOption: currentBgOption })
              }
              isPressed={currentBgOption === 'color' ? true : false}
            ></Button>
            <Button
              icon="laptop"
              variant="secondary"
              isSmall="true"
              iconSize="15"
              onClick={() => setCurrentBgOption('gradient')}
              isPressed={currentBgOption === 'gradient' ? true : false}
            ></Button>
            <Button
              icon="format-image"
              variant="secondary"
              isSmall="true"
              iconSize="15"
              onClick={() => setCurrentBgOption('image')}
              isPressed={currentBgOption === 'image' ? true : false}
            ></Button>
            <Button
              icon="video-alt2"
              variant="secondary"
              isSmall="true"
              iconSize="15"
              onClick={() => setCurrentBgOption('video')}
              isPressed={currentBgOption === 'video' ? true : false}
            ></Button>
          </ButtonGroup>
        </div>
        {currentBgOption === 'color' && (
          <>
            <PanelRow>Select Background Color</PanelRow>
            <ColorPicker
              color={color}
              onChange={setColor}
              enableAlpha
              defaultValue="#000"
            />
          </>
        )}
        {currentBgOption === 'gradient' && (
          <>
            <>
              <PanelRow>Select Background Gradient</PanelRow>
              <GradientPicker
                value={gradient}
                onChange={(currentGradient) => setGradient(currentGradient)}
                gradients={[
                  {
                    name: 'JShine',
                    gradient:
                      'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                    slug: 'jshine',
                  },
                  {
                    name: 'Moonlit Asteroid',
                    gradient:
                      'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                    slug: 'moonlit-asteroid',
                  },
                  {
                    name: 'Rastafarie',
                    gradient:
                      'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                    slug: 'rastafari',
                  },
                ]}
              />
            </>
            <ToggleControl
              label={__('Enable Image Overlay', 'blockwriter')}
              help={'Add overlay to image.'}
              checked={imageOverlay}
              onChange={(newValue) => {
                setImageOverlay(newValue);
              }}
            />

            {imageOverlay && (
              <>
                <figure>
                  <MediaUploadCheck>
                    <MediaUpload
                      // onSelect={onSelectImage}
                      allowedTypes={['image']}
                      // value={attributes.id}
                      // render={() => (
                      //   <>
                      //     {!mediaImageID &&
                      //       !currentSrc &&
                      //       renderDefaultRenderedEditor()}

                      //     {mediaImageID !== 0 &&
                      //       currentSrc !== "" &&
                      //       renderDefaultImageRenderEditor(currentSrc)}
                      //   </>
                      // )}
                      render={({ open }) => (
                        <Button
                          className={'button button-large image-select-button'}
                          onClick={open}
                        >
                          <Icon icon="format-image" />
                          {__('Change Image', 'blockwriter')}
                        </Button>
                      )}
                    />
                  </MediaUploadCheck>
                </figure>

                <FocalPointPicker
                  __nextHasNoMarginBottom
                  url={url}
                  value={focalPoint}
                  onDragStart={setFocalPoint}
                  onDrag={setFocalPoint}
                  onChange={setFocalPoint}
                />
                <div style={style} />

                <SelectControl
                  label={__('Attachment', 'blockwriter')}
                  labelPosition="side"
                  // value={attributes.htmlTag}
                  options={[
                    {
                      label: 'Scroll',
                      value: 'scroll',
                    },
                    { label: 'Fixed', value: 'fixed' },
                  ]}
                  onChange={(value) => {
                    setAttributes({ htmlTag: value });
                  }}
                />

                <SelectControl
                  label={__('Blend Mode', 'blockwriter')}
                  labelPosition="side"
                  // value={attributes.htmlTag}
                  options={[
                    { label: 'Normal', value: 'div' },
                    {
                      label: 'Multiple',
                      value: 'header',
                    },
                    {
                      label: 'Screen',
                      value: 'footer',
                    },
                    { label: 'Overlay', value: 'main' },
                    {
                      label: 'Darken',
                      value: 'article',
                    },
                    {
                      label: 'Lighten',
                      value: 'section',
                    },
                    {
                      label: 'Color Dodge',
                      value: 'aside',
                    },
                    {
                      label: 'Saturation',
                      value: 'figure',
                    },
                    {
                      label: 'Color',
                      value: 'figcaption',
                    },
                  ]}
                  // onChange={(value) => {
                  //   setAttributes({ htmlTag: value });
                  // }}
                />

                <SelectControl
                  label={__('Repeat', 'blockwriter')}
                  labelPosition="side"
                  // value={attributes.htmlTag}
                  options={[
                    {
                      label: 'No Repeat',
                      value: 'no-repeat',
                    },
                    {
                      label: 'Repeat',
                      value: 'repeat',
                    },
                    {
                      label: 'Repeat-X',
                      value: 'repeat-x',
                    },
                    {
                      label: 'Repeat-Y',
                      value: 'repeat-y',
                    },
                  ]}
                  // onChange={(value) => {
                  //   setAttributes({ htmlTag: value });
                  // }}
                />

                <SelectControl
                  label={__('Repeat', 'blockwriter')}
                  labelPosition="side"
                  // value={attributes.htmlTag}
                  options={[
                    {
                      label: 'Auto',
                      value: 'no-repeat',
                    },
                    { label: 'Cover', value: 'repeat' },
                    {
                      label: 'Contain',
                      value: 'repeat-x',
                    },
                    {
                      label: 'Custom',
                      value: 'repeat-y',
                    },
                  ]}
                  // onChange={(value) => {
                  //   setAttributes({ htmlTag: value });
                  // }}
                />

                <RangeControl
                  __nextHasNoMarginBottom
                  label={__('Opacity', 'blockwriter')}
                  value={columns}
                  onChange={(value) => setColumns(value)}
                  min={0}
                  step={0.01}
                  max={1}
                  allowReset="true"
                  resetFallbackValue={0.5}
                />
              </>
            )}
          </>
        )}
      </PanelBody>
    </>
  );
};

export default BackgroundPanel;
