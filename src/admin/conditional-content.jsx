/**
 * BlockWriter conditional content.
 *
 * Registers an editor sidebar that controls when the selected BlockWriter block
 * is displayed based on the current user and an optional date range. The
 * controls only change the block's own attributes through the block editor data
 * store, so undo and redo keep working and nothing is stored on the site.
 *
 * The conditions are evaluated on the server by the
 * `Blockwriter\Conditional_Content` class. The block always remains visible in
 * the editor so it can still be edited.
 */
import {
	Button,
	CheckboxControl,
	Notice,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { filter } from '@wordpress/icons';

import './conditional-content.scss';

const SIDEBAR_NAME = 'blockwriter-conditional-content';

const USER_STATUS_OPTIONS = [
	{ label: __( 'All users', 'blockwriter' ), value: 'all' },
	{ label: __( 'Logged in users', 'blockwriter' ), value: 'logged-in' },
	{ label: __( 'Logged out users', 'blockwriter' ), value: 'logged-out' },
	{ label: __( 'Specific roles', 'blockwriter' ), value: 'specific-roles' },
];

const ROLE_OPTIONS = [
	{ label: __( 'Administrator', 'blockwriter' ), value: 'administrator' },
	{ label: __( 'Editor', 'blockwriter' ), value: 'editor' },
	{ label: __( 'Author', 'blockwriter' ), value: 'author' },
	{ label: __( 'Contributor', 'blockwriter' ), value: 'contributor' },
	{ label: __( 'Subscriber', 'blockwriter' ), value: 'subscriber' },
];

/**
 * Returns the stored user status, falling back to "all users".
 *
 * @param {string} value Stored attribute value.
 *
 * @return {string} A valid user status value.
 */
function getUserStatus( value ) {
	return USER_STATUS_OPTIONS.some( ( option ) => option.value === value )
		? value
		: 'all';
}

/**
 * The conditional content sidebar content.
 *
 * @return {Element} The condition controls.
 */
function ConditionalContentPanel() {
	const { clientId, blockName, attributes } = useSelect( ( select ) => {
		const block = select( 'core/block-editor' ).getSelectedBlock();

		return {
			clientId: block ? block.clientId : '',
			blockName: block ? block.name : '',
			attributes: block ? block.attributes : {},
		};
	}, [] );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const isBlockWriterBlock =
		!! blockName && blockName.startsWith( 'blockwriter/' );

	const setAttribute = ( key, value ) => {
		if ( clientId ) {
			updateBlockAttributes( clientId, { [ key ]: value } );
		}
	};

	if ( ! clientId ) {
		return (
			<div className="bw-conditional-content">
				<Notice status="info" isDismissible={ false }>
					{ __(
						'Select a block to control when it is displayed.',
						'blockwriter',
					) }
				</Notice>
			</div>
		);
	}

	if ( ! isBlockWriterBlock ) {
		return (
			<div className="bw-conditional-content">
				<Notice status="info" isDismissible={ false }>
					{ __(
						'Conditional content is available for BlockWriter blocks.',
						'blockwriter',
					) }
				</Notice>
			</div>
		);
	}

	const userStatus = getUserStatus( attributes.userVisibility );
	const selectedRoles = Array.isArray( attributes.selectedRoles )
		? attributes.selectedRoles
		: [];

	const dateRange =
		attributes.displayDateRange &&
		typeof attributes.displayDateRange === 'object'
			? attributes.displayDateRange
			: {};
	const from = dateRange.from || '';
	const to = dateRange.to || '';

	const toggleRole = ( role ) => {
		const nextRoles = selectedRoles.includes( role )
			? selectedRoles.filter( ( item ) => item !== role )
			: [ ...selectedRoles, role ];

		setAttribute( 'selectedRoles', nextRoles );
	};

	return (
		<div className="bw-conditional-content">
			<p className="bw-conditional-content__intro">
				{ __(
					'Show this block to selected users or during a date range. Unmet conditions hide the block on the front end.',
					'blockwriter',
				) }
			</p>

			<SelectControl
				label={ __( 'Visible to', 'blockwriter' ) }
				value={ userStatus }
				options={ USER_STATUS_OPTIONS }
				onChange={ ( value ) => setAttribute( 'userVisibility', value ) }
			/>

			{ userStatus === 'specific-roles' && (
				<fieldset className="bw-conditional-content__roles">
					<legend className="bw-conditional-content__legend">
						{ __( 'Choose roles', 'blockwriter' ) }
					</legend>

					{ ROLE_OPTIONS.map( ( role ) => (
						<CheckboxControl
							key={ role.value }
							label={ role.label }
							checked={ selectedRoles.includes( role.value ) }
							onChange={ () => toggleRole( role.value ) }
						/>
					) ) }
				</fieldset>
			) }

			<TextControl
				label={ __( 'Visible from', 'blockwriter' ) }
				type="date"
				value={ from }
				onChange={ ( value ) =>
					setAttribute( 'displayDateRange', { ...dateRange, from: value } )
				}
				help={ __( 'Leave empty for no start date.', 'blockwriter' ) }
			/>

			<TextControl
				label={ __( 'Visible until', 'blockwriter' ) }
				type="date"
				value={ to }
				onChange={ ( value ) =>
					setAttribute( 'displayDateRange', { ...dateRange, to: value } )
				}
				help={ __( 'Leave empty for no end date.', 'blockwriter' ) }
			/>

			<Button
				className="bw-conditional-content__reset"
				variant="secondary"
				onClick={ () =>
					updateBlockAttributes( clientId, {
						userVisibility: 'all',
						selectedRoles: [],
						displayDateRange: {},
					} )
				}
			>
				{ __( 'Clear conditions', 'blockwriter' ) }
			</Button>
		</div>
	);
}

/**
 * Editor plugin entry point. Registers the conditional content sidebar.
 *
 * @return {Element} The editor plugin UI.
 */
function ConditionalContent() {
	// The sidebar components live on `wp.editor` from WordPress 6.6 onward.
	// Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar ) {
		return null;
	}

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ filter }>
					{ __( 'BlockWriter Conditions', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ filter }
				title={ __( 'BlockWriter Conditions', 'blockwriter' ) }
			>
				<ConditionalContentPanel />
			</PluginSidebar>
		</>
	);
}

registerPlugin( SIDEBAR_NAME, {
	render: ConditionalContent,
} );
