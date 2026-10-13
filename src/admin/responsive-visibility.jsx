/**
 * BlockWriter responsive visibility.
 *
 * Registers an editor sidebar that controls whether the selected BlockWriter
 * block is displayed on desktop, tablet, and mobile. The toggles only change the
 * block's own visibility attributes through the block editor data store, so
 * undo and redo keep working and nothing is stored on the site.
 *
 * The attributes are applied to the rendered block by the server-side
 * `Blockwriter\Responsive_Visibility` class.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { Button, Notice, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { desktop } from '@wordpress/icons';

import './responsive-visibility.scss';

const SIDEBAR_NAME = 'blockwriter-responsive-visibility';

// The attribute names and breakpoints are shared with the server-side renderer.
const DEVICES = [
	{
		attribute: 'showDesktop',
		label: __( 'Display on Desktop', 'blockwriter' ),
		help: __( 'Hidden on screens 1025px and wider.', 'blockwriter' ),
	},
	{
		attribute: 'showTablet',
		label: __( 'Display on Tablet', 'blockwriter' ),
		help: __( 'Hidden on screens between 768px and 1024px.', 'blockwriter' ),
	},
	{
		attribute: 'showMobile',
		label: __( 'Display on Mobile', 'blockwriter' ),
		help: __( 'Hidden on screens 767px and narrower.', 'blockwriter' ),
	},
];

/**
 * The responsive visibility sidebar content.
 *
 * @return {Element} The visibility controls.
 */
function ResponsiveVisibilityPanel() {
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

	const setVisibility = ( attribute, value ) => {
		if ( clientId ) {
			updateBlockAttributes( clientId, { [ attribute ]: value } );
		}
	};

	const showOnAllDevices = () => {
		if ( ! clientId ) {
			return;
		}

		updateBlockAttributes(
			clientId,
			DEVICES.reduce(
				( result, device ) => ( {
					...result,
					[ device.attribute ]: true,
				} ),
				{},
			),
		);
	};

	if ( ! clientId ) {
		return (
			<div className="bw-responsive-visibility">
				<Notice status="info" isDismissible={ false }>
					{ __(
						'Select a block to control the devices it is displayed on.',
						'blockwriter',
					) }
				</Notice>
			</div>
		);
	}

	if ( ! isBlockWriterBlock ) {
		return (
			<div className="bw-responsive-visibility">
				<Notice status="info" isDismissible={ false }>
					{ __(
						'Responsive visibility is available for BlockWriter blocks.',
						'blockwriter',
					) }
				</Notice>
			</div>
		);
	}

	return (
		<div className="bw-responsive-visibility">
			<p className="bw-responsive-visibility__intro">
				{ __(
					'Choose the devices this block is displayed on. Unchecked devices hide the block on the front end.',
					'blockwriter',
				) }
			</p>

			{ DEVICES.map( ( device ) => (
				<ToggleControl
					key={ device.attribute }
					label={ device.label }
					help={ device.help }
					checked={ attributes[ device.attribute ] !== false }
					onChange={ ( value ) => setVisibility( device.attribute, value ) }
				/>
			) ) }

			<Button
				className="bw-responsive-visibility__reset"
				variant="secondary"
				onClick={ showOnAllDevices }
			>
				{ __( 'Show on all devices', 'blockwriter' ) }
			</Button>
		</div>
	);
}

/**
 * Editor plugin entry point. Registers the responsive visibility sidebar.
 *
 * @return {Element} The editor plugin UI.
 */
function ResponsiveVisibility() {
	// The sidebar components live on `wp.editor` from WordPress 6.6 onward.
	// Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar ) {
		return null;
	}

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ desktop }>
					{ __( 'BlockWriter Visibility', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ desktop }
				title={ __( 'BlockWriter Visibility', 'blockwriter' ) }
			>
				<ResponsiveVisibilityPanel />
			</PluginSidebar>
		</>
	);
}

registerPlugin( SIDEBAR_NAME, {
	render: ResponsiveVisibility,
} );
