import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ clientId, setAttributes }) {
	const index = useSelect(
		(select) => select('core/block-editor').getBlockIndex(clientId),
		[clientId]
	);

	// Auto-set active for first slide
	useEffect(() => {
		setAttributes({ isActive: index === 0 });
	}, [index]);

	const className = index === 0 ? 'carousel-item active' : 'carousel-item';

	const blockProps = useBlockProps({
		className,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[
					['core/paragraph', { placeholder: 'Slide content...' }],
				]}
			/>
		</div>
	);
}
