import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BorderBoxControl } from '@wordpress/components';

const BorderPanel = ({ attributes, setAttributes }) => {
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

  const onHoverColors = [{ name: 'Blue 20', color: '#72aee6' }];
  const [onHoverBorders, setOnHoverBorders] = useState({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });

  const onChange = (newBorders) => setBorders(newBorders);

  // const [border, setBorder] = useState();

  return (
    <PanelBody title={__('Border Settings')} initialOpen={false}>
      <BorderBoxControl
        __next40pxDefaultSize
        colors={colors}
        label={__('Borders')}
        onChange={onChange}
        value={borders}
      />

      <BorderBoxControl
        __next40pxDefaultSize
        colors={onHoverColors}
        label={__('OnHover Borders')}
        onChange={onChange}
        value={onHoverBorders}
      />
    </PanelBody>
  );
};

export default BorderPanel;
