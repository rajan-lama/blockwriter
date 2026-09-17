/**
 * Front end carousel behavior for the BW Post Carousel block.
 *
 * The track is a horizontally scrollable list, so every slide stays reachable
 * without JavaScript. When JavaScript is available the controls are revealed
 * and scroll position, dots, and arrows are kept in sync.
 */
( function () {
	const REDUCED_MOTION = window.matchMedia(
		'(prefers-reduced-motion: reduce)',
	).matches;

	function initCarousel( root ) {
		const viewport = root.querySelector( '.bw-post-carousel__viewport' );
		const slides = Array.from(
			root.querySelectorAll( '.bw-post-carousel__slide' ),
		);

		if ( ! viewport || slides.length < 2 ) {
			return;
		}

		const columns = parseInt( root.dataset.columns, 10 ) || 1;
		const pageCount = Math.ceil( slides.length / columns );

		if ( pageCount < 2 ) {
			return;
		}

		const prev = root.querySelector( '.bw-post-carousel__arrow--prev' );
		const next = root.querySelector( '.bw-post-carousel__arrow--next' );
		const dots = Array.from(
			root.querySelectorAll( '.bw-post-carousel__dot' ),
		);
		const autoplay = root.dataset.autoplay === 'true' && ! REDUCED_MOTION;
		const interval = parseInt( root.dataset.interval, 10 ) || 5000;

		let page = 0;
		let timer = null;

		root.classList.add( 'bw-post-carousel--js' );

		function slideForPage( target ) {
			return slides[ Math.min( target * columns, slides.length - 1 ) ];
		}

		function setPage( target ) {
			page = Math.max( 0, Math.min( target, pageCount - 1 ) );

			viewport.scrollTo( {
				left: slideForPage( page ).offsetLeft,
				behavior: REDUCED_MOTION ? 'auto' : 'smooth',
			} );

			syncControls();
		}

		function currentPage() {
			const middle = viewport.scrollLeft + viewport.clientWidth / 2;
			let nearest = 0;

			slides.forEach( function ( slide, index ) {
				if ( slide.offsetLeft <= middle ) {
					nearest = index;
				}
			} );

			return Math.min( Math.floor( nearest / columns ), pageCount - 1 );
		}

		function syncControls() {
			dots.forEach( function ( dot, index ) {
				dot.classList.toggle( 'is-active', index === page );

				if ( index === page ) {
					dot.setAttribute( 'aria-current', 'true' );
				} else {
					dot.removeAttribute( 'aria-current' );
				}
			} );

			if ( prev ) {
				prev.disabled = page === 0;
			}

			if ( next ) {
				next.disabled = page === pageCount - 1;
			}
		}

		function stop() {
			if ( timer ) {
				window.clearInterval( timer );
				timer = null;
			}
		}

		function start() {
			if ( ! autoplay ) {
				return;
			}

			stop();
			timer = window.setInterval( function () {
				setPage( page === pageCount - 1 ? 0 : page + 1 );
			}, interval );
		}

		if ( prev ) {
			prev.addEventListener( 'click', function () {
				stop();
				setPage( page - 1 );
				start();
			} );
		}

		if ( next ) {
			next.addEventListener( 'click', function () {
				stop();
				setPage( page + 1 );
				start();
			} );
		}

		dots.forEach( function ( dot, index ) {
			dot.addEventListener( 'click', function () {
				stop();
				setPage( index );
				start();
			} );
		} );

		let frame = null;

		viewport.addEventListener( 'scroll', function () {
			if ( frame ) {
				return;
			}

			frame = window.requestAnimationFrame( function () {
				frame = null;
				page = currentPage();
				syncControls();
			} );
		} );

		root.addEventListener( 'mouseenter', stop );
		root.addEventListener( 'mouseleave', start );
		root.addEventListener( 'focusin', stop );
		root.addEventListener( 'focusout', start );

		syncControls();
		start();
	}

	document
		.querySelectorAll( '.wp-block-blockwriter-post-carousel' )
		.forEach( initCarousel );
} )();
