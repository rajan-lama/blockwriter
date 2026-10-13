( function () {
	const DURATION = 1400;

	/**
	 * Format a number for display during the count-up animation.
	 *
	 * @param {number}  value    Current animated value.
	 * @param {number}  decimals Decimal places to keep.
	 * @param {boolean} grouped  Whether to use thousands grouping.
	 * @return {string} Formatted number string.
	 */
	const formatValue = ( value, decimals, grouped ) => {
		if ( decimals > 0 ) {
			return value.toFixed( decimals );
		}

		const rounded = Math.round( value );

		if ( grouped ) {
			return rounded.toLocaleString( 'en-US' );
		}

		return String( rounded );
	};

	/**
	 * Ease-out curve used for the animation.
	 *
	 * @param {number} progress Normalized progress between 0 and 1.
	 * @return {number} Eased progress value.
	 */
	const easeOutCubic = ( progress ) => 1 - Math.pow( 1 - progress, 3 );

	/**
	 * Animate a stat number from zero to its target value.
	 *
	 * @param {HTMLElement} numElement Element containing the target number.
	 */
	const runCountUp = ( numElement ) => {
		const raw = numElement.textContent || '';
		const target = parseFloat( raw.replace( /[^0-9.\-]/g, '' ) );

		if ( Number.isNaN( target ) ) {
			return;
		}

		const parts = raw.trim().split( '.' );
		const decimals = parts.length > 1 ? parts[ 1 ].length : 0;
		const grouped = raw.indexOf( ',' ) !== -1 && decimals === 0;
		const reducedMotion =
			window.matchMedia &&
			window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

		if ( reducedMotion ) {
			numElement.textContent = raw;
			return;
		}

		const startTime = performance.now();

		const tick = ( now ) => {
			const progress = Math.min( ( now - startTime ) / DURATION, 1 );
			const current = target * easeOutCubic( progress );

			numElement.textContent = formatValue( current, decimals, grouped );

			if ( progress < 1 ) {
				window.requestAnimationFrame( tick );
			}
		};

		window.requestAnimationFrame( tick );
	};

	/**
	 * Set up the count-up animation for a single stat block.
	 *
	 * @param {HTMLElement} stat The stat wrapper element.
	 */
	const initStat = ( stat ) => {
		if ( stat.getAttribute( 'data-bw-count' ) === 'false' ) {
			return;
		}

		const numElement = stat.querySelector( '.bw-stat-num' );

		if ( ! numElement ) {
			return;
		}

		if ( ! ( 'IntersectionObserver' in window ) ) {
			runCountUp( numElement );
			return;
		}

		const observer = new window.IntersectionObserver(
			( entries ) => {
				entries.forEach( ( entry ) => {
					if ( entry.isIntersecting ) {
						runCountUp( numElement );
						observer.disconnect();
					}
				} );
			},
			{ threshold: 0.3 },
		);

		observer.observe( stat );
	};

	document.querySelectorAll( '.wp-block-blockwriter-stat' ).forEach( initStat );
} )();
