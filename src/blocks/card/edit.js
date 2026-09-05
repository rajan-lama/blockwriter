import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import { getCardStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		cardImageUrl,
		cardImageAlt,
		cardPadding,
		tagType,
		htmlId,
		extraClass,
	} = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, `bw-card-padding-${ cardPadding || 'medium' }` ]
				.filter( Boolean )
				.join( ' ' ) || undefined,
		style: getCardStyles( attributes ),
	} );

	const Tag = tagType;

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<Tag { ...blockProps }>
				{ cardImageUrl && (
					<div className="bw-card-media">
						<img
							src={ cardImageUrl }
							alt={ cardImageAlt || '' }
							loading="lazy"
						/>
					</div>
				) }
				<div className="bw-card-body">
					<InnerBlocks />
				</div>
			</Tag>
		</>
	);
}
