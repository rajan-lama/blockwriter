import {
	BlockContextProvider,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { getBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';

import './editor.scss';

/**
 * Builds the default inner block template.
 *
 * Only core blocks that consume the loop's post context are included, so the
 * layout shows real post data out of the box.
 *
 * @return {Array} Inner block template.
 */
const buildTemplate = () => {
	const fields = [
		'core/post-featured-image',
		'core/post-title',
		'core/post-date',
		'core/post-excerpt',
	];

	return fields
		.filter( ( name ) => getBlockType( name ) )
		.map( ( name ) => [ name ] );
};

const TEMPLATE = buildTemplate();

export default function Edit( { attributes, setAttributes } ) {
	const { postType, htmlId, extraClass } = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
	} );

	// A single post is loaded so the inner blocks can preview real data while
	// the layout is being designed.
	const samplePost = useSelect(
		( select ) => {
			const posts =
				select( 'core' ).getEntityRecords( 'postType', postType, {
					per_page: 1,
					_fields: 'id,type',
				} ) || [];

			if ( ! posts.length ) {
				return {};
			}

			return {
				postId: posts[ 0 ].id,
				postType: posts[ 0 ].type || postType,
			};
		},
		[ postType ],
	);

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-loop-builder__preview">
					<BlockContextProvider value={ samplePost }>
						<InnerBlocks
							template={ TEMPLATE }
							templateLock={ false }
							renderAppender={ InnerBlocks.ButtonBlockAppender }
						/>
					</BlockContextProvider>
				</div>

				<p className="bw-loop-builder__hint">
					{ __(
						'This layout repeats for every post in the query. Adjust the query in the block settings and the BlockWriter Query sidebar.',
						'blockwriter',
					) }
				</p>
			</div>
		</>
	);
}
