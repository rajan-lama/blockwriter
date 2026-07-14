import { PanelBody } from '@wordpress/components';

import ColorControl from '../controls/ColorControl';

export default function StylePanel(props) {
  return (
    <PanelBody title="Style">
      <ColorControl label="Background" attribute="backgroundColor" {...props} />
      <ColorControl label="Text" attribute="textColor" {...props} />
    </PanelBody>
  );
}
