/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import BackgroundPanel from '../inspectors/advanced/BackgroundPanel';
import TextColorPanel from '../inspectors/advanced/TextColorPanel';
import BorderControlPanel from '../inspectors/advanced/BorderControlPanel';
import BoxShadowPanel from '../inspectors/advanced/BoxShadowPanel';
import ShapeDividerPanel from '../inspectors/advanced/ShapeDividerPanel';
import SpacingPanel from '../inspectors/advanced/SpacingPanel';
import ZIndexPanel from '../inspectors/advanced/ZIndexPanel';

export const AdvanceOptions = ({ attributes, setAttributes }) => {
  return (
    <>
      <div className="blockwriter-styling-section">
        <BackgroundPanel attributes={attributes} setAttributes={setAttributes} />
        <TextColorPanel attributes={attributes} setAttributes={setAttributes} />
        <BorderControlPanel attributes={attributes} setAttributes={setAttributes} />
        <BoxShadowPanel attributes={attributes} setAttributes={setAttributes} />
        <ShapeDividerPanel attributes={attributes} setAttributes={setAttributes} />
        <SpacingPanel attributes={attributes} setAttributes={setAttributes} />
        <ZIndexPanel attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default AdvanceOptions;
