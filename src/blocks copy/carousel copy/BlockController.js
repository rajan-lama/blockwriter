/**
 * Internal block libraries
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	BorderBoxControl,
	ToggleControl,
	RangeControl,
	TextControl,
	Button,
	Toolbar,
	ToolbarDropdownMenu,
	ToolbarButton,
} from '@wordpress/components';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

import {
	formatBold,
	formatItalic,
	link,
	pencil,
	seen,
	unseen,
} from '@wordpress/icons';

/**
 * Create an Inspector Controls wrapper Component
 */

const BlockController = ({ attributes, setAttributes }) => {
	const { header, alignment, headingOptions, preview } = attributes;

	const colors = [{ name: 'Blue 20', color: '#72aee6' }];

	const defaultBorder = {
		color: '#72aee6',
		style: 'dashed',
		width: '1px',
	};
	const [borders, setBorders] = useState({
		top: defaultBorder,
		right: defaultBorder,
		bottom: defaultBorder,
		left: defaultBorder,
	});

	console.log('BlockController Rendered', preview);

	return (
		<BlockControls key="custom-controls">
			{/* <BlockAlignmentToolbar
                value={ attributes.blockAlignment }
                onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
            /> */}
			{/* <AlignmentToolbar
					value={alignment}
					onChange={(alignment) => props.setAttributes({ alignment })}
				/> */}
			{/* <Toolbar> */}
			{/* <ToolbarDropdownMenu
						icon={null}
						label="Select Heading"
						text={header?.toUpperCase()}
						controls={headingOptions.map((item) => ({
							title: item.label,
							isActive: header === item.value,
							onClick: () =>
								setAttributes({ header: item.value }),
						}))}
					/> */}
			{/* </Toolbar> */}
			{/* <Button icon={seen} onClick={togglePreview}>
              Slider Mode
          </Button> */}

			<Toolbar label="Options">
				<ToolbarButton
					icon={preview ? seen : unseen}
					onClick={() => setAttributes({ preview: !preview })}
					label={preview ? 'Table Mode' : 'Slider Mode'}
				/>
			</Toolbar>
		</BlockControls>
	);
};
export default BlockController;
