import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';

const MyPanel = () => (
  <Panel header="My Panel">
    <PanelBody title="My Block Settings" icon={more} initialOpen={true}>
      <PanelRow>My Panel Inputs and Labels</PanelRow>
    </PanelBody>

    {/* <DimensionComponent
                        label={__('Row Gap','blockwriter')}
                        dimension={row}
                        updatedDimension={updateAttribute}
                    /> */}
    {/* <DimensionComponent
                        label={__('Column Gap','blockwriter')}
                        dimension={column}
                        updatedDimension={updateAttribute}
                    /> */}
    {/* <DimensionComponent
            label={__('Padding Gap', 'blockwriter')}
            dimension={padding}
            updatedDimension={updateAttribute}
          />
          <DimensionComponent
            label={__('Margin Gap', 'blockwriter')}
            dimension={margin}
            updatedDimension={updateAttribute}
          /> */}
  </Panel>
);

export default MyPanel;
