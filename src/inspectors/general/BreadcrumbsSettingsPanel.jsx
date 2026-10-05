import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const BreadcrumbsSettingsPanel = ( { attributes, setAttributes } ) => {
	const { separator, showHome, homeLabel, showCurrent } = attributes;

	return (
		<PanelBody
			title={ __( 'Breadcrumbs Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Separator', 'blockwriter' ) }
				value={ separator }
				options={ [
					{ label: __( 'Chevron (›)', 'blockwriter' ), value: '›' },
					{ label: __( 'Slash (/)', 'blockwriter' ), value: '/' },
					{ label: __( 'Greater than (>)', 'blockwriter' ), value: '>' },
					{ label: __( 'Guillemet (»)', 'blockwriter' ), value: '»' },
				] }
				onChange={ ( value ) => setAttributes( { separator: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show home link', 'blockwriter' ) }
				checked={ !! showHome }
				onChange={ ( value ) => setAttributes( { showHome: value } ) }
			/>

			{ showHome && (
				<TextControl
					label={ __( 'Home label', 'blockwriter' ) }
					value={ homeLabel }
					onChange={ ( value ) => setAttributes( { homeLabel: value } ) }
					help={ __( 'Leave empty to use the site title.', 'blockwriter' ) }
				/>
			) }

			<ToggleControl
				label={ __( 'Show current page', 'blockwriter' ) }
				help={ __(
					'The last item is not linked and is marked as the current page.',
					'blockwriter',
				) }
				checked={ !! showCurrent }
				onChange={ ( value ) => setAttributes( { showCurrent: value } ) }
			/>
		</PanelBody>
	);
};

export default BreadcrumbsSettingsPanel;
