/**
 * Front end slider behavior for the BW Testimonial Slider block.
 * Without JavaScript every testimonial is shown stacked vertically, which
 * keeps the content readable and avoids hiding slides from users.
 */
( function () {
	const REDUCED_MOTION = window.matchMedia(
		'(prefers-reduced-motion: reduce)',
	).matches;

	function initSlider( root ) {
		const slides = Array.from( root.querySelectorAll( '.bw-ts__slide' ) );
		const track = root.querySelector( '.bw-ts__track' );

		if ( slides.length < 2 || ! track ) {
			return;
		}

		const prev = root.querySelector( '.bw-ts__arrow--prev' );
		const next = root.querySelector( '.bw-ts__arrow--next' );
		const dots = Array.from( root.querySelectorAll( '.bw-ts__dot' ) );
		const autoplay = root.dataset.autoplay === 'true' && ! REDUCED_MOTION;
		const interval = parseInt( root.dataset.interval, 10 ) || 5000;

		let index = 0;
		let timer = null;

		root.classList.add( 'bw-ts--js' );

		function go( target ) {
			index = ( target + slides.length ) % slides.length;
			track.style.transform = 'translateX(-' + index * 100 + '%)';

			slides.forEach( ( slide, i ) => {
				const active = i === index;
				slide.classList.toggle( 'is-active', active );
				slide.setAttribute( 'aria-hidden', active ? 'false' : 'true' );

				if ( active ) {
					slide.removeAttribute( 'inert' );
				} else {
					slide.setAttribute( 'inert', '' );
				}
			} );

			dots.forEach( ( dot, i ) => {
				dot.classList.toggle( 'is-active', i === index );

				if ( i === index ) {
					dot.setAttribute( 'aria-current', 'true' );
				} else {
					dot.removeAttribute( 'aria-current' );
				}
			} );
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
				go( index + 1 );
			}, interval );
		}

		if ( prev ) {
			prev.addEventListener( 'click', function () {
				stop();
				go( index - 1 );
				start();
			} );
		}

		if ( next ) {
			next.addEventListener( 'click', function () {
				stop();
				go( index + 1 );
				start();
			} );
		}

		dots.forEach( function ( dot, i ) {
			dot.addEventListener( 'click', function () {
				stop();
				go( i );
				start();
			} );
		} );

		root.addEventListener( 'mouseenter', stop );
		root.addEventListener( 'mouseleave', start );
		root.addEventListener( 'focusin', stop );
		root.addEventListener( 'focusout', start );

		go( 0 );
		start();
	}

	document
		.querySelectorAll( '.wp-block-blockwriter-testimonial-slider' )
		.forEach( initSlider );
} )();
