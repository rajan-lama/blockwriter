import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { getDisplayValue, getStarFillPercent } from '../rating/helpers';
import Inspector from './inspector';
import Star from './star';
import { getSocialProofClassName, getSocialProofStyles } from './helpers';

import './editor.scss';

const ALLOWED_TYPES = [ 'image' ];

export default function Edit( { attributes, setAttributes } ) {
	const {
		heading,
		description,
		showRating,
		ratingValue,
		maxRating,
		reviewCount,
		reviewLabel,
		showLogos,
		logos,
		logoColumns,
		grayscale,
	} = attributes;

	const items = Array.isArray( logos ) ? logos : [];
	const starCount = Math.min(
		Math.max( parseInt( maxRating, 10 ) || 5, 1 ),
		10,
	);

	const ariaLabel = sprintf(
		/* translators: 1: rating value, 2: maximum rating. */
		__( 'Rated %1$s out of %2$s', 'blockwriter' ),
		getDisplayValue( ratingValue ),
		starCount,
	);

	const blockProps = useBlockProps( {
		id: attributes.htmlId || undefined,
		className: getSocialProofClassName( attributes ),
		style: getSocialProofStyles( attributes ),
	} );

	const setLogos = ( next ) => setAttributes( { logos: next } );

	const onAddLogo = ( media ) => {
		setLogos( [
			...items,
			{ url: media.url, id: media.id, alt: media.alt || '' },
		] );
	};

	const onReplaceLogo = ( index, media ) => {
		setLogos(
			items.map( ( item, itemIndex ) =>
				itemIndex === index
					? { url: media.url, id: media.id, alt: media.alt || '' }
					: item,
			),
		);
	};

	const onRemoveLogo = ( index ) => {
		setLogos( items.filter( ( _, itemIndex ) => itemIndex !== index ) );
	};

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<RichText
					tagName="h3"
					className="bw-social-proof__heading"
					value={ heading }
					onChange={ ( value ) => setAttributes( { heading: value } ) }
					placeholder={ __( 'Loved by thousands of teams', 'blockwriter' ) }
				/>

				{ showRating && (
					<div className="bw-social-proof__rating">
						<span
							className="bw-social-proof__stars"
							role="img"
							aria-label={ ariaLabel }
						>
							{ Array.from( { length: starCount } ).map( ( _, index ) => (
								<Star
									key={ index }
									percent={ getStarFillPercent( ratingValue, index ) }
								/>
							) ) }
						</span>
						<span className="bw-social-proof__score">
							{ getDisplayValue( ratingValue ) } / { starCount }
						</span>
						<span className="bw-social-proof__count">
							{ Number( reviewCount || 0 ).toLocaleString() } { reviewLabel }
						</span>
					</div>
				) }

				<RichText
					tagName="p"
					className="bw-social-proof__description"
					value={ description }
					onChange={ ( value ) => setAttributes( { description: value } ) }
					placeholder={ __( 'Add supporting copy (optional)', 'blockwriter' ) }
				/>

				{ showLogos && (
					<MediaUploadCheck>
						<div
							className={ `bw-social-proof__logos bw-social-proof__cols-${
								logoColumns || 4
							}${ grayscale ? '' : ' bw-social-proof__logos--color' }` }
						>
							{ items.map( ( item, index ) => (
								<div className="bw-social-proof__logo" key={ item.id || index }>
									<MediaUpload
										onSelect={ ( media ) => onReplaceLogo( index, media ) }
										allowedTypes={ ALLOWED_TYPES }
										value={ item.id }
										render={ ( { open } ) => (
											<button
												type="button"
												className="bw-social-proof__logo-btn"
												onClick={ open }
												aria-label={ __( 'Replace logo', 'blockwriter' ) }
											>
												<img
													src={ item.url }
													alt={ item.alt || '' }
													loading="lazy"
												/>
											</button>
										) }
									/>
									<Button
										variant="link"
										isDestructive
										isSmall
										onClick={ () => onRemoveLogo( index ) }
									>
										{ __( 'Remove', 'blockwriter' ) }
									</Button>
								</div>
							) ) }
							<MediaUpload
								onSelect={ onAddLogo }
								allowedTypes={ ALLOWED_TYPES }
								render={ ( { open } ) => (
									<Button
										variant="secondary"
										className="bw-social-proof__logo-add"
										onClick={ open }
									>
										{ __( 'Add Logo', 'blockwriter' ) }
									</Button>
								) }
							/>
						</div>
					</MediaUploadCheck>
				) }
			</div>
		</>
	);
}
