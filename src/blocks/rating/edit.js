import { useBlockProps, RichText } from '@wordpress/block-editor';
import { sprintf, __ } from '@wordpress/i18n';

import Inspector from './inspector';
import Star from './star';
import {
	getDisplayValue,
	getRatingClassName,
	getRatingStyles,
	getStarFillPercent,
} from './helpers';

import './editor.scss';

const MIN_STARS = 1;
const MAX_STARS = 10;

export default function Edit( { attributes, setAttributes } ) {
	const { ratingValue, maxRating, showValue, ratingLabel } = attributes;

	const starCount = Math.min(
		Math.max( parseInt( maxRating, 10 ) || 5, MIN_STARS ),
		MAX_STARS,
	);

	const ariaLabel = sprintf(
		/* translators: 1: rating value, 2: maximum rating. */
		__( 'Rated %1$s out of %2$s', 'blockwriter' ),
		getDisplayValue( ratingValue ),
		starCount,
	);

	const blockProps = useBlockProps( {
		id: attributes.htmlId || undefined,
		className: getRatingClassName( attributes ),
		style: getRatingStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps } role="img" aria-label={ ariaLabel }>
				<span className="bw-rating__stars">
					{ Array.from( { length: starCount } ).map( ( _, index ) => (
						<Star
							key={ index }
							percent={ getStarFillPercent( ratingValue, index ) }
						/>
					) ) }
				</span>
				{ showValue && (
					<span className="bw-rating__value">
						{ getDisplayValue( ratingValue ) }
					</span>
				) }
				<RichText
					tagName="span"
					className="bw-rating__label"
					value={ ratingLabel }
					onChange={ ( value ) => setAttributes( { ratingLabel: value } ) }
					placeholder={ __( 'Based on 120 reviews', 'blockwriter' ) }
				/>
			</div>
		</>
	);
}
