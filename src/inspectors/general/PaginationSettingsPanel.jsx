import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PaginationSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		showPrevNext,
		prevText,
		nextText,
		showNumbers,
		midSize,
		endSize,
		justify,
	} = attributes;

	return (
		<PanelBody
			title={ __( 'Pagination Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Show previous and next', 'blockwriter' ) }
				checked={ !! showPrevNext }
				onChange={ ( value ) => setAttributes( { showPrevNext: value } ) }
			/>

			{ showPrevNext && (
				<>
					<TextControl
						label={ __( 'Previous label', 'blockwriter' ) }
						help={ __(
							'Leave empty to use the default label.',
							'blockwriter',
						) }
						value={ prevText }
						onChange={ ( value ) => setAttributes( { prevText: value } ) }
					/>

					<TextControl
						label={ __( 'Next label', 'blockwriter' ) }
						help={ __(
							'Leave empty to use the default label.',
							'blockwriter',
						) }
						value={ nextText }
						onChange={ ( value ) => setAttributes( { nextText: value } ) }
					/>
				</>
			) }

			<ToggleControl
				label={ __( 'Show page numbers', 'blockwriter' ) }
				checked={ !! showNumbers }
				onChange={ ( value ) => setAttributes( { showNumbers: value } ) }
			/>

			{ showNumbers && (
				<>
					<RangeControl
						label={ __( 'Links beside current page', 'blockwriter' ) }
						value={ midSize }
						min={ 0 }
						max={ 3 }
						step={ 1 }
						onChange={ ( value ) => setAttributes( { midSize: value } ) }
					/>

					<RangeControl
						label={ __( 'Links at each end', 'blockwriter' ) }
						value={ endSize }
						min={ 0 }
						max={ 3 }
						step={ 1 }
						onChange={ ( value ) => setAttributes( { endSize: value } ) }
					/>
				</>
			) }

			<SelectControl
				label={ __( 'Alignment', 'blockwriter' ) }
				value={ justify }
				options={ [
					{ label: __( 'Left', 'blockwriter' ), value: 'left' },
					{ label: __( 'Center', 'blockwriter' ), value: 'center' },
					{ label: __( 'Right', 'blockwriter' ), value: 'right' },
				] }
				onChange={ ( value ) => setAttributes( { justify: value } ) }
			/>
		</PanelBody>
	);
};

export default PaginationSettingsPanel;
