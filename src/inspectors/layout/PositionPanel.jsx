import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import DimensionControl from '@wordpress/components/build-types/dimension-control';

const PositionPanel = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody title={__('Position', 'blockwriter')} initialOpen={false}>
        <SelectControl
          label={__('Position Type', 'blockwriter')}
          labelPosition="side"
          value={attributes.positionType}
          options={[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Relative',
              value: 'relative',
            },
            {
              label: 'Absolute',
              value: 'absolute',
            },
            {
              label: 'Fixed',
              value: 'fixed',
            },
            {
              label: 'Sticky',
              value: 'sticky',
            },
          ]}
        />
        <DimensionControl
          label={__('Position Dimension', 'blockwriter')}
          dimension={attributes.positionDimension}
          updatedDimension={() => {
            setAttributes({ positionDimension: newValue });
          }}
        />
      </PanelBody>
    </>
  );
};

export default PositionPanel;
