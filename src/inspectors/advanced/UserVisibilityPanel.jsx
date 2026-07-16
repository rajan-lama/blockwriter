import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  CheckboxControl,
  SelectControl,
} from '@wordpress/components';

const USER_ROLE_OPTIONS = [
  { label: __('Administrator', 'blockwriter'), value: 'administrator' },
  { label: __('Editor', 'blockwriter'), value: 'editor' },
  { label: __('Author', 'blockwriter'), value: 'author' },
  { label: __('Contributor', 'blockwriter'), value: 'contributor' },
  { label: __('Subscriber', 'blockwriter'), value: 'subscriber' },
];

const UserVisibilityPanel = ({ attributes, setAttributes }) => {
  const selectedRoles = attributes.selectedRoles || [];

  const toggleRole = (value) => {
    const nextRoles = selectedRoles.includes(value)
      ? selectedRoles.filter((role) => role !== value)
      : [...selectedRoles, value];

    setAttributes({ selectedRoles: nextRoles });
  };

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
          <div className="blockwriter-user-visibility-roles">
            {USER_ROLE_OPTIONS.map((role) => (
              <CheckboxControl
                key={role.value}
                label={role.label}
                checked={selectedRoles.includes(role.value)}
                onChange={() => toggleRole(role.value)}
              />
            ))}
          </div>
        )}
      </PanelBody>
    </>
  );
};

export default UserVisibilityPanel;
