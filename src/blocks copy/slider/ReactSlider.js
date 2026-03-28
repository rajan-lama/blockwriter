import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReactSlider = ({ children }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		// slidesToShow: 1,
		// slidesToScroll: 1,
		arrows: true,
	};

	return (
		<Slider {...settings}>
			{React.Children.map(children, (child, index) => (
				<>
					<div key={index}>{child}</div>
				</>
			))}
		</Slider>
	);
};

export default ReactSlider;
