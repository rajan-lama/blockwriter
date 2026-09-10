import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const GridSettingsPanel = ( { attributes, setAttributes } ) => {
	const { tagType, gridColumns, gridColumnGap, gridRowGap, minHeight } =
		attributes;

	return (
		<PanelBody
			title={ __( 'Grid Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'HTML Tag', 'blockwriter' ) }
				value={ tagType }
				options={ [
					{ label: 'Div', value: 'div' },
					{ label: 'Section', value: 'section' },
					{ label: 'Article', value: 'article' },
					{ label: 'Aside', value: 'aside' },
					{ label: 'Main', value: 'main' },
					{ label: 'Header', value: 'header' },
					{ label: 'Footer', value: 'footer' },
					{ label: 'Figure', value: 'figure' },
					{ label: 'Nav', value: 'nav' },
				] }
				onChange={ ( value ) => setAttributes( { tagType: value } ) }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Columns', 'blockwriter' ) }
				help={ __( 'Number of columns in the grid.', 'blockwriter' ) }
				value={ gridColumns }
				onChange={ ( value ) => setAttributes( { gridColumns: value } ) }
				min={ 1 }
				max={ 12 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 2 }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Column Gap', 'blockwriter' ) }
				value={ gridColumnGap }
				onChange={ ( value ) => setAttributes( { gridColumnGap: value } ) }
				min={ 0 }
				max={ 200 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 0 }
			/>

			<RangeControl
				__nextHasNoMarginBottom
				label={ __( 'Row Gap', 'blockwriter' ) }
				value={ gridRowGap }
				onChange={ ( value ) => setAttributes( { gridRowGap: value } ) }
				min={ 0 }
				max={ 200 }
				step={ 1 }
				allowReset
				resetFallbackValue={ 0 }
			/>

			<TextControl
				label={ __( 'Min Height', 'blockwriter' ) }
				help={ __( 'e.g. 300px or 30vh', 'blockwriter' ) }
				value={ minHeight }
				onChange={ ( value ) => setAttributes( { minHeight: value } ) }
			/>
		</PanelBody>
	);
};

export default GridSettingsPanel;
