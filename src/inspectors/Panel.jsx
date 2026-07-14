import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';

const MyPanel = () => (
  <Panel header="My Panel">
    <PanelBody title="My Block Settings" icon={more} initialOpen={true}>
      <PanelRow>My Panel Inputs and Labels</PanelRow>
    </PanelBody>
  </Panel>
);

export default MyPanel;
