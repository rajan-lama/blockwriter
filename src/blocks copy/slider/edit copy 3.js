import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  BlockControls,
  InnerBlocks,
} from '@wordpress/block-editor';
import { ToolbarButton } from '@wordpress/components';

import Slider from 'react-slick';

const Edit = (props) => {
  const blockProps = useBlockProps();
  const { attributes, setAttributes } = props;

  const handleButtonClick = () => {
    // Action for the button click
    console.log('Toolbar button clicked!');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const innerBlocksProps = useInnerBlocksProps(
    {},
    {
      allowedBlocks: ['gutenstar/slider-child'],
      // orientation: 'horizontal',
      template: [['gutenstar/slider-child'], ['gutenstar/slider-child']],
    },
  );

  // const data = [
  // 	{
  // 		image: '/images/1.png',
  // 		title: 'Iphone 5G Phone',
  // 	},
  // 	{
  // 		image: '/images/2.png',
  // 		title: 'Samgsung 5G Phone',
  // 	},
  // {
  // 	image: '/images/3.png',
  // 	title: 'Intel 5G Phone',
  // },
  // {
  // 	image: '/images/4.png',
  // 	title: 'Poco 5G Phone',
  // },
  // {
  // 	image: '/images/5.png',
  // 	title: 'Techno 5G Phone',
  // },
  // ];

  return (
    <div {...blockProps}>
      {/* Add the button to the block toolbar */}
      <BlockControls>
        <ToolbarButton
          label={__('Custom Button', 'text-domain')}
          icon="plus-alt" // Replace with any icon you'd like
          onClick={handleButtonClick}
        />
      </BlockControls>
      <div className="slider-container">
        <Slider {...settings}>
          <div {...blockProps}>
            <div>
              <div {...innerBlocksProps} />
            </div>
          </div>
          {/* {data.map((item, index) => {
						return (
							<div key={index}>
								<div>
									<img
										src={item.image}
										className="w-40 h-40 object-contain"
									/>
								</div>
								<div>
									<p>{item.title}</p>
								</div>
							</div>
						);
					})}  */}
          {/* <InnerBlocks template={TEMPLATE} templateLock="all" />{' '} */}
          {/* Locking the template makes child blocks non-removable */}
          {/* {data.map((item, index) => {
						return (
							<div key={index}>
								<div>
									<img
										src={item.image}
										className="w-40 h-40 object-contain"
									/>
								</div>
								<div>
									<p>{item.title}</p>
								</div>
							</div>
						);
					})} */}
        </Slider>
      </div>
    </div>
  );
};

export default Edit;
