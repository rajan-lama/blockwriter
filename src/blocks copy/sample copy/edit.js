/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
  console.log(attributes, clientId);
  const index = useSelect(
    (select) => {
      const { getBlockIndex } = select('core/block-editor');
      return getBlockIndex(clientId);
    },
    [clientId],
  );

  const blockProps = useBlockProps({
    className: index === 0 ? 'carousel-item active' : 'carousel-item',
  });

  return <div {...blockProps}>Slide {index + 1}</div>;
}
