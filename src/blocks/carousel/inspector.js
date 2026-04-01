/**
 * Internal block libraries
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	BorderBoxControl,
	CheckboxControl,
	TextareaControl,
	ToggleControl,
	RangeControl,
	TextControl,
	Button,
} from '@wordpress/components';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Create an Inspector Controls wrapper Component
 */

const Inspector = ({ attributes, setAttributes }) => {
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

	const {
		slides,
		activeIndex,
		showTitle,
		showSubtitle,
		showDescription,
		showPrimaryButtons,
		showSecondaryButtons,
	} = attributes;

	const setSlides = (newSlides) => {
		setAttributes({ slides: newSlides });
	};

	const updateField = (field, value) => {
		const newSlides = [...slides];
		newSlides[activeIndex][field] = value;
		setSlides(newSlides);
	};

	return (
		<InspectorControls>
			<PanelBody title={`Slide ${activeIndex + 1} Content`} initialOpen>
				{showTitle && (
					<TextControl
						label="Title"
						value={slides[activeIndex]?.title || ''}
						onChange={(val) => updateField('title', val)}
					/>
				)}

				{showSubtitle && (
					<TextControl
						label="Subtitle"
						value={slides[activeIndex]?.subtitle || ''}
						onChange={(val) => updateField('subtitle', val)}
					/>
				)}
				{showDescription && (
					<TextareaControl
						label="Description"
						value={slides[activeIndex]?.description || ''}
						onChange={(val) => updateField('description', val)}
					/>
				)}

				{showPrimaryButtons && (
					<>
						<TextControl
							label="Primary Button Text"
							value={slides[activeIndex]?.btn1Text || ''}
							onChange={(val) => updateField('btn1Text', val)}
						/>

						<TextControl
							label="Primary Button URL"
							value={slides[activeIndex]?.btn1Url || ''}
							onChange={(val) => updateField('btn1Url', val)}
						/>
					</>
				)}

				{showSecondaryButtons && (
					<>
						<TextControl
							label="Second Button Text"
							value={slides[activeIndex]?.btn2Text || ''}
							onChange={(val) => updateField('btn2Text', val)}
						/>

						<TextControl
							label="Second Button URL"
							value={slides[activeIndex]?.btn2Url || ''}
							onChange={(val) => updateField('btn2Url', val)}
						/>
					</>
				)}

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => updateField('image', media.url)}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} isSecondary>
								{slides[activeIndex]?.image
									? 'Change Image'
									: 'Upload Image'}
							</Button>
						)}
					/>
				</MediaUploadCheck>

				{slides[activeIndex]?.image && (
					<img
						src={slides[activeIndex].image}
						style={{ width: '100%', marginTop: '10px' }}
					/>
				)}
			</PanelBody>

			<PanelBody title={`Slide Display Options`}>
				<ToggleControl
					label="Display Title"
					checked={showTitle}
					onChange={(val) => setAttributes({ showTitle: val })}
				/>
				<ToggleControl
					label="Display Subtitle"
					checked={showSubtitle}
					onChange={(val) => setAttributes({ showSubtitle: val })}
				/>
				<ToggleControl
					label="Display Description"
					checked={showDescription}
					onChange={(val) => setAttributes({ showDescription: val })}
				/>
				<ToggleControl
					label="Display Primary Button"
					checked={showPrimaryButtons}
					onChange={(val) =>
						setAttributes({ showPrimaryButtons: val })
					}
				/>
				<ToggleControl
					label="Display Secondary Button"
					checked={showSecondaryButtons}
					onChange={(val) =>
						setAttributes({ showSecondaryButtons: val })
					}
				/>
			</PanelBody>
			<PanelBody title="Slider Settings">
				<ToggleControl
					label="Show Indicators"
					checked={attributes.showIndicators}
					onChange={(val) => setAttributes({ showIndicators: val })}
				/>

				<ToggleControl
					label="Show Controls"
					checked={attributes.showControls}
					onChange={(val) => setAttributes({ showControls: val })}
				/>

				<SelectControl
					label="Transition Effect"
					value={attributes.slideEffect}
					options={[
						{ label: 'Slide', value: 'slide' },
						{ label: 'Fade', value: 'fade' },
						{ label: 'Cube', value: 'cube' },
						{ label: 'Coverflow', value: 'coverflow' },
						{ label: 'Flip', value: 'flip' },
					]}
					onChange={(val) => setAttributes({ slideEffect: val })}
				/>

				<RangeControl
					label="Interval (ms)"
					value={attributes.interval}
					onChange={(val) => setAttributes({ interval: val })}
					min={1000}
					max={10000}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
export default Inspector;
