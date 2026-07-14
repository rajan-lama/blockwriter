/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import BackgroundPanel from '../inspectors/layout/BackgroundPanel';
import TextColorPanel from '../inspectors/layout/TextColorPanel';
import BorderControlPanel from '../inspectors/layout/BorderControlPanel';
import BoxShadowPanel from '../inspectors/layout/BoxShadowPanel';
import ShapeDividerPanel from '../inspectors/layout/ShapeDividerPanel';
import SpacingPanel from '../inspectors/layout/SpacingPanel';
import ZIndexPanel from '../inspectors/advanced/ZIndexPanel';
import SectionSettingsPanel from '../inspectors/general/SectionSettingsPanel';
import blockOptions from '../constants/blockOptions';

export const GeneralOptions = ({ attributes, setAttributes, blockName }) => {
  const options = blockOptions[blockName].general || [];

  const panels = {
    SectionSettingsPanel,
    BackgroundPanel,
    TextColorPanel,
    BorderControlPanel,
    BoxShadowPanel,
    ShapeDividerPanel,
    SpacingPanel,
    ZIndexPanel,
  };

  console.log('GeneralOptions blockName:', blockName); // Log the blockName to verify it's being passed correctly
  console.log('GeneralOptions options:', options);

  return (
    <>
      <div className="blockwriter-styling-section">
        {options.map((name) => {
          const Panel = panels[name];
          return Panel ? (
            <Panel
              key={name}
              attributes={attributes}
              setAttributes={setAttributes}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default GeneralOptions;
