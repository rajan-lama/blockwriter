import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { buttons = [] } = attributes;

  return (
    <div {...useBlockProps.save()}>
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.url}
          className="my-button"
          style={{ marginRight: '10px' }}
        >
          {btn.text}
        </a>
      ))}
    </div>
  );
}
