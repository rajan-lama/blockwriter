import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { bgImage } = attributes;

  const blockProps = useBlockProps({
    className: 'carousel-item',
    style: {
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '400px',
    },
  });

  return (
    <div {...blockProps}>
      <MediaUpload
        onSelect={(media) => setAttributes({ bgImage: media.url })}
        render={({ open }) => (
          <Button onClick={open}>Select Background Image</Button>
        )}
      />

      <div className="carousel-caption">
        <InnerBlocks />
      </div>
    </div>
  );
}
