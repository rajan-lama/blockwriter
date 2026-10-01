import { InnerBlocks } from '@wordpress/block-editor';

import './style.scss';

/**
 * Dynamic block: the markup is rendered on the server by render.php.
 *
 * The inner blocks are stored in the post content so the server can re-render
 * them for each post returned by the query.
 */
export default function save() {
	return <InnerBlocks.Content />;
}
