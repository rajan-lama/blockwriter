import { PanelBody } from '@wordpress/components';
import { sprintf, __ } from '@wordpress/i18n';

const TabsSettingsPanel = ( { attributes } ) => {
	const items = Array.isArray( attributes.tabItems ) ? attributes.tabItems : [];

	return (
		<PanelBody
			title={ __( 'Tabs Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<p>
				{ __(
					'Add and remove tabs from the block toolbar area, then edit the label and panel content of each tab directly in the editor.',
					'blockwriter',
				) }
			</p>
			<p>
				{ sprintf(
					/* translators: %d: number of tabs in the block. */
					__( 'Total tabs: %d', 'blockwriter' ),
					items.length,
				) }
			</p>
		</PanelBody>
	);
};

export default TabsSettingsPanel;
