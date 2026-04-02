import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
  const { layout, paddingY, background } = attributes;

  const blockProps = useBlockProps({
    className: `row ${paddingY} ${background}`,
  });

  // Get current inner blocks
  const innerBlocks = useSelect(
    (select) => select('core/block-editor').getBlocks(clientId),
    [clientId],
  );

  const { replaceInnerBlocks, updateBlockAttributes } =
    useDispatch('core/block-editor');

  const getColumns = (layout) => {
    switch (layout) {
      case 'layout-one':
        return ['col-12'];

      case 'layout-two':
        return ['col-6', 'col-6'];

      case 'layout-three':
        return ['col-4', 'col-4', 'col-4'];

      case 'layout-four':
        return ['col-3', 'col-3', 'col-3', 'col-3'];

      case 'layout-five':
        return ['col-2', 'col-2', 'col-2', 'col-2', 'col-2'];

      case 'layout-six':
        return ['col-2', 'col-2', 'col-2', 'col-2', 'col-2', 'col-2'];

      // Custom layouts
      case 'layout-eight-four':
        return ['col-8', 'col-4'];

      case 'layout-four-eight':
        return ['col-4', 'col-8'];

      case 'layout-nine-three':
        return ['col-9', 'col-3'];

      case 'layout-three-nine':
        return ['col-3', 'col-9'];

      case 'layout-five-seven':
        return ['col-5', 'col-7'];

      case 'layout-seven-five':
        return ['col-7', 'col-5'];

      case 'layout-eighty-twenty':
        return ['col-10', 'col-2'];

      case 'layout-twenty-eighty':
        return ['col-2', 'col-10'];

      default:
        return ['col-12'];
    }
  };

  useEffect(() => {
    if (!innerBlocks) return;

    const newLayoutClasses = getColumns(layout);
    let updatedBlocks = [...innerBlocks];
    let needsUpdate = false;

    // Handle empty case
    if (updatedBlocks.length === 0) {
      const newBlocks = newLayoutClasses.map((colClass) =>
        createBlock('blockwriter/column', { colMd: colClass }),
      );
      replaceInnerBlocks(clientId, newBlocks);
      return;
    }

    if (newLayoutClasses.length > updatedBlocks.length) {
      const blocksToAdd = newLayoutClasses
        .slice(updatedBlocks.length)
        .map((colClass) =>
          createBlock('blockwriter/column', { colMd: colClass }),
        );

      updatedBlocks = [...updatedBlocks, ...blocksToAdd];
      needsUpdate = true;
    } else if (newLayoutClasses.length < updatedBlocks.length) {
      updatedBlocks = updatedBlocks.slice(0, newLayoutClasses.length);
      needsUpdate = true;
    }

    if (needsUpdate) {
      replaceInnerBlocks(clientId, updatedBlocks);
    }

    updatedBlocks.forEach((block, index) => {
      if (block.attributes.colMd !== newLayoutClasses[index]) {
        updateBlockAttributes(block.clientId, {
          colMd: newLayoutClasses[index],
        });
      }
    });
  }, [layout, clientId, innerBlocks]);

  // The initial template (only used on first insertion)
  const TEMPLATE = getColumns(layout).map((colClass) => [
    'blockwriter/column',
    {},
  ]);

  return (
    <>
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <div {...blockProps}>
        <div className="row">
          <InnerBlocks template={TEMPLATE} />
        </div>
      </div>
    </>
  );
}
