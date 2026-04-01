import { __ } from '@wordpress/i18n';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';

import { seen, unseen } from '@wordpress/icons';

const BlockController = ({ attributes, setAttributes }) => {
	const { previewMode } = attributes;

	const togglePreview = () => {
		setAttributes({ previewMode: !previewMode });
	};

	return (
		<BlockControls key="custom-controls">
			<Toolbar label="Options">
				<ToolbarButton
					icon={previewMode ? seen : unseen}
					onClick={togglePreview}
					label={previewMode ? __('Slider Mode') : __('Table Mode')}
				/>
			</Toolbar>
		</BlockControls>
	);
};
export default BlockController;
