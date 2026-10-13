/**
 * Front end behavior for the BW Off-canvas Drawer block.
 * The trigger stays hidden without JavaScript and the drawer opens with focus
 * management, Escape handling, and optional backdrop closing.
 */
( function () {
	const FOCUSABLE =
		'a[href], button:not([disabled]), input:not([disabled]), ' +
		'select:not([disabled]), textarea:not([disabled]), ' +
		'[tabindex]:not([tabindex="-1"])';

	function getFocusable( panel ) {
		return Array.from( panel.querySelectorAll( FOCUSABLE ) ).filter(
			( element ) => element.offsetParent !== null,
		);
	}

	function initDrawer( root ) {
		const trigger = root.querySelector( '.bw-offcanvas__trigger' );
		const overlay = root.querySelector( '.bw-offcanvas__overlay' );
		const panel = root.querySelector( '.bw-offcanvas__panel' );

		if ( ! trigger || ! overlay || ! panel ) {
			return;
		}

		const ownerDocument = panel.ownerDocument;
		const closeOnBackdrop = root.dataset.closeOnBackdrop !== 'false';
		let lastFocused = null;

		root.classList.add( 'bw-offcanvas--js' );

		if ( ! panel.id ) {
			panel.id =
				'bw-offcanvas-panel-' + Math.random().toString( 36 ).slice( 2, 8 );
		}

		trigger.setAttribute( 'aria-controls', panel.id );

		function onKeydown( event ) {
			if ( event.key === 'Escape' ) {
				event.preventDefault();
				close();
				return;
			}

			if ( event.key !== 'Tab' ) {
				return;
			}

			const focusable = getFocusable( panel );

			if ( focusable.length === 0 ) {
				event.preventDefault();
				panel.focus();
				return;
			}

			const first = focusable[ 0 ];
			const last = focusable[ focusable.length - 1 ];

			if ( event.shiftKey && ownerDocument.activeElement === first ) {
				event.preventDefault();
				last.focus();
			} else if ( ! event.shiftKey && ownerDocument.activeElement === last ) {
				event.preventDefault();
				first.focus();
			}
		}

		function open() {
			lastFocused = ownerDocument.activeElement;
			overlay.hidden = false;
			root.classList.add( 'bw-offcanvas--open' );
			trigger.setAttribute( 'aria-expanded', 'true' );
			ownerDocument.documentElement.classList.add( 'bw-offcanvas-lock' );
			ownerDocument.addEventListener( 'keydown', onKeydown );

			const focusable = getFocusable( panel );
			( focusable[ 0 ] || panel ).focus();
		}

		function close() {
			overlay.hidden = true;
			root.classList.remove( 'bw-offcanvas--open' );
			trigger.setAttribute( 'aria-expanded', 'false' );
			ownerDocument.documentElement.classList.remove( 'bw-offcanvas-lock' );
			ownerDocument.removeEventListener( 'keydown', onKeydown );

			if ( lastFocused ) {
				lastFocused.focus();
			}
		}

		trigger.addEventListener( 'click', open );

		const closeButton = root.querySelector( '.bw-offcanvas__close' );

		if ( closeButton ) {
			closeButton.addEventListener( 'click', close );
		}

		if ( closeOnBackdrop ) {
			overlay.addEventListener( 'click', function ( event ) {
				if ( event.target === overlay ) {
					close();
				}
			} );
		}
	}

	document
		.querySelectorAll( '.wp-block-blockwriter-offcanvas' )
		.forEach( initDrawer );
} )();
