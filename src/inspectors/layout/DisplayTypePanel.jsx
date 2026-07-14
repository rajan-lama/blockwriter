import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

const DisplayTypePanel = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody
        title={__('Display Option', 'blockwriter')}
        initialOpen={false}
      >
        <SelectControl
          label={__('Display Type', 'blockwriter')}
          labelPosition="side"
          value={attributes.displayType}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Block',
              value: 'block',
            },
            {
              label: 'Inline Block',
              value: 'inline-block',
            },
            {
              label: 'Flex',
              value: 'flex',
            },
            {
              label: 'Inline Flex',
              value: 'inline-flex',
            },
          ]}
        />

        <SelectControl
          label={__('Flex Direction', 'blockwriter')}
          labelPosition="side"
          value={attributes.positionType}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Row',
              value: 'row',
            },
            {
              label: 'Row Reverse',
              value: 'row-reverse',
            },
            {
              label: 'Column',
              value: 'column',
            },
            {
              label: 'Column Reverse',
              value: 'column-reverse',
            },
          ]}
        />

        <SelectControl
          label={__('Flex Wrap', 'blockwriter')}
          labelPosition="side"
          value={attributes.positionType}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Wrap',
              value: 'wrap',
            },
            {
              label: 'Wrap Reverse',
              value: 'wrap-reverse',
            },
          ]}
        />
        <SelectControl
          label={__('Justify Content', 'blockwriter')}
          labelPosition="side"
          value={attributes.positionType}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Flex Start',
              value: 'flex-start',
            },
            {
              label: 'Flex End',
              value: 'flex-end',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Space Between',
              value: 'space-between',
            },
            {
              label: 'Space Around',
              value: 'space-around',
            },
            {
              label: 'Space Evenly',
              value: 'space-evenly',
            },
          ]}
        />
        <SelectControl
          label={__('Align Item', 'blockwriter')}
          labelPosition="side"
          value={attributes.positionType}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Flex Start',
              value: 'flex-start',
            },
            {
              label: 'Flex End',
              value: 'flex-end',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Stretch',
              value: 'stretch',
            },
            {
              label: 'Baseline',
              value: 'baseline',
            },
          ]}
        />
      </PanelBody>
    </>
  );
};

export default DisplayTypePanel;
