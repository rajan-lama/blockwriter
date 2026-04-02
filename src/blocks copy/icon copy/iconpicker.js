// IconPicker.js
import { useState } from '@wordpress/element';
import { TextControl, Button } from '@wordpress/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICONS } from './icons';

export default function IconPicker({ value, onChange }) {
  const [search, setSearch] = useState('');

  const filteredIcons = ICONS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bw-icon-picker">
      <TextControl
        placeholder="Search icon..."
        value={search}
        onChange={(val) => setSearch(val)}
      />

      <div className="bw-icon-grid">
        {filteredIcons.map((item) => (
          <Button
            key={item.name}
            className={`bw-icon-btn ${value === item.name ? 'is-active' : ''}`}
            onClick={() => onChange(item.name)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </Button>
        ))}
      </div>
    </div>
  );
}
