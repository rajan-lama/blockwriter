import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';
import { getDisplayValue, getStarFillPercent } from '../rating/helpers';
import Star from './star';
import { getSocialProofClassName, getSocialProofStyles } from './helpers';

import './style.scss';

export default function save( { attributes } ) {
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
		htmlId,
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

	const blockProps = useBlockProps.save( {
		id: htmlId || undefined,
		className: getSocialProofClassName( attributes ),
		style: getSocialProofStyles( attributes ),
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="h3"
				className="bw-social-proof__heading"
				value={ heading }
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

			<RichText.Content
				tagName="p"
				className="bw-social-proof__description"
				value={ description }
			/>

			{ showLogos && (
				<div
					className={ `bw-social-proof__logos bw-social-proof__cols-${
						logoColumns || 4
					}${ grayscale ? '' : ' bw-social-proof__logos--color' }` }
				>
					{ items.map( ( item, index ) => (
						<div className="bw-social-proof__logo" key={ item.id || index }>
							<img src={ item.url } alt={ item.alt || '' } loading="lazy" />
						</div>
					) ) }
				</div>
			) }
		</div>
	);
}
