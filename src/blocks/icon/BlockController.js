import { __ } from '@wordpress/i18n';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';

import { pencil, seen, unseen } from '@wordpress/icons';

const BlockController = ({
  attributes,
  setAttributes,
  selectedIcon,
  setOpen,
}) => {
  const { preview } = attributes;

  const togglePreview = () => {
    setAttributes({ preview: !preview });
  };

  return (
    <BlockControls key="custom-controls">
      <Toolbar label="Options">
        <ToolbarButton
          icon={pencil}
          onClick={() => setOpen(true)}
          label={selectedIcon ? __('Change Icon') : __('Select Icon')}
        />
      </Toolbar>
    </BlockControls>
  );
};
export default BlockController;
