import { useState } from '@wordpress/element';
import { Modal, Button, TextControl } from '@wordpress/components';

export default function IconPickerModal({ isOpen, onClose, icons, onSelect }) {
  const [search, setSearch] = useState('');

  console.log('IconPickerModal received icons:', icons);
  console.log('Current search term:', search);

  const filtered = Object.entries(icons).filter(([name, svg]) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });

  // const filtered = icons.solid.filter((icon) => {
  //   console.log('Checking icon:', icon.name, 'against search:', search);
  //   return icon;
  //   // return icon.name.toLowerCase().includes(search.toLowerCase());
  // });

  console.log('Filtered icons:', filtered);

  if (!isOpen) return null;

  return (
    <Modal title="Select Icon" onRequestClose={onClose}>
      <TextControl
        placeholder="Search icons..."
        value={search}
        onChange={(val) => setSearch(val)}
      />

      <div className="bw-icon-grid">
        {filtered.map(([name, svg]) => (
          <div key={name} className="icon-item">
            <Button
              key={name}
              onClick={() => {
                onSelect({ name, svg });
                onClose();
              }}
            >
              <div className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
              {/* <span>{name}</span> */}
            </Button>
          </div>
        ))}
      </div>

      {/* <div className="bw-icon-grid">
        {filtered.map((icon) => (
          <Button
            key={icon.name}
            onClick={() => {
              onSelect(icon);
              onClose();
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: icon.svg }} />
          </Button>
        ))}
      </div> */}
    </Modal>
  );
}
