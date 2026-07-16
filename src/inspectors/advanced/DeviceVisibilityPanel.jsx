import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';

const DeviceVisibilityPanel = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody
        title={__('Display Device settings', 'blockwriter')}
        initialOpen={false}
      >
        <ToggleControl
          label={__('Display on Desktop', 'blockwriter')}
          checked={attributes.showDesktop}
          onChange={(value) => setAttributes({ showDesktop: value })}
        />
        <ToggleControl
          label={__('Display on Tablet', 'blockwriter')}
          checked={attributes.showTablet}
          onChange={(value) => setAttributes({ showTablet: value })}
        />
        <ToggleControl
          label={__('Display on Mobile', 'blockwriter')}
          checked={attributes.showMobile}
          onChange={(value) => setAttributes({ showMobile: value })}
        />
      </PanelBody>
    </>
  );
};

export default DeviceVisibilityPanel;
