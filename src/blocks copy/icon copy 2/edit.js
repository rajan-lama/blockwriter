import { useState } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

import IconPickerModal from './IconPickerModal';
import ICONS from './../../../assets/icons/icons-solid.json';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const { icon } = attributes;
  const [open, setOpen] = useState(false);
  console.log('Selected icon:', icon);

  // const selectedIcon = ICONS.find((i) => i.name === icon);
  // const selectedIcon = icons.solid.find((i) => i.name === icon);
  const selectedIcon = '';

  console.log('Selected icon object:', ICONS);

  return (
    <div {...useBlockProps()}>
      <Button onClick={() => setOpen(true)}>
        {selectedIcon ? 'Change Icon' : 'Select Icon'}
      </Button>

      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px',
        }}
      >
        {ICONS.solid.map((icon, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          >
            {icon.replace(/-/g, ' ')}
          </div>
        ))} 
      </div> */}

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
