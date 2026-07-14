import { PanelBody, TextControl } from '@wordpress/components';

export const LayoutOptions = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody title="Button Label">
        <TextControl
          label="Layout Button Label"
          value={attributes.buttonLabel}
          onChange={(value) => setAttributes({ buttonLabel: value })}
          //   placeholder={option.extra.placeholder}
        />
      </PanelBody>
      <PanelBody title="Button Label">
        <TextControl
          label="Button Label"
          value={attributes.buttonLabel}
          onChange={(value) => setAttributes({ buttonLabel: value })}
          //   placeholder={option.extra.placeholder}
        />
      </PanelBody>
      <PanelBody title="Button Label">
        <TextControl
          label="Button Label"
          value={attributes.buttonLabel}
          onChange={(value) => setAttributes({ buttonLabel: value })}
          //   placeholder={option.extra.placeholder}
        />
      </PanelBody>
      <PanelBody title="Button Label">
        <TextControl
          label="Button Label"
          value={attributes.buttonLabel}
          onChange={(value) => setAttributes({ buttonLabel: value })}
          //   placeholder={option.extra.placeholder}
        />
      </PanelBody>
      <PanelBody title="Button Label">
        <TextControl
          label="Button Label"
          value={attributes.buttonLabel}
          onChange={(value) => setAttributes({ buttonLabel: value })}
          //   placeholder={option.extra.placeholder}
        />
      </PanelBody>
      <PanelBody title="Button Label">
        <TextControl
          label="Button Label"
          value={attributes.buttonLabel}
          onChange={(value) => setAttributes({ buttonLabel: value })}
          //   placeholder={option.extra.placeholder}
        />
      </PanelBody>
    </>
  );
};

export default LayoutOptions;
