import { useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { buttons = [] } = attributes;

  const addButton = () => {
    const newButtons = [...buttons, { text: 'New Button', url: '#' }];
    setAttributes({ buttons: newButtons });
  };

  const updateButton = (index, field, value) => {
    const newButtons = [...buttons];
    newButtons[index][field] = value;
    setAttributes({ buttons: newButtons });
  };

  const removeButton = (index) => {
    const newButtons = buttons.filter((_, i) => i !== index);
    setAttributes({ buttons: newButtons });
  };

  return (
    <div {...useBlockProps()}>
      {buttons.map((btn, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <TextControl
            label="Button Text"
            value={btn.text}
            onChange={(val) => updateButton(index, 'text', val)}
          />

          <TextControl
            label="Button URL"
            value={btn.url}
            onChange={(val) => updateButton(index, 'url', val)}
          />

          <Button isDestructive onClick={() => removeButton(index)}>
            Remove
          </Button>
        </div>
      ))}

      <Button variant="primary" onClick={addButton}>
        + Add Button
      </Button>
    </div>
  );
}
