import { useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl, IconButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { eye, trash } from '@wordpress/icons';

export default function Edit({ attributes, setAttributes }) {
	const { slides, preview } = attributes;

	// Add new row
	const addRow = () => {
		const newSlides = [
			...slides,
			{
				title: '',
				subtitle: '',
				description: '',
				btn1Text: '',
				btn1Url: '',
				btn2Text: '',
				btn2Url: '',
			},
		];
		setAttributes({ slides: newSlides });
	};

	// Remove row
	const removeRow = (index) => {
		const newSlides = slides.filter((_, i) => i !== index);
		setAttributes({ slides: newSlides });
	};

	// Update field
	const updateField = (index, field, value) => {
		const newSlides = [...slides];
		newSlides[index][field] = value;
		setAttributes({ slides: newSlides });
	};

	// Toggle preview
	const togglePreview = () => {
		setAttributes({ preview: !preview });
	};

	const blockProps = useBlockProps();

	// 🔥 PREVIEW MODE (Slider)
	if (preview) {
		return (
			<div {...blockProps}>
				<Button onClick={togglePreview}>Back to Table</Button>

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

								{slide.btn1Text && (
									<a href={slide.btn1Url}>{slide.btn1Text}</a>
								)}

								{slide.btn2Text && (
									<a href={slide.btn2Url}>{slide.btn2Text}</a>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}

	// 🧾 TABLE MODE
	return (
		<div {...blockProps}>
			<Button isPrimary onClick={addRow}>
				Add Slide
			</Button>

			<Button
				icon={eye}
				onClick={togglePreview}
				style={{ marginLeft: '10px' }}
			>
				Preview
			</Button>

			<table className="slider-table">
				<thead>
					<tr>
						<th>No</th>
						<th>Title</th>
						<th>Subtitle</th>
						<th>Description</th>
						<th>Btn1 Text</th>
						<th>Btn1 URL</th>
						<th>Btn2 Text</th>
						<th>Btn2 URL</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{slides.map((slide, index) => (
						<tr key={index}>
							<td>{index + 1}</td>

							<td>
								<TextControl
									value={slide.title}
									onChange={(val) =>
										updateField(index, 'title', val)
									}
								/>
							</td>

							<td>
								<TextControl
									value={slide.subtitle}
									onChange={(val) =>
										updateField(index, 'subtitle', val)
									}
								/>
							</td>

							<td>
								<TextControl
									value={slide.description}
									onChange={(val) =>
										updateField(index, 'description', val)
									}
								/>
							</td>

							<td>
								<TextControl
									value={slide.btn1Text}
									onChange={(val) =>
										updateField(index, 'btn1Text', val)
									}
								/>
							</td>

							<td>
								<TextControl
									value={slide.btn1Url}
									onChange={(val) =>
										updateField(index, 'btn1Url', val)
									}
								/>
							</td>

							<td>
								<TextControl
									value={slide.btn2Text}
									onChange={(val) =>
										updateField(index, 'btn2Text', val)
									}
								/>
							</td>

							<td>
								<TextControl
									value={slide.btn2Url}
									onChange={(val) =>
										updateField(index, 'btn2Url', val)
									}
								/>
							</td>

							<td>
								<Button
									icon={trash}
									isDestructive
									onClick={() => removeRow(index)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
