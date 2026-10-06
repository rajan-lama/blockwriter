/**
 * Builds the inline styles for the social proof wrapper.
 *
 * @param {Object} attributes Block attributes.
 * @return {Object} Style object for the wrapper element.
 */
export const getSocialProofStyles = ( attributes ) => {
	const { starColor, emptyStarColor } = attributes;

	return {
		'--bw-social-proof-star': starColor || '#f59e0b',
		'--bw-social-proof-star-empty': emptyStarColor || '#e5e7eb',
	};
};

/**
 * Builds the class name for the social proof wrapper.
 *
 * @param {Object} attributes Block attributes.
 * @return {string|undefined} Class name string.
 */
export const getSocialProofClassName = ( attributes ) => {
	const { socialProofAlign, extraClass } = attributes;

	return (
		[
			'bw-social-proof',
			`bw-social-proof--${ socialProofAlign || 'center' }`,
			extraClass,
		]
			.filter( Boolean )
			.join( ' ' ) || undefined
	);
};
