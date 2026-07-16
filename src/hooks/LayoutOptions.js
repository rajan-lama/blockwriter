/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
  BackgroundPanel,
  BorderPanel,
  BoxShadowPanel,
  DisplayTypePanel,
  PositionPanel,
  ShapeDividerPanel,
  SpacingPanel,
  TextColorPanel,
  ZIndexPanel,
} from '../inspectors/layout';

import blockOptions from '../constants/blockOptions';

console.log(blockOptions);

export const LayoutOptions = ({ attributes, setAttributes, blockName }) => {
  const options = blockOptions[blockName]?.layout || [];
  const panels = {
    BackgroundPanel,
    BorderPanel,
    BoxShadowPanel,
    DisplayTypePanel,
    PositionPanel,
    ShapeDividerPanel,
    SpacingPanel,
    TextColorPanel,
    ZIndexPanel,
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

export default LayoutOptions;
