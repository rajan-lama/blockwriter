import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { layout, paddingY, background } = attributes;

	const blockProps = useBlockProps({
		className: `${paddingY} ${background}`,
	});

	// Get current inner blocks
	const innerBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId),
		[clientId]
	);

	const { replaceInnerBlocks, updateBlockAttributes } =
		useDispatch('core/block-editor');

	const getColumns = (layout) => {
		switch (layout) {
			case 'layout-one':
				return ['col-md-12'];

			case 'layout-two':
				return ['col-md-6', 'col-md-6'];

			case 'layout-three':
				return ['col-md-4', 'col-md-4', 'col-md-4'];

			case 'layout-four':
				return ['col-md-3', 'col-md-3', 'col-md-3', 'col-md-3'];

			case 'layout-five':
				return [
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
				];

			case 'layout-six':
				return [
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
				];

			// Custom layouts
			case 'layout-eight-four':
				return ['col-md-8', 'col-md-4'];

			case 'layout-four-eight':
				return ['col-md-4', 'col-md-8'];

			case 'layout-nine-three':
				return ['col-md-9', 'col-md-3'];

			case 'layout-three-nine':
				return ['col-md-3', 'col-md-9'];

			case 'layout-five-seven':
				return ['col-md-5', 'col-md-7'];

			case 'layout-seven-five':
				return ['col-md-7', 'col-md-5'];

			case 'layout-eighty-twenty':
				return ['col-md-10', 'col-md-2'];

			case 'layout-twenty-eighty':
				return ['col-md-2', 'col-md-10'];

			default:
				return ['col-md-12'];
		}
	};

	useEffect(() => {
		if (!innerBlocks || innerBlocks.length === 0) return;

		const newLayoutClasses = getColumns(layout);
		let updatedBlocks = [...innerBlocks];
		let needsUpdate = false;

		// If we need MORE columns than we currently have, add empty ones
		if (newLayoutClasses.length > updatedBlocks.length) {
			const blocksToAdd = newLayoutClasses
				.slice(updatedBlocks.length)
				.map((colClass) =>
					createBlock('blockwriter/column', { colMd: colClass })
				);
			updatedBlocks = [...updatedBlocks, ...blocksToAdd];
			needsUpdate = true;
		}
		// If we need FEWER columns, remove the extra ones from the end
		else if (newLayoutClasses.length < updatedBlocks.length) {
			updatedBlocks = updatedBlocks.slice(0, newLayoutClasses.length);
			needsUpdate = true;
		}

		// Only replace if the column count actually changed
		if (needsUpdate) {
			replaceInnerBlocks(clientId, updatedBlocks);
		}

		// Update the colMd attribute safely via dispatcher
		updatedBlocks.forEach((block, index) => {
			if (block.attributes.colMd !== newLayoutClasses[index]) {
				updateBlockAttributes(block.clientId, {
					colMd: newLayoutClasses[index],
				});
			}
		});
	}, [layout, clientId]); // Run this effect whenever `layout` changes

	// The initial template (only used on first insertion)
	const TEMPLATE = getColumns(layout).map((colClass) => [
		'blockwriter/column',
		{ colMd: colClass },
	]);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				{/* Use a simple div instead of react-bootstrap's Row for safety */}
				<div className="row">
					<InnerBlocks
						template={TEMPLATE}
						// templateLock="all"
					/>
				</div>
			</div>
		</>
	);
}
