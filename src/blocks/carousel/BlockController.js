import { __ } from '@wordpress/i18n';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';

import { seen, unseen } from '@wordpress/icons';

const BlockController = ({ attributes, setAttributes }) => {
  const { preview } = attributes;

  const togglePreview = () => {
    setAttributes({ preview: !preview });
  };

  return (
    <BlockControls key="custom-controls">
      <Toolbar label="Options">
        <ToolbarButton
          icon={preview ? seen : unseen}
          onClick={togglePreview}
          label={preview ? __('Slider Mode') : __('Table Mode')}
        />
      </Toolbar>
    </BlockControls>
  );
};
export default BlockController;
