/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
  BackgroundPanel,
  TextColorPanel,
  BorderControlPanel,
  BoxShadowPanel,
  ShapeDividerPanel,
  SpacingPanel,
  ZIndexPanel,
} from '../inspectors/advanced';

export const AdvanceOptions = ({ attributes, setAttributes, blockName }) => {
  console.log('AdvanceOptions blockName:', blockName);
  return (
    <>
      <div className="blockwriter-styling-section">
        <BackgroundPanel
          attributes={attributes}
          setAttributes={setAttributes}
        />
        <TextColorPanel attributes={attributes} setAttributes={setAttributes} />
        <BorderControlPanel
          attributes={attributes}
          setAttributes={setAttributes}
        />
        <BoxShadowPanel attributes={attributes} setAttributes={setAttributes} />
        <ShapeDividerPanel
          attributes={attributes}
          setAttributes={setAttributes}
        />
        <SpacingPanel attributes={attributes} setAttributes={setAttributes} />
        <ZIndexPanel attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default AdvanceOptions;
