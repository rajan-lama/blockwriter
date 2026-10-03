import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import Inspector from './inspector';
import metadata from './block.json';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		id: attributes.htmlId || undefined,
		className: attributes.extraClass || undefined,
	} );

	const hasContent = !! attributes.content && attributes.content.trim() !== '';

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				{ hasContent ? (
					<ServerSideRender block={ metadata.name } attributes={ attributes } />
				) : (
					<p className="bw-ai-content__placeholder">
						{ __(
							'Open the block settings and generate content from a prompt.',
							'blockwriter',
						) }
					</p>
				) }
			</div>
		</>
	);
}
