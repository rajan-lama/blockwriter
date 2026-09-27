/**
 * BlockWriter block presets.
 *
 * Registers an editor sidebar that applies curated attribute presets to the
 * currently selected block. Presets only change the block's own attributes
 * through the block editor data store, so undo and redo keep working and no
 * preset data is persisted anywhere.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { Button, Notice } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { symbol } from '@wordpress/icons';

import blockPresets from '../presets/blockPresets';

import './block-presets.scss';

const SIDEBAR_NAME = 'blockwriter-block-presets';

/**
 * The preset sidebar content.
 *
 * @return {Element} The preset list.
 */
function BlockPresetsPanel() {
	const { clientId, blockName, blockTitle } = useSelect( ( select ) => {
		const editor = select( 'core/block-editor' );
		const block = editor.getSelectedBlock();
		const name = block ? block.name : '';
		const blockType = name
			? select( 'core/blocks' ).getBlockType( name )
			: null;

		return {
			clientId: block ? block.clientId : '',
			blockName: name,
			blockTitle: blockType ? blockType.title : '',
		};
	}, [] );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
	const { createNotice } = useDispatch( 'core/notices' );

	const presets =
		blockName && blockPresets[ blockName ] ? blockPresets[ blockName ] : [];

	const applyPreset = ( preset ) => {
		if ( ! clientId ) {
			return;
		}

		updateBlockAttributes( clientId, preset.attributes );

		createNotice(
			'success',
			sprintf(
				/* translators: %s: preset name. */
				__( '%s preset applied.', 'blockwriter' ),
				preset.title,
			),
			{ type: 'snackbar' },
		);
	};

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ symbol }>
					{ __( 'BlockWriter Presets', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ symbol }
				title={ __( 'BlockWriter Presets', 'blockwriter' ) }
			>
				<div className="bw-block-presets">
					<p className="bw-block-presets__intro">
						{ __(
							'Apply a preset to the selected block. Presets change styling attributes only.',
							'blockwriter',
						) }
					</p>

					{ ! clientId && (
						<Notice status="info" isDismissible={ false }>
							{ __(
								'Select a block to see the presets available for it.',
								'blockwriter',
							) }
						</Notice>
					) }

					{ clientId && presets.length === 0 && (
						<Notice status="info" isDismissible={ false }>
							{ __(
								'No presets are available for this block yet.',
								'blockwriter',
							) }
						</Notice>
					) }

					{ clientId && presets.length > 0 && (
						<>
							{ blockTitle && (
								<p className="bw-block-presets__block">{ blockTitle }</p>
							) }

							<div className="bw-block-presets__list">
								{ presets.map( ( preset ) => (
									<Button
										key={ preset.name }
										className="bw-block-presets__item"
										variant="secondary"
										onClick={ () => applyPreset( preset ) }
									>
										{ preset.title }
										{ preset.description && (
											<span className="bw-block-presets__item-description">
												{ preset.description }
											</span>
										) }
									</Button>
								) ) }
							</div>
						</>
					) }
				</div>
			</PluginSidebar>
		</>
	);
}

/**
 * Editor plugin entry point. Registers the presets sidebar.
 *
 * @return {Element} The editor plugin UI.
 */
function BlockPresets() {
	// The sidebar component lives on `wp.editor` from WordPress 6.6 onward.
	// Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar ) {
		return null;
	}

	return <BlockPresetsPanel />;
}

registerPlugin( SIDEBAR_NAME, {
	render: BlockPresets,
} );
