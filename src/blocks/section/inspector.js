/**
 * Internal block libraries
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import BorderPanel from '../../inspectors/layout/BorderPanel';
import SectionSettingsPanel from '../../inspectors/general/SectionSettingsPanel';

/**
 * Create an Inspector Controls wrapper Component
 */

const Inspector = ({ attributes, setAttributes }) => {
  return (
    <InspectorControls>
      <SectionSettingsPanel
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <BorderPanel attributes={attributes} setAttributes={setAttributes} />
    </InspectorControls>
  );
};
export default Inspector;
