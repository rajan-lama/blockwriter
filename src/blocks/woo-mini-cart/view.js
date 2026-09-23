/**
 * Front end behavior for the BW Mini Cart block.
 * The panel stays visible without JavaScript. When JavaScript is available the
 * toggle collapses or expands the cart contents and keeps the cart in sync
 * through WooCommerce's cart fragments (widget_shopping_cart_content).
 */
( function () {
	function initMiniCart( root ) {
		const toggle = root.querySelector( '.bw-woo-mini-cart__toggle' );

		if ( ! toggle ) {
			return;
		}

		const openByDefault = root.dataset.openByDefault === 'true';

		root.classList.add( 'bw-woo-mini-cart--enhanced' );

		function setOpen( open ) {
			root.classList.toggle( 'bw-woo-mini-cart--open', open );
			toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		}

		setOpen( openByDefault );

		toggle.addEventListener( 'click', function () {
			setOpen( ! root.classList.contains( 'bw-woo-mini-cart--open' ) );
		} );
	}

	document
		.querySelectorAll( '.wp-block-blockwriter-woo-mini-cart' )
		.forEach( initMiniCart );
} )();
