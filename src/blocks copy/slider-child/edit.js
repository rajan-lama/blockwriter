import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  BlockControls,
  InnerBlocks,
} from '@wordpress/block-editor';
import { ToolbarButton } from '@wordpress/components';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Edit = (props) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps} className="single-slide">
      <p>{__('Child Block Content', 'text-domain')}</p>
    </div>
  );
};

export default Edit;
