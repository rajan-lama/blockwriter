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
import { TabPanel } from '@wordpress/components';
import LayoutOptions from '../hooks/LayoutOptions';
import AdvanceOptions from '../hooks/AdvanceOptions';
import GeneralOptions from '../hooks/GeneralOptions';

const TabButton = ({ attributes, setAttributes, name }) => {
  const onSelect = (tabName) => {
    console.log('Selecting tab', tabName);
  };

  return (
    <TabPanel
      className="blockwriter-tab-panel"
      activeClass="active-tab"
      onSelect={onSelect}
      tabs={[
        {
          name: 'general',
          title: (
            <>
              <span className="dashicons dashicons-admin-generic"></span>
              <span>General</span>
            </>
          ),
          className: 'tab-one',
        },
        {
          name: 'layout',
          title: (
            <>
              <span className="dashicons dashicons-layout"></span>
              <span>Layout</span>
            </>
          ),
          className: 'tab-one',
        },
        {
          name: 'advanced',
          title: (
            <>
              <span className="dashicons dashicons-admin-settings"></span>
              <span>Advanced</span>
            </>
          ),
          className: 'tab-two',
        },
      ]}
    >
      {(tab) =>
        tab.name === 'general' ? (
          <GeneralOptions
            attributes={attributes}
            setAttributes={setAttributes}
            blockName={name}
          />
        ) : tab.name === 'layout' ? (
          <LayoutOptions
            attributes={attributes}
            setAttributes={setAttributes}
          />
        ) : tab.name === 'advanced' ? (
          <AdvanceOptions
            attributes={attributes}
            setAttributes={setAttributes}
            blockName={name}
          />
        ) : null
      }
    </TabPanel>
  );
};
export default TabButton;
