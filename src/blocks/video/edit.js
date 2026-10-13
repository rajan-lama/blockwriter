import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getFigureStyles, getVideoProps } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { url, caption, htmlId, extraClass } = attributes;

	const placeholderClass = url ? '' : 'bw-video-placeholder';

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, placeholderClass ].filter( Boolean ).join( ' ' ) ||
			undefined,
		style: getFigureStyles( attributes ),
	} );

	const onSelectVideo = ( media ) => {
		setAttributes( {
			url: media.url,
			id: media.id,
		} );
	};

	if ( ! url ) {
		return (
			<>
				<Inspector attributes={ attributes } setAttributes={ setAttributes } />
				<div { ...blockProps }>
					<MediaUpload
						allowedTypes={ [ 'video' ] }
						onSelect={ onSelectVideo }
						render={ ( { open } ) => (
							<Button
								className="bw-video-select-button"
								variant="secondary"
								onClick={ open }
							>
								{ __( 'Select Video', 'blockwriter' ) }
							</Button>
						) }
					/>
				</div>
			</>
		);
	}

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<figure { ...blockProps }>
				<video
					className="bw-video"
					src={ url }
					style={ { width: '100%', display: 'block' } }
					{ ...getVideoProps( attributes ) }
				/>
				<RichText
					tagName="figcaption"
					className="bw-video-caption"
					value={ caption }
					onChange={ ( value ) => setAttributes( { caption: value } ) }
					placeholder={ __( 'Write caption…', 'blockwriter' ) }
				/>
			</figure>
		</>
	);
}
