import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { TextControl } from '@wordpress/components';

const ZIndexPanel = ({ attributes, setAttributes }) => {
  const updateAttribute = (newValue) => {
    setAttributes({ zindex: newValue });
  };

  return (
    <>
      <PanelBody title={__('Z-index ', 'blockwriter')} initialOpen={false}>
        <TextControl
          label={__('Z Index', 'blockwriter')}
          value={attributes.zindex}
          onChange={updateAttribute}
        />
      </PanelBody>
    </>
  );
};

export default ZIndexPanel;
