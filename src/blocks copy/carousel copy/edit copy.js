import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { seen } from '@wordpress/icons';
// import Repeater from '../../components/Repeater';
import MyDraggable from '../../components/MyDraggable';

export default function Edit({ attributes, setAttributes }) {
	const { slides, preview } = attributes;

	const setSlides = (newSlides) => {
		setAttributes({ slides: newSlides });
	};

	const fields = [
		{ name: 'title', label: 'Title' },
		{ name: 'subtitle', label: 'Subtitle' },
		{ name: 'description', label: 'Description' },
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
								className={`carousel-item ${
									index === 0 ? 'active' : ''
								}`}
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
				<p>Inspector Controls will go here.</p>
				<MyDraggable />
			</InspectorControls>
			<Button icon={seen} onClick={togglePreview}>
				Preview
			</Button>

			{/* <Repeater
				items={slides}
				setItems={setSlides}
				fields={fields}
				label="Add Slide"
			/> */}
		</div>
	);
}
