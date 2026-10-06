const STAR_PATH =
	'M12 2l2.9 6.26L21.5 9.27l-4.75 4.42L18.18 20 12 16.5 5.82 20l1.43-6.31L2.5 9.27l6.6-1.01L12 2z';

/**
 * A single social proof star with partial fill support.
 *
 * @param {Object} props         Component props.
 * @param {number} props.percent Fill percentage between 0 and 100.
 * @return {Element} Star element.
 */
export default function Star( { percent } ) {
	return (
		<span className="bw-social-proof__star" aria-hidden="true">
			<svg
				className="bw-social-proof__icon bw-social-proof__icon--empty"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				focusable="false"
			>
				<path d={ STAR_PATH }></path>
			</svg>
			<span
				className="bw-social-proof__fill"
				style={ { width: `${ percent }%` } }
			>
				<svg
					className="bw-social-proof__icon bw-social-proof__icon--filled"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
				>
					<path d={ STAR_PATH }></path>
				</svg>
			</span>
		</span>
	);
}
