/**
 * Builds the inline styles for the review wrapper.
 *
 * @param {Object} attributes Block attributes.
 * @return {Object} Style object for the review element.
 */
export const getReviewStyles = ( attributes ) => {
	const { starColor, emptyStarColor } = attributes;

	return {
		'--bw-review-star': starColor || '#f59e0b',
		'--bw-review-star-empty': emptyStarColor || '#e5e7eb',
	};
};

/**
 * Builds the class name for the review wrapper.
 *
 * @param {Object} attributes Block attributes.
 * @return {string|undefined} Class name string.
 */
export const getReviewClassName = ( attributes ) => {
	const { reviewAlign, extraClass } = attributes;

	return (
		[ 'bw-review', `bw-review--${ reviewAlign || 'left' }`, extraClass ]
			.filter( Boolean )
			.join( ' ' ) || undefined
	);
};
