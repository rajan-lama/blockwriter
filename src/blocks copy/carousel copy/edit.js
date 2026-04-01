import { seen } from '@wordpress/icons';
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  TextControl,
  ColorPalette,
  RangeControl,
} from '@wordpress/components';
// import Repeater from '../../components/Repeater';
// import MyDraggable from '../../components/MyDraggable';

export default function Edit({ attributes, setAttributes }) {
  const { slides, preview, activeIndex } = attributes;

  const tempSlides = [
    {
      title: 'Slide 1',
      subtitle: 'Subtitle 1',
      description: 'Description for slide 1',
      image: 'https://via.placeholder.com/800x400?text=Slide+1',
      btn1Text: 'Learn More',
      btn1Url: '#',
      btn2Text: 'Buy Now',
      btn2Url: '#',
    },
    {
      title: 'Slide 2',
      subtitle: 'Subtitle 2',
      description: 'Description for slide 2',
      image: 'https://via.placeholder.com/800x400?text=Slide+2',
      btn1Text: 'Learn More',
      btn1Url: '#',
      btn2Text: 'Buy Now',
      btn2Url: '#',
    },
  ];

  const setSlides = (newSlides) => {
    setAttributes({ slides: newSlides });
  };

  const setActive = (index) => {
    setAttributes({ activeIndex: index });
  };

  const updateField = (field, value) => {
    const newSlides = [...slides];
    newSlides[activeIndex][field] = value;
    setSlides(newSlides);
  };

  const fields = [
    { name: 'title', label: 'Title' },
    { name: 'subtitle', label: 'Subtitle' },
    { name: 'description', label: 'Description' },
    { name: 'image', label: 'Image' },
    { name: 'btn1Text', label: 'Button 1 Text' },
    { name: 'btn1Url', label: 'Button 1 URL' },
    { name: 'btn2Text', label: 'Button 2 Text' },
    { name: 'btn2Url', label: 'Button 2 URL' },
  ];

  const togglePreview = () => {
    setAttributes({ preview: !preview });
  };

  const blockProps = useBlockProps();

  // 🔥 Preview Mode
  if (preview) {
    return (
      <div {...blockProps}>
        <Button onClick={togglePreview}>Back</Button>

        <div className="carousel slide">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <h2>{slide.title}</h2>
                <h4>{slide.subtitle}</h4>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 🧾 Table / Repeater Mode
  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={`Slide ${activeIndex + 1} Settings`} initialOpen>
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
            label="Button 1 Text"
            value={slides[activeIndex]?.btn1Text || ''}
            onChange={(val) => updateField('btn1Text', val)}
          />

          <TextControl
            label="Button 1 URL"
            value={slides[activeIndex]?.btn1Url || ''}
            onChange={(val) => updateField('btn1Url', val)}
          />
        </PanelBody>

        <PanelBody title={`Slide ${activeIndex + 1} Content`} initialOpen>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => updateField('image', media.url)}
              allowedTypes={['image']}
              render={({ open }) => (
                <Button onClick={open} isSecondary>
                  {slides[activeIndex]?.image ? 'Change Image' : 'Upload Image'}
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
        </PanelBody>

        <PanelBody title="Style" initialOpen={false}>
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
        </PanelBody>
      </InspectorControls>
      <Button icon={seen} onClick={togglePreview}>
        Preview
      </Button>

      <table className="slider-table">
        <tbody>
          {tempSlides.map((slide, index) => (
            <tr
              key={index}
              onClick={() => setActive(index)}
              style={{
                cursor: 'pointer',
                background: index === activeIndex ? '#e7f3ff' : 'white',
              }}
            >
              <td>{index + 1}</td>
              <td>{slide.title || 'No title'}</td>
              <td>{slide.subtitle || 'No subtitle'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Repeater
				items={slides}
				setItems={setSlides}
				fields={fields}
				label="Add Slide"
			/> */}
      {/* <MyDraggable /> */}
    </div>
  );
}
