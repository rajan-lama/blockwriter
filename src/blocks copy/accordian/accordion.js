import { useState } from '@wordpress/element';

const Accordian = ({ attributes, setAttributes }) => {
	console.log(attributes);
	const accordionData = {
		title: 'Section 1',
		content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at?
               Et perspiciatis dolore iure voluptatem.`,
	};

	const { title, content } = accordionData;

	const [toggle, setToggle] = useState(attributes.toggle);

	const toggleAccordian = (toggle) => {
		setAttributes({ toggle: !toggle });
		setToggle(!attributes.toggle);
	};

	return (
		<>
			<div className="accordion">
				<div className="accordion-item">
					<div
						className="accordion-title"
						onClick={() => toggleAccordian()}
					>
						<div className="accordian-title__text">{title}</div>
						<div className="accordian-title__icon">+</div>
					</div>
					{attributes.toggle === true && (
						<div className="accordion-content">{content}</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Accordian;
