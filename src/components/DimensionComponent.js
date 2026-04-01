import { useEffect, useState } from '@wordpress/element';
import { getBlockParents } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
// import { Icon } from "@wordpress/icons";
// eslint-disable-next-line import/no-unresolved
import DeviceTabButton from '@components/DeviceTabButton';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PanelRow, Button } from '@wordpress/components';
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';

const DimensionComponent = ({ label, dimension, updatedDimension }) => {
  const [top, setTop] = useState(dimension.top);
  const [bottom, setBottom] = useState(dimension.bottom);
  const [left, setLeft] = useState(dimension.left);
  const [right, setRight] = useState(dimension.right);
  const [locked, setLocked] = useState(dimension.locked);

  const units = [
    { value: 'px', label: 'px', default: 0 },
    { value: '%', label: '%', default: 10 },
    { value: 'em', label: 'em', default: 0 },
  ];

  useEffect(() => {
    updatedDimension({
      top,
      bottom,
      left,
      right,
      locked,
    });
  }, [top, bottom, left, right, locked]);

  const onChangeFilter = (position, value) => {
    if (locked === true) {
      setTop(value);
      setLeft(value);
      setRight(value);
      setBottom(value);
    } else {
      switch (position) {
        case 'top':
          setTop(value);
          break;
        case 'bottom':
          setBottom(value);
          break;
        case 'left':
          setLeft(value);
          break;
        case 'right':
          setRight(value);
          break;
      }
    }
  };

  const onChangelock = (value) => {
    setLocked(value);
    if (locked === true) {
      setLeft(top);
      setRight(top);
      setBottom(top);
    }
  };

  return (
    <>
      <div className="gs-dimension-control">
        <PanelRow>
          {label}
          {/* <Button
						icon="undo"
						variant="tertairy"
						isSmall="true"
						iconSize="15"
						onClick={() => setCurrentBgOption("gradient")}
						isPressed={currentBgOption === "gradient" ? true : false}
					></Button> */}
        </PanelRow>
        <div className="gs-dimension-control-value">
          <UnitControl
            onChange={(value) => onChangeFilter('top', value)}
            value={top}
            units={units}
            label="Top"
            labelPosition="bottom"
          />
          <UnitControl
            onChange={(value) => onChangeFilter('left', value)}
            value={left}
            units={units}
            label="left"
            labelPosition="bottom"
          />
          <UnitControl
            onChange={(value) => onChangeFilter('bottom', value)}
            value={bottom}
            units={units}
            label="bottom"
            labelPosition="bottom"
          />
          <UnitControl
            onChange={(value) => onChangeFilter('right', value)}
            value={right}
            units={units}
            label="right"
            labelPosition="bottom"
          />

          <Button
            icon="admin-links"
            variant="tertiary"
            isSmall="true"
            iconSize="15"
            onClick={() => onChangelock(!locked)}
            isPressed={locked === true ? true : false}
          ></Button>
        </div>
      </div>
    </>
  );
};
export default DimensionComponent;
