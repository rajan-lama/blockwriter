/**
 * WordPress Dependencies
 */
import { useState } from 'react';
import animations from '@constants/animations';
import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
  BlockControls,
  BlockAlignmentToolbar,
  AlignmentToolbar,
} from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  ButtonGroup,
  Button,
  ColorPalette,
  ToggleControl,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  const [color, setColor] = useState('#f00');

  const [blendMode, setBlendMode] = useState('none');

  const [animation, setAnimation] = useState('none');

  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' },
  ];

  const [hasFixedBackground, setHasFixedBackground] = useState(false);

  return (
    <>
      <BlockControls>
        <BlockAlignmentToolbar
          value={attributes.blockAlignment}
          onChange={(blockAlignment) => setAttributes({ blockAlignment })}
        />
        <AlignmentToolbar
          value={attributes.textAlignment}
          onChange={(textAlignment) => setAttributes({ textAlignment })}
        />
      </BlockControls>
      <InspectorControls key="inspector">
        {/* <PanelBody
					title={__('Responsive Settings', 'my-text-domain')}
					initialOpen={true}
				>
					<ButtonGroup title="margin">
						<Button
							onClick={() => setAttributes({ device: 'desktop' })}
						>
							🖥️
						</Button>
						<Button
							onClick={() => setAttributes({ device: 'tablet' })}
						>
							📱
						</Button>
						<Button
							onClick={() => setAttributes({ device: 'mobile' })}
						>
							📲
						</Button>
					</ButtonGroup>
				</PanelBody> */}
        <PanelBody title="Background Settings">
          <PanelRow>Background Type</PanelRow>
          <ButtonGroup>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'color' })}>
              Color
            </Button>
          </ButtonGroup>

          <PanelRow>Background Color</PanelRow>
          <ColorPalette
            colors={colors}
            value={color}
            onChange={(color) => setColor(color)}
          />

          <ToggleControl
            className="gutenstar-toggle"
            __nextHasNoMarginBottom
            label="Fixed Background"
            help={
              hasFixedBackground
                ? 'Has fixed background.'
                : 'No fixed background.'
            }
            checked={hasFixedBackground}
            onChange={(newValue) => {
              setHasFixedBackground(newValue);
            }}
          />

          <SelectControl
            label="Blend Mode"
            value={blendMode}
            options={[
              { label: 'Normal', value: 'normal' },
              { label: 'Multiply', value: 'multiply' },
              { label: 'Screen', value: 'screen' },
              { label: 'Overlay', value: 'overlay' },
              { label: 'Darken', value: 'darken' },
              { label: 'Lighten', value: 'lighten' },
              { label: 'Color Dodge', value: 'color-dodge' },
              { label: 'Saturation', value: 'saturation' },
              { label: 'color', value: 'color' },
              { label: 'luminosity', value: 'luminosity' },
            ]}
            onChange={(newSize) => setSize(newSize)}
            __nextHasNoMarginBottom
          />
          <PanelRow>Background Position</PanelRow>
          <ButtonGroup>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
            <Button onClick={() => setAttributes({ backgroundType: 'image' })}>
              Image
            </Button>
          </ButtonGroup>
        </PanelBody>

        <PanelBody title="Advance Settings">
          <SelectControl
            label="Animation"
            value={animation}
            options={animations}
            onChange={(newAnimation) => setAnimation(newAnimation)}
            __nextHasNoMarginBottom
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <InnerBlocks />
      </div>
    </>
  );
};
export default Edit;
