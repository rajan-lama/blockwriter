import animations from '../../constants/animations';
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

const AnimationPanel = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody
        title={__('Animation Settings', 'blockwriter')}
        initialOpen={false}
      >
        <SelectControl
          label={__('Animation', 'blockwriter')}
          value={attributes.animations}
          options={animations}
          onChange={(value) => setAttributes({ animations: value })}
        />
        <SelectControl
          label={__('OnHover Animation', 'blockwriter')}
          value={attributes.onHoverAnimations}
          options={animations}
          onChange={(value) => setAttributes({ onHoverAnimations: value })}
        />
      </PanelBody>
    </>
  );
};

export default AnimationPanel;
