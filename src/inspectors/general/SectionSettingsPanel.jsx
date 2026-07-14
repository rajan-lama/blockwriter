import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

const SectionSettingsPanel = ({ attributes, setAttributes }) => {
  const {
    container,
    background,
    backgroundColor,
    backgroundImage,
    tagType,
    // paddingY,
    borderStyle,
    // border,
    margin,
  } = attributes;

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
    <PanelBody title="Section Settings">
      <SelectControl
        label="Selector"
        value={tagType}
        options={[
          { label: 'Section', value: 'section' },
          { label: 'Div', value: 'div' },
          { label: 'Aside', value: 'aside' },
          { label: 'Main', value: 'main' },
          { label: 'Article', value: 'article' },
          { label: 'Header', value: 'header' },
          { label: 'Footer', value: 'footer' },
        ]}
        onChange={(value) => setAttributes({ tagType: value })}
      />

      <SelectControl
        label="Container"
        value={container}
        options={[
          { label: 'Container', value: 'container' },
          { label: 'Fluid', value: 'container-fluid' },
          { label: 'None', value: 'None' },
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
  );
};

export default SectionSettingsPanel;
