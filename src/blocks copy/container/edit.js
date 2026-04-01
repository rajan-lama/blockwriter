import { useState } from '@wordpress/element';
// eslint-disable-next-line import/no-unresolved
// import DeviceTabButton from '@components/DeviceTabButton';
import AdvanceComponent from './AdvanceComponent';
import StylingComponent from './StylingComponent';
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
} from '@wordpress/block-editor';

import {
  Panel,
  PanelBody,
  PanelRow,
  TabPanel,
  SelectControl,
  Button,
  ButtonGroup,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import {} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = (props) => {
  const { attributes, setAttributes } = props;
  const [fullwidthContainer, setFullwidthContainer] = useState(true);
  const [boxedContainer, setBoxedContainer] = useState();
  const [customContainer, setCustomContainer] = useState();
  const [fullwidthContent, setFullwidthContent] = useState(true);
  const [boxedContent, setBoxedContent] = useState([]);
  const [tag, setTag] = useState(attributes.htmlTag);
  const [contentWidth, setContentWidth] = useState(
    attributes.contentBoxWidthDesktop,
  );
  const [contentHeight, setContentHeight] = useState(
    attributes.contentBoxHeightDesktop,
  );

  const TagName = tag; // Dynamically sets the tag

  const onClickContainerType = (value) => {
    setAttributes({ containerType: value });
    switch (value) {
      case 'alignfull':
        setFullwidthContainer(true);
        setBoxedContainer(false);
        setCustomContainer(false);
        break;
      case 'default':
        setFullwidthContainer(false);
        setBoxedContainer(false);
        setCustomContainer(true);
        break;
      case 'alignwide':
      default:
        setFullwidthContainer(false);
        setBoxedContainer(true);
        setCustomContainer(false);
        break;
    }
  };

  const onClickContentType = (value) => {
    setAttributes({ contentType: value });
    switch (value) {
      case 'boxed':
        setFullwidthContent(false);
        setBoxedContent(true);
        break;
      default:
        setFullwidthContent(true);
        setBoxedContent(false);
        break;
    }
  };

  const GeneralComponent = () => {
    const HeightUnits = [
      { value: 'px', label: 'px', default: 0 },
      { value: '%', label: '%', default: 10 },
      { value: 'em', label: 'em', default: 0 },
    ];

    const WidthUnits = [
      { value: 'px', label: 'px', default: 0 },
      { value: '%', label: '%', default: 10 },
      { value: 'em', label: 'em', default: 0 },
    ];

    return (
      <>
        <Panel>
          <PanelBody
            title={__('Container Type', 'gutenstar')}
            initialOpen={true}
          >
            <PanelRow>{__('Container Width', 'gutenstar')}</PanelRow>
            <ButtonGroup>
              <Button
                onClick={() => onClickContainerType('alignfull')}
                variant="primary"
                isPressed={fullwidthContainer}
              >
                {__('Full Width')}
              </Button>
              <Button
                onClick={() => onClickContainerType('alignwide')}
                variant="primary"
                isPressed={boxedContainer}
              >
                {__('Boxed', 'gutenstar')}
              </Button>
              <Button
                onClick={() => onClickContainerType('default')}
                variant="primary"
                isPressed={customContainer}
              >
                {__('Custom', 'gutenstar')}
              </Button>
            </ButtonGroup>
            <PanelRow>{__('Content Width')}</PanelRow>
            <ButtonGroup>
              <Button
                onClick={() => onClickContentType('full-width')}
                variant="primary"
                isPressed={fullwidthContent}
              >
                {__('Full Width', 'gutenstar')}
              </Button>
              <Button
                onClick={() => onClickContentType('boxed')}
                variant="primary"
                isPressed={boxedContent}
              >
                {__('Boxed', 'gutenstar')}
              </Button>
            </ButtonGroup>
            <UnitControl
              // onChange={(value) => onChangeFilter('top', value)}
              // onChange={setContentWidth}
              value={contentWidth}
              units={WidthUnits}
              label="Container Box Width"
              labelPosition="left"
            />
            <UnitControl
              // onChange={(value) => onChangeFilter('top', value)}
              // onChange={setContentHeight}
              value={contentHeight}
              units={HeightUnits}
              label="Container Box height"
              labelPosition="left"
            />
            {/* <DeviceTabButton props={props} /> */}
            {/* <ToggleControl
							label={__('Auto Height', 'gutenstar')}
							help={__(
								'Enabling this will change the Align Items value to Stretch.',
								'gutenstar'
							)}
							checked={attributes.autoHeight}
							onChange={(value) => {
								setAttributes({ autoHeight: value });
							}}           
							className="gs-auto-height"
						/> */}
            <SelectControl
              label={__('HTML Tag', 'gutenstar')}
              labelPosition="side"
              value={attributes.htmlTag}
              options={[
                { label: 'Div', value: 'div' },
                { label: 'Header', value: 'header' },
                { label: 'Footer', value: 'footer' },
                { label: 'Main', value: 'main' },
                { label: 'Article', value: 'article' },
                { label: 'Section', value: 'section' },
                { label: 'Aside', value: 'aside' },
                { label: 'Figure', value: 'figure' },
                { label: 'FigCaption', value: 'figcaption' },
                { label: 'Summary', value: 'summary' },
                { label: 'Nav', value: 'nav' },
                { label: 'Link', value: 'link' },
              ]}
              onChange={(value) => {
                setAttributes({ htmlTag: value });
              }}
            />
            <PanelRow>Overflow</PanelRow>
            <ButtonGroup>
              <Button
                onClick={() => setAttributes({ overflow: 'visible' })}
                variant="primary"
                isPressed={fullwidthContainer}
              >
                {__('Visible', 'gutenstar')}
              </Button>
              <Button
                onClick={() => setAttributes({ overflow: 'hidden' })}
                variant="primary"
                isPressed={boxedContainer}
              >
                {__('Hidden', 'gutenstar')}
              </Button>
              <Button
                onClick={() => setAttributes({ overflow: 'auto' })}
                variant="primary"
                isPressed={customContainer}
              >
                {__('Auto', 'gutenstar')}
              </Button>
            </ButtonGroup>
          </PanelBody>
        </Panel>
      </>
    );
  };

  const containerStickyClass = attributes.sticky
    ? ' gs-sticky ' + attributes.stickyPosition
    : '';

  const containerHideOnDesktop = attributes.hideOnDesktop
    ? ' gs-hide-desktop'
    : '';

  const containerHideOnTablet = attributes.hideOnTablet
    ? ' gs-hide-tablet'
    : '';

  const containerHideOnMobile = attributes.hideOnMobile
    ? ' gs-hide-mobile'
    : '';

  const containerAnimationClass =
    attributes.animation !== 'none'
      ? ' gs-container-animation animate__animated animate__' +
        attributes.animation +
        ' animate__' +
        attributes.animationDuration
      : '';

  const containerClass = !attributes.hasParent ? attributes.containerType : '';

  const containerClassList =
    containerClass +
    containerAnimationClass +
    containerStickyClass +
    containerHideOnDesktop +
    containerHideOnTablet +
    containerHideOnMobile;

  const contentClass = !attributes.hasParent
    ? 'gs-container ' + attributes.contentType
    : '';

  const blockProps = useBlockProps({
    className: containerClassList,
  });

  return (
    <>
      <InspectorControls>
        {!attributes.hasParent && (
          <TabPanel
            className="gs-tab-panel"
            activeClass="active-tab"
            tabs={[
              {
                name: 'general',
                title: 'General',
                className: 'tab-general',
                content: <GeneralComponent />,
              },
              {
                name: 'styling',
                title: 'Style',
                className: 'tab-styling',
                content: <StylingComponent props={props} />,
              },
              {
                name: 'advance',
                title: 'Advance',
                className: 'tab-advance',
                content: <AdvanceComponent props={props} />,
              },
            ]}
          >
            {({ title, content, className }) => (
              <div className={className}>{content}</div>
            )}
          </TabPanel>
        )}
      </InspectorControls>
      <TagName
        {...blockProps}
        style={{
          '--gs-sticky-offset': attributes.stickyOffsetValue,
          '--gs-zindex': attributes.zindex,
        }}
      >
        <div className={contentClass}>
          <InnerBlocks />
        </div>
      </TagName>
    </>
  );
};

export default Edit;
