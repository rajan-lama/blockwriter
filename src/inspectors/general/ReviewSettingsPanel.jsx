import {
	Button,
	ButtonGroup,
	ColorPalette,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const STAR_COLORS = [
	{ name: __( 'Amber', 'blockwriter' ), color: '#f59e0b' },
	{ name: __( 'Yellow', 'blockwriter' ), color: '#eab308' },
	{ name: __( 'Orange', 'blockwriter' ), color: '#f97316' },
	{ name: __( 'Rose', 'blockwriter' ), color: '#e11d48' },
	{ name: __( 'Indigo', 'blockwriter' ), color: '#4f46e5' },
];

const EMPTY_COLORS = [
	{ name: __( 'Light Gray', 'blockwriter' ), color: '#e5e7eb' },
	{ name: __( 'Gray', 'blockwriter' ), color: '#d1d5db' },
	{ name: __( 'Slate', 'blockwriter' ), color: '#cbd5e1' },
];

const ReviewSettingsPanel = ( { attributes, setAttributes } ) => {
	const {
		ratingValue,
		maxRating,
		starColor,
		emptyStarColor,
		verified,
		source,
		reviewDate,
		showRating,
		showQuoteMark,
		reviewAlign,
		avatarUrl,
		avatarId,
	} = attributes;

	const alignmentOptions = [
		{ label: __( 'Left', 'blockwriter' ), value: 'left' },
		{ label: __( 'Center', 'blockwriter' ), value: 'center' },
		{ label: __( 'Right', 'blockwriter' ), value: 'right' },
	];

	const onSelectAvatar = ( media ) => {
		setAttributes( {
			avatarUrl: media.url,
			avatarId: media.id,
			avatarAlt: media.alt || '',
		} );
	};

	const onRemoveAvatar = () => {
		setAttributes( {
			avatarUrl: '',
			avatarId: 0,
			avatarAlt: '',
		} );
	};

	return (
		<PanelBody
			title={ __( 'Review Settings', 'blockwriter' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Show rating', 'blockwriter' ) }
				checked={ !! showRating }
				onChange={ ( value ) => setAttributes( { showRating: value } ) }
			/>

			{ showRating && (
				<>
					<RangeControl
						__nextHasNoMarginBottom
						label={ __( 'Rating value', 'blockwriter' ) }
						value={ ratingValue || 0 }
						onChange={ ( value ) =>
							setAttributes( { ratingValue: value || 0 } )
						}
						min={ 0 }
						max={ parseInt( maxRating, 10 ) || 5 }
						step={ 0.5 }
					/>

					<RangeControl
						__nextHasNoMarginBottom
						label={ __( 'Number of stars', 'blockwriter' ) }
						value={ parseInt( maxRating, 10 ) || 5 }
						onChange={ ( value ) => setAttributes( { maxRating: value || 5 } ) }
						min={ 1 }
						max={ 10 }
						step={ 1 }
					/>

					<p>{ __( 'Star color', 'blockwriter' ) }</p>
					<ColorPalette
						asButtons="true"
						colors={ STAR_COLORS }
						value={ starColor }
						onChange={ ( color ) => setAttributes( { starColor: color } ) }
						headingLevel="3"
					/>

					<p>{ __( 'Empty star color', 'blockwriter' ) }</p>
					<ColorPalette
						asButtons="true"
						colors={ EMPTY_COLORS }
						value={ emptyStarColor }
						onChange={ ( color ) => setAttributes( { emptyStarColor: color } ) }
						headingLevel="3"
					/>
				</>
			) }

			<ToggleControl
				label={ __( 'Show verified badge', 'blockwriter' ) }
				checked={ !! verified }
				onChange={ ( value ) => setAttributes( { verified: value } ) }
			/>

			<ToggleControl
				label={ __( 'Show decorative quote mark', 'blockwriter' ) }
				checked={ !! showQuoteMark }
				onChange={ ( value ) => setAttributes( { showQuoteMark: value } ) }
			/>

			<TextControl
				label={ __( 'Source', 'blockwriter' ) }
				value={ source }
				onChange={ ( value ) => setAttributes( { source: value } ) }
				help={ __( 'For example Google, Trustpilot, or Yelp.', 'blockwriter' ) }
			/>

			<TextControl
				label={ __( 'Date', 'blockwriter' ) }
				value={ reviewDate }
				onChange={ ( value ) => setAttributes( { reviewDate: value } ) }
				placeholder={ __( 'March 2026', 'blockwriter' ) }
			/>

			<p>{ __( 'Alignment', 'blockwriter' ) }</p>
			<ButtonGroup aria-label={ __( 'Alignment', 'blockwriter' ) }>
				{ alignmentOptions.map( ( option ) => (
					<Button
						key={ option.value }
						variant="secondary"
						isSmall
						onClick={ () => setAttributes( { reviewAlign: option.value } ) }
						isPressed={ reviewAlign === option.value }
					>
						{ option.label }
					</Button>
				) ) }
			</ButtonGroup>

			{ avatarUrl ? (
				<Button variant="link" isDestructive onClick={ onRemoveAvatar }>
					{ __( 'Remove avatar', 'blockwriter' ) }
				</Button>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectAvatar }
						allowedTypes={ [ 'image' ] }
						value={ avatarId }
						render={ ( { open } ) => (
							<Button variant="secondary" onClick={ open }>
								{ __( 'Add avatar', 'blockwriter' ) }
							</Button>
						) }
					/>
				</MediaUploadCheck>
			) }
		</PanelBody>
	);
};

export default ReviewSettingsPanel;
