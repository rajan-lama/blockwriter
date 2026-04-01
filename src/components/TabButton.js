import { useEffect, useState } from '@wordpress/element';
import { getBlockParents } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
// import { Icon } from "@wordpress/icons";
// eslint-disable-next-line import/no-unresolved
import DeviceTabButton from '@components/DeviceTabButton';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import {
  Panel,
  PanelBody,
  PanelHeader,
  PanelRow,
  TabPanel,
  TextControl,
  AlignmentMatrixControl,
  CheckboxControl,
  Icon,
  SelectControl,
  RangeControl,
  Button,
  ButtonGroup,
  ToggleControl,
  ColorPicker,
  GradientPicker,
  FocalPointPicker,
  ColorPalette,
  ColorIndicator,
} from '@wordpress/components';

const TabButton = ({ props }) => {
  const onSelect = (tabName) => {
    console.log('Selecting tab', tabName);
  };

  return (
    <TabPanel
      className="gs-tab-panel"
      activeClass="active-tab"
      onSelect={onSelect}
      tabs={[
        {
          name: 'tab1',
          title: 'Tab 1',
          className: 'tab-one',
        },
        {
          name: 'tab2',
          title: 'Tab 2',
          className: 'tab-two',
        },
      ]}
    >
      {(tab) => <p>{tab.title}</p>}
    </TabPanel>
  );
};
export default TabButton;
