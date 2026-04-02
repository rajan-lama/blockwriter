import { useState } from '@wordpress/element';
import { Modal, Button, TextControl } from '@wordpress/components';

export default function IconPickerModal({ isOpen, onClose, icons, onSelect }) {
  const [search, setSearch] = useState('');

  const filtered = icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (!isOpen) return null;

  return (
    <Modal title="Select Icon" onRequestClose={onClose}>
      <TextControl
        placeholder="Search icons..."
        value={search}
        onChange={(val) => setSearch(val)}
      />

      <div className="bw-icon-grid">
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
      </div>
    </Modal>
  );
}
