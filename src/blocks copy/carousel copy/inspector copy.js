/**
 * Internal block libraries
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
  ToggleControl,
  TextareaControl,
	RangeControl,
  TextControl,
  Button
} from '@wordpress/components';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
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

  const { slides, activeIndex, showTitle, showSubtitle,showDescription, showPrimaryButtons, showSecondaryButtons } = attributes;

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

				<PanelBody
					title={`Slide ${activeIndex + 1} Content`}
					initialOpen
				>

          <TextControl
						label="Title"
						value={slides[activeIndex]?.title || ''}
						onChange={(val) => updateField('title', val)}
					/>

					<TextControl
						label="Subtitle"
						value={slides[activeIndex]?.subtitle || ''}
						onChange={(val) => updateField('subtitle', val)}
					/>

          <TextControl
						label="Description"
						value={slides[activeIndex]?.description || ''}
						onChange={(val) => updateField('description', val)}
					/>

					<TextControl
						label="First Button Text"
						value={slides[activeIndex]?.btn1Text || ''}
						onChange={(val) => updateField('btn1Text', val)}
					/>

					<TextControl
						label="First Button URL"
						value={slides[activeIndex]?.btn1Url || ''}
						onChange={(val) => updateField('btn1Url', val)}
					/>

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

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								updateField('image', media.url)
							}
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

				{/* <PanelBody title="Style" initialOpen={false}> */}
					{/* <p>Text Color</p>
					<ColorPalette
						value={styles.textColor}
						onChange={(color) =>
							setAttributes({
								styles: { ...styles, textColor: color },
							})
						}
					/>

					<p>Background Color</p>
					<ColorPalette
						value={styles.bgColor}
						onChange={(color) =>
							setAttributes({
								styles: { ...styles, bgColor: color },
							})
						}
					/> */}

					{/* <RangeControl
						label="Padding"
						value={styles.padding}
						onChange={(val) =>
							setAttributes({
								styles: { ...styles, padding: val },
							})
						}
						min={0}
						max={100}
					/> */}
				{/* </PanelBody> */}
        <PanelBody
					title={`Slider Display Options`}
					initialOpen
				>

        <ToggleControl
            label="Title"
            checked={ showTitle }
            onChange={ (val) => setAttributes({ showTitle: val }) }
        />
        <ToggleControl
            label="Subtitle"
            checked={ showSubtitle }
            onChange={ (val) => setAttributes({ showSubtitle: val }) }
        />
        <TextareaControl
            label="Text"
            help="Enter some text"
            value={ text }
            onChange={ ( value ) => setText( value ) }
        />
            label="Description"
            checked={ showDescription }
            onChange={ (val) => setAttributes({ showDescription: val }) }
        />
        <ToggleControl
            label="Primary Button"
            checked={ showPrimaryButtons }
            onChange={ (val) => setAttributes({ showPrimaryButtons: val }) }
        />
        <ToggleControl
            label="Secondary Button"
            checked={ showSecondaryButtons }
            onChange={ (val) => setAttributes({ showSecondaryButtons: val }) }
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

				<ToggleControl
					label="Fade Effect"
					checked={attributes.fade}
					onChange={(val) => setAttributes({ fade: val })}
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
