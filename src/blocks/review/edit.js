import { useBlockProps, RichText } from '@wordpress/block-editor';
import { sprintf, __ } from '@wordpress/i18n';
import { getDisplayValue, getStarFillPercent } from '../rating/helpers';
import Inspector from './inspector';
import Star from './star';
import { getReviewClassName, getReviewStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		ratingValue,
		maxRating,
		quote,
		authorName,
		authorRole,
		avatarUrl,
		avatarAlt,
		verified,
		source,
		reviewDate,
		showRating,
		showQuoteMark,
	} = attributes;

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
		className: getReviewClassName( attributes ),
		style: getReviewStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				{ showRating && (
					<div
						className="bw-review__rating"
						role="img"
						aria-label={ ariaLabel }
					>
						<span className="bw-review__stars">
							{ Array.from( { length: starCount } ).map( ( _, index ) => (
								<Star
									key={ index }
									percent={ getStarFillPercent( ratingValue, index ) }
								/>
							) ) }
						</span>
						{ verified && (
							<span className="bw-review__verified">
								<span aria-hidden="true">✓</span>{ ' ' }
								{ __( 'Verified', 'blockwriter' ) }
							</span>
						) }
					</div>
				) }

				{ showQuoteMark && (
					<span className="bw-review__mark" aria-hidden="true">
						”
					</span>
				) }

				<RichText
					tagName="p"
					className="bw-review__quote"
					value={ quote }
					onChange={ ( value ) => setAttributes( { quote: value } ) }
					placeholder={ __( 'Write a review…', 'blockwriter' ) }
				/>

				<footer className="bw-review__meta">
					{ avatarUrl && (
						<img
							className="bw-review__avatar"
							src={ avatarUrl }
							alt={ avatarAlt || '' }
							loading="lazy"
						/>
					) }
					<div className="bw-review__meta-text">
						<RichText
							tagName="div"
							className="bw-review__author"
							value={ authorName }
							onChange={ ( value ) => setAttributes( { authorName: value } ) }
							placeholder={ __( 'Reviewer name', 'blockwriter' ) }
						/>
						<RichText
							tagName="div"
							className="bw-review__role"
							value={ authorRole }
							onChange={ ( value ) => setAttributes( { authorRole: value } ) }
							placeholder={ __( 'Role, company', 'blockwriter' ) }
						/>
					</div>
				</footer>

				{ ( source || reviewDate ) && (
					<div className="bw-review__source">
						{ source && (
							<span className="bw-review__source-name">{ source }</span>
						) }
						{ reviewDate && (
							<span className="bw-review__date">{ reviewDate }</span>
						) }
					</div>
				) }
			</div>
		</>
	);
}
