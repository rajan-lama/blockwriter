/**
 * Front end behavior for the Back To Top block.
 * Without JavaScript the button stays hidden, so there is no dead control.
 */
( function () {
	const REDUCED_MOTION = window.matchMedia(
		'(prefers-reduced-motion: reduce)',
	).matches;

	function initBackToTop( root ) {
		const button = root.querySelector( '.bw-btt__button' );

		if ( ! button ) {
			return;
		}

		const showAfter = parseInt( root.dataset.showAfter, 10 ) || 0;
		const smooth = root.dataset.smooth !== 'false' && ! REDUCED_MOTION;

		let visible = false;

		root.classList.add( 'bw-btt--js' );

		function onScroll() {
			const shouldShow = window.scrollY > showAfter;

			if ( shouldShow !== visible ) {
				visible = shouldShow;
				root.classList.toggle( 'bw-btt--visible', shouldShow );
			}
		}

		button.addEventListener( 'click', function () {
			window.scrollTo( {
				top: 0,
				behavior: smooth ? 'smooth' : 'auto',
			} );
		} );

		window.addEventListener( 'scroll', onScroll, { passive: true } );
		onScroll();
	}

	document
		.querySelectorAll( '.wp-block-blockwriter-back-to-top' )
		.forEach( initBackToTop );
} )();
