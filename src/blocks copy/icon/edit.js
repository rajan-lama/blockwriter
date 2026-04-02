import { useState } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

import IconPickerModal from './IconPickerModal';
import ICONS from './icons.json';

export default function Edit({ attributes, setAttributes }) {
  const { icon } = attributes;
  const [open, setOpen] = useState(false);

  const selectedIcon = ICONS.find((i) => i.name === icon);

  return (
    <div {...useBlockProps()}>
      <Button onClick={() => setOpen(true)}>
        {selectedIcon ? 'Change Icon' : 'Select Icon'}
      </Button>

      {selectedIcon && (
        <div
          dangerouslySetInnerHTML={{ __html: selectedIcon.svg }}
          style={{ marginTop: '15px' }}
        />
      )}

      <IconPickerModal
        isOpen={open}
        onClose={() => setOpen(false)}
        icons={ICONS}
        onSelect={(icon) => setAttributes({ icon: icon.name })}
      />
    </div>
  );
}
