/**
 * BlockWriter global style presets.
 *
 * Registers a read-only editor sidebar that lists the global style presets
 * made available by WordPress and the active theme: color palettes, gradients,
 * font sizes, font families, and spacing sizes. Values and slugs can be copied
 * for use in block settings. The panel never writes to the site.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { Button, Notice } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { styles } from '@wordpress/icons';

import './global-presets.scss';

const SIDEBAR_NAME = 'blockwriter-global-styles';

/**
 * Coerces a value into an array.
 *
 * @param {*} value Value to check.
 *
 * @return {Array} The value when it is an array, otherwise an empty array.
 */
function asArray( value ) {
	return Array.isArray( value ) ? value : [];
}

/**
 * Normalizes the color settings into groups of palette colors.
 *
 * WordPress exposes grouped palettes in `color.palettes` on newer versions and
 * a flat `color.palette` on older versions. Both shapes are supported.
 *
 * @param {Object} color Color settings.
 *
 * @return {Array} Array of `{ label, colors }` groups.
 */
function getColorGroups( color ) {
	const palettes = asArray( color.palettes );

	if ( palettes.length ) {
		return palettes
			.map( ( palette ) => ( {
				label: palette.name || __( 'Theme', 'blockwriter' ),
				colors: asArray( palette.colors ),
			} ) )
			.filter( ( group ) => group.colors.length );
	}

	const colors = asArray( color.palette );

	return colors.length
		? [ { label: __( 'Theme', 'blockwriter' ), colors } ]
		: [];
}

/**
 * Builds a stable React key for a preset item.
 *
 * @param {Object} item Preset item.
 *
 * @return {string} A key.
 */
function itemKey( item ) {
	return (
		item.slug ||
		item.name ||
		item.color ||
		item.gradient ||
		item.size ||
		item.fontFamily ||
		''
	);
}

/**
 * Copies a value to the clipboard when the browser allows it.
 *
 * @param {string} value Value to copy.
 *
 * @return {Promise<boolean>} Whether the value was copied.
 */
async function copyText( value ) {
	const clipboard =
		typeof window !== 'undefined' && window.navigator
			? window.navigator.clipboard
			: null;

	if ( clipboard && typeof clipboard.writeText === 'function' ) {
		await clipboard.writeText( value );
		return true;
	}

	return false;
}

/**
 * A small copy button for a preset value.
 *
 * @param {Object}   props        Component props.
 * @param {string}   props.value  Value to copy.
 * @param {string}   props.label  Accessible label.
 * @param {Function} props.onCopy Copy handler.
 *
 * @return {Element} The copy button.
 */
function CopyButton( { value, label, onCopy } ) {
	return (
		<Button
			className="bw-global-presets__copy"
			variant="tertiary"
			isSmall
			onClick={ () => onCopy( value ) }
			aria-label={ label }
		>
			{ __( 'Copy', 'blockwriter' ) }
		</Button>
	);
}

/**
 * A value line rendered in a monospace style.
 *
 * @param {Object} props       Component props.
 * @param {string} props.value Value to display.
 *
 * @return {Element} The value element.
 */
function PresetValue( { value } ) {
	return <code className="bw-global-presets__value">{ value }</code>;
}

/**
 * The global presets sidebar content.
 *
 * @return {Element} The presets list.
 */
function GlobalPresetsPanel() {
	const { colorGroups, gradients, fontSizes, fontFamilies, spacingSizes } =
		useSelect( ( select ) => {
			const settings = select( 'core/block-editor' ).getSettings();
			const color = settings.color || {};
			const typography = settings.typography || {};
			const spacing = settings.spacing || {};

			return {
				colorGroups: getColorGroups( color ),
				gradients: asArray( color.gradients ),
				fontSizes: asArray( typography.fontSizes ),
				fontFamilies: asArray( typography.fontFamilies ),
				spacingSizes: asArray( spacing.spacingSizes ),
			};
		}, [] );

	const { createNotice } = useDispatch( 'core/notices' );

	const handleCopy = async ( value ) => {
		try {
			const copied = await copyText( value );

			createNotice(
				copied ? 'success' : 'warning',
				copied
					? __( 'Copied to clipboard.', 'blockwriter' )
					: __( 'Copying is not available in this browser.', 'blockwriter' ),
				{ type: 'snackbar' },
			);
		} catch ( error ) {
			createNotice(
				'error',
				__( 'Could not copy to clipboard.', 'blockwriter' ),
				{ type: 'snackbar' },
			);
		}
	};

	const hasPresets =
		colorGroups.length > 0 ||
		gradients.length > 0 ||
		fontSizes.length > 0 ||
		fontFamilies.length > 0 ||
		spacingSizes.length > 0;

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ styles }>
					{ __( 'BlockWriter Global Styles', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ styles }
				title={ __( 'BlockWriter Global Styles', 'blockwriter' ) }
			>
				<div className="bw-global-presets">
					<p className="bw-global-presets__intro">
						{ __(
							'Global presets defined by WordPress and the active theme. Copy a value or slug to use it in your blocks.',
							'blockwriter',
						) }
					</p>

					{ ! hasPresets && (
						<Notice status="info" isDismissible={ false }>
							{ __(
								'No global style presets are available for this site.',
								'blockwriter',
							) }
						</Notice>
					) }

					{ colorGroups.length > 0 && (
						<section className="bw-global-presets__section">
							<h3 className="bw-global-presets__section-title">
								{ __( 'Colors', 'blockwriter' ) }
							</h3>

							{ colorGroups.map( ( group ) => (
								<div key={ group.label } className="bw-global-presets__group">
									<h4 className="bw-global-presets__group-title">
										{ group.label }
									</h4>

									<ul className="bw-global-presets__items">
										{ group.colors.map( ( item ) => (
											<li
												key={ itemKey( item ) }
												className="bw-global-presets__item"
											>
												<span
													className="bw-global-presets__swatch"
													style={ {
														backgroundColor: item.color,
													} }
													aria-hidden="true"
												/>
												<span className="bw-global-presets__item-body">
													<span className="bw-global-presets__item-name">
														{ item.name || item.slug }
													</span>
													<PresetValue value={ item.color } />
													{ item.slug && (
														<code className="bw-global-presets__slug">
															{ item.slug }
														</code>
													) }
												</span>
												<CopyButton
													value={ item.color }
													label={ sprintf(
														/* translators: %s: preset name. */
														__( 'Copy %s', 'blockwriter' ),
														item.name || item.slug,
													) }
													onCopy={ handleCopy }
												/>
											</li>
										) ) }
									</ul>
								</div>
							) ) }
						</section>
					) }

					{ gradients.length > 0 && (
						<section className="bw-global-presets__section">
							<h3 className="bw-global-presets__section-title">
								{ __( 'Gradients', 'blockwriter' ) }
							</h3>

							<ul className="bw-global-presets__items">
								{ gradients.map( ( item ) => (
									<li
										key={ itemKey( item ) }
										className="bw-global-presets__item"
									>
										<span
											className="bw-global-presets__swatch"
											style={ { backgroundImage: item.gradient } }
											aria-hidden="true"
										/>
										<span className="bw-global-presets__item-body">
											<span className="bw-global-presets__item-name">
												{ item.name || item.slug }
											</span>
											<PresetValue value={ item.gradient } />
										</span>
										<CopyButton
											value={ item.gradient }
											label={ sprintf(
												/* translators: %s: preset name. */
												__( 'Copy %s', 'blockwriter' ),
												item.name || item.slug,
											) }
											onCopy={ handleCopy }
										/>
									</li>
								) ) }
							</ul>
						</section>
					) }

					{ fontSizes.length > 0 && (
						<section className="bw-global-presets__section">
							<h3 className="bw-global-presets__section-title">
								{ __( 'Font sizes', 'blockwriter' ) }
							</h3>

							<ul className="bw-global-presets__items">
								{ fontSizes.map( ( item ) => (
									<li
										key={ itemKey( item ) }
										className="bw-global-presets__item"
									>
										<span className="bw-global-presets__item-body">
											<span className="bw-global-presets__item-name">
												{ item.name || item.slug }
											</span>
											<PresetValue value={ item.size } />
											{ item.slug && (
												<code className="bw-global-presets__slug">
													{ item.slug }
												</code>
											) }
										</span>
										<CopyButton
											value={ item.size }
											label={ sprintf(
												/* translators: %s: preset name. */
												__( 'Copy %s', 'blockwriter' ),
												item.name || item.slug,
											) }
											onCopy={ handleCopy }
										/>
									</li>
								) ) }
							</ul>
						</section>
					) }

					{ fontFamilies.length > 0 && (
						<section className="bw-global-presets__section">
							<h3 className="bw-global-presets__section-title">
								{ __( 'Font families', 'blockwriter' ) }
							</h3>

							<ul className="bw-global-presets__items">
								{ fontFamilies.map( ( item ) => (
									<li
										key={ itemKey( item ) }
										className="bw-global-presets__item"
									>
										<span className="bw-global-presets__item-body">
											<span className="bw-global-presets__item-name">
												{ item.name || item.slug }
											</span>
											<PresetValue value={ item.fontFamily } />
										</span>
										<CopyButton
											value={ item.fontFamily }
											label={ sprintf(
												/* translators: %s: preset name. */
												__( 'Copy %s', 'blockwriter' ),
												item.name || item.slug,
											) }
											onCopy={ handleCopy }
										/>
									</li>
								) ) }
							</ul>
						</section>
					) }

					{ spacingSizes.length > 0 && (
						<section className="bw-global-presets__section">
							<h3 className="bw-global-presets__section-title">
								{ __( 'Spacing sizes', 'blockwriter' ) }
							</h3>

							<ul className="bw-global-presets__items">
								{ spacingSizes.map( ( item ) => (
									<li
										key={ itemKey( item ) }
										className="bw-global-presets__item"
									>
										<span className="bw-global-presets__item-body">
											<span className="bw-global-presets__item-name">
												{ item.name || item.slug }
											</span>
											<PresetValue value={ item.size } />
											{ item.slug && (
												<code className="bw-global-presets__slug">
													{ item.slug }
												</code>
											) }
										</span>
										<CopyButton
											value={ item.size }
											label={ sprintf(
												/* translators: %s: preset name. */
												__( 'Copy %s', 'blockwriter' ),
												item.name || item.slug,
											) }
											onCopy={ handleCopy }
										/>
									</li>
								) ) }
							</ul>
						</section>
					) }
				</div>
			</PluginSidebar>
		</>
	);
}

/**
 * Editor plugin entry point. Registers the global styles sidebar.
 *
 * @return {Element} The editor plugin UI.
 */
function GlobalPresets() {
	// The sidebar component lives on `wp.editor` from WordPress 6.6 onward.
	// Skip the UI instead of crashing the editor on older versions.
	if ( ! PluginSidebar ) {
		return null;
	}

	return <GlobalPresetsPanel />;
}

registerPlugin( SIDEBAR_NAME, {
	render: GlobalPresets,
} );
