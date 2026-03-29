/**
 * Internal block libraries
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	BorderBoxControl,
} from '@wordpress/components';

/**
 * Create an Inspector Controls wrapper Component
 */

const Inspector = ({ attributes, setAttributes }) => {
	const {
		layout,
		container,
		background,
		backgroundColor,
		backgroundImage,
		tagType,
		// paddingY,
		borderStyle,
		// border,
		margin,
	} = attributes;

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
	const onChange = (newBorders) => setBorders(newBorders);

	const [paddingSize, setPaddingSize] = useState('');
	const [paddingY, setPaddingY] = useState('');

	const [border, setBorder] = useState();
	return (
		<InspectorControls>
			<PanelBody title="Column Layout Settings">
				<SelectControl
					label="Selector"
					value={layout}
					options={[
						{ label: 'One Column', value: 'layout-one' },
						{ label: 'Two Column', value: 'layout-two' },
						{ label: 'Three Colum', value: 'layout-three' },
						{ label: 'Four Column', value: 'layout-four' },
						{ label: 'Five Column', value: 'layout-five' },
						{ label: 'Six Column', value: 'layout-six' },
						{ label: '1/8 + 1/4', value: 'layout-eight-four' },
						{ label: '1/4 + 1/8', value: 'layout-four-eight' },
						{ label: '1/9 + 1/3', value: 'layout-nine-three' },
						{ label: '1/3 + 1/9', value: 'layout-three-nine' },
						{ label: '1/7 + 1/5', value: 'layout-five-seven' },
						{ label: '1/5 + 1/7', value: 'layout-five-seven' },
					]}
					onChange={(value) => setAttributes({ layout: value })}
				/>

				<SelectControl
					label="Container"
					value={container}
					options={[
						{ label: 'Container', value: 'container' },
						{ label: 'Fluid', value: 'container-fluid' },
						// { label: 'boxed', value: 'boxed' }
					]}
					onChange={(value) => setAttributes({ container: value })}
				/>

				<SelectControl
					label="Vertical Spacing"
					value={paddingY}
					options={[
						{ label: 'Small', value: 'py-2' },
						{ label: 'Medium', value: 'py-4' },
						{ label: 'Large', value: 'py-5' },
					]}
					onChange={(value) => setAttributes({ paddingY: value })}
				/>
			</PanelBody>
			<PanelBody title={__('Border Settings')}>
				<BorderBoxControl
					__next40pxDefaultSize
					colors={colors}
					label={__('Borders')}
					onChange={onChange}
					value={borders}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
export default Inspector;
