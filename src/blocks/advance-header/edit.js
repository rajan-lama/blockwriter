/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const onChangeContent = (content) => {
		setAttributes({ content });
	};

	const { header } = attributes;

	const headingOptions = [
		{ label: 'H1', value: 'h1' },
		{ label: 'H2', value: 'h2' },
		{ label: 'H3', value: 'h3' },
		{ label: 'H4', value: 'h4' },
		{ label: 'H5', value: 'h5' },
		{ label: 'H6', value: 'h6' },
	];

	return (
		<div {...useBlockProps()}>
			<BlockControls key="custom-controls">
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
			</BlockControls>
			<RichText
				{...useBlockProps()}
				tagName={attributes.header}
				placeholder={__('Add your custom content', 'jsforwpblocks')}
				onChange={onChangeContent}
				value={attributes.content}
				className={classnames('content-body', {
					'high-contrast': attributes.highContrast,
				})}
				style={{ textAlign: attributes.alignment }}
			/>
		</div>
	);
}
