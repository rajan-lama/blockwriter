/**
 * Front end carousel behavior for the BW Post Carousel block.
 *
 * The track is a horizontally scrollable list, so every slide stays reachable
 * without JavaScript. When JavaScript is available the controls are revealed
 * and scroll position, dots, and arrows are kept in sync.
 */
import { initCarousel } from '../../shared/carousel';

const SELECTORS = {
	slideSelector: '.bw-post-carousel__slide',
	viewportSelector: '.bw-post-carousel__viewport',
	prevSelector: '.bw-post-carousel__arrow--prev',
	nextSelector: '.bw-post-carousel__arrow--next',
	dotSelector: '.bw-post-carousel__dot',
	jsClass: 'bw-post-carousel--js',
};

document
	.querySelectorAll( '.wp-block-blockwriter-post-carousel' )
	.forEach( function ( root ) {
		initCarousel( root, SELECTORS );
	} );
