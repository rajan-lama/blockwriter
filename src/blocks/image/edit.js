import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getFigureStyles, getImageStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { url, alt, caption, htmlId, extraClass } = attributes;

	const placeholderClass = url ? '' : 'bw-image-placeholder';

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, placeholderClass ].filter( Boolean ).join( ' ' ) ||
			undefined,
		style: getFigureStyles( attributes ),
	} );

	const onSelectImage = ( media ) => {
		setAttributes( {
			url: media.url,
			id: media.id,
			alt: media.alt || '',
		} );
	};

	if ( ! url ) {
		return (
			<>
				<Inspector attributes={ attributes } setAttributes={ setAttributes } />
				<div { ...blockProps }>
					<MediaUpload
						allowedTypes={ [ 'image' ] }
						onSelect={ onSelectImage }
						render={ ( { open } ) => (
							<Button
								className="bw-image-select-button"
								variant="secondary"
								onClick={ open }
							>
								{ __( 'Select Image', 'blockwriter' ) }
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
				<img
					className="bw-image"
					src={ url }
					alt={ alt }
					style={ getImageStyles( attributes ) }
				/>
				<RichText
					tagName="figcaption"
					className="bw-image-caption"
					value={ caption }
					onChange={ ( value ) => setAttributes( { caption: value } ) }
					placeholder={ __( 'Write caption…', 'blockwriter' ) }
				/>
			</figure>
		</>
	);
}
