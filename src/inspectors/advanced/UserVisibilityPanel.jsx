import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

const UserVisibilityPanel = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody
        title={__('User Visibility', 'blockwriter')}
        initialOpen={false}
      >
        <SelectControl
          label={__('User Status', 'blockwriter')}
          value={attributes.userVisibility}
          options={[
            { label: __('All Users', 'blockwriter'), value: 'all' },
            { label: __('Logged In Users', 'blockwriter'), value: 'logged-in' },
            {
              label: __('Logged Out Users', 'blockwriter'),
              value: 'logged-out',
            },
            {
              label: __('Specific Roles', 'blockwriter'),
              value: 'specific-roles',
            },
          ]}
          onChange={(value) => setAttributes({ userVisibility: value })}
        />
        {attributes.userVisibility === 'specific-roles' && (
          <SelectControl
            label={__('Roles', 'blockwriter')}
            value={attributes.selectedRoles || []}
            options={[
              {
                label: __('Administrator', 'blockwriter'),
                value: 'administrator',
              },
              { label: __('Editor', 'blockwriter'), value: 'editor' },
              { label: __('Author ', 'blockwriter'), value: 'author' },
              { label: __('Contributor', 'blockwriter'), value: 'contributor' },
              { label: __('Subscriber', 'blockwriter'), value: 'subscriber' },
            ]}
            onChange={(value) => setAttributes({ selectedRoles: value })}
            multiple
          />
        )}
      </PanelBody>
    </>
  );
};

export default UserVisibilityPanel;
