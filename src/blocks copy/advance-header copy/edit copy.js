/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useState } from 'react';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	RichText,
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import {
	Toolbar,
	ToolbarDropdownMenu,
	Button,
	Tooltip,
	CustomSelectControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import icon from './icon';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	// const { attributes: { message }, className, setAttributes } = props;
	const onChangeMessage = (message) => {
		setAttributes({ message });
	};

	const { header, highContrast } = attributes;

	const options = [
		{
			key: 'small',
			name: 'Small',
			style: { fontSize: '50%' },
		},
		{
			key: 'normal',
			name: 'Normal',
			style: { fontSize: '100%' },
		},
		{
			key: 'large',
			name: 'Large',
			style: { fontSize: '200%' },
		},
		{
			key: 'huge',
			name: 'Huge',
			style: { fontSize: '300%' },
		},
	];

	const headingOptions = [
		{ label: 'H1', value: 'h1' },
		{ label: 'H2', value: 'h2' },
		{ label: 'H3', value: 'h3' },
		{ label: 'H4', value: 'h4' },
		{ label: 'H5', value: 'h5' },
		{ label: 'H6', value: 'h6' },
	];

	const Tag = attributes.header;

	return (
		<div {...useBlockProps()}>
			<BlockControls key="custom-controls">
				<BlockAlignmentToolbar
					value={attributes.blockAlignment}
					onChange={(blockAlignment) =>
						setAttributes({ blockAlignment })
					}
				/>
				<AlignmentToolbar
					value={attributes.alignment}
					onChange={(alignment) => props.setAttributes({ alignment })}
				/>
				<Toolbar>
					<ToolbarDropdownMenu
						icon={null}
						label="Select Heading"
						text={header?.toUpperCase()}
						controls={headingOptions.map((item) => ({
							title: item.label,
							isActive: header === item.value,
							onClick: () =>
								setAttributes({ header: item.value }),
						}))}
					/>
				</Toolbar>

				<Toolbar>
					<Tooltip text={__('High Contrast', 'jsforwpblocks')}>
						<Button
							className={classnames(
								'components-icon-button',
								'components-toolbar__control',
								{ 'is-active': attributes.highContrast }
							)}
							onClick={() =>
								setAttributes({ highContrast: !highContrast })
							}
						>
							{icon}
						</Button>
					</Tooltip>
				</Toolbar>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				tagName={attributes.header}
				placeholder={__('Add your custom message', 'jsforwpblocks')}
				onChange={onChangeMessage}
				value={attributes.message}
				className={classnames('message-body', {
					'high-contrast': attributes.highContrast,
				})}
				style={{ textAlign: attributes.alignment }}
			/>

			{/* <Tag {...useBlockProps()}>
              {attributes.message}
          </Tag> */}

			{/* {React.createElement(
                header,
                {},
                "Your Heading Text"
            )} */}
		</div>
	);
}
