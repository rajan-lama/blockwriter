/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
  AnimationPanel,
  // DateRangeVisibilityPanel,
  DeviceVisibilityPanel,
  // TypographyPanel,
  UserVisibilityPanel,
} from '../inspectors/advanced';

import blockOptions from '../constants/blockOptions';

export const AdvanceOptions = ({ attributes, setAttributes, blockName }) => {
  const options = blockOptions[blockName].advanced || [];

  const panels = {
    AnimationPanel,
    // DateRangeVisibilityPanel,
    DeviceVisibilityPanel,
    // TypographyPanel,
    UserVisibilityPanel,
  };

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

export default AdvanceOptions;
