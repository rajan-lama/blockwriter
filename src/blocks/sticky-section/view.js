/**
 * Front end behavior for the BW Sticky Section block.
 * Adds a shadow once the section is stuck to the top of the viewport.
 */
( function () {
	function initSticky( root ) {
		if ( root.dataset.shadow !== 'true' ) {
			return;
		}

		const offset = parseInt( root.dataset.offset, 10 ) || 0;

		let stuck = false;
		let ticking = false;

		function update() {
			const isStuck = root.getBoundingClientRect().top <= offset + 0.5;

			if ( isStuck !== stuck ) {
				stuck = isStuck;
				root.classList.toggle( 'is-stuck', isStuck );
			}

			ticking = false;
		}

		function onScroll() {
			if ( ! ticking ) {
				ticking = true;
				window.requestAnimationFrame( update );
			}
		}

		window.addEventListener( 'scroll', onScroll, { passive: true } );
		window.addEventListener( 'resize', onScroll, { passive: true } );

		update();
	}

	document
		.querySelectorAll( '.wp-block-blockwriter-sticky-section' )
		.forEach( initSticky );
} )();
