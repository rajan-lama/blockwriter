import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getTestimonialStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		quote,
		authorName,
		authorRole,
		avatarUrl,
		avatarAlt,
		htmlId,
		extraClass,
	} = attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getTestimonialStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<blockquote { ...blockProps }>
				<RichText
					tagName="p"
					multiline={ false }
					className="bw-testimonial-quote"
					value={ quote }
					onChange={ ( value ) => setAttributes( { quote: value } ) }
					placeholder={ __( 'Write a testimonial quote…', 'blockwriter' ) }
				/>
				<footer className="bw-testimonial-meta">
					{ avatarUrl && (
						<img
							className="bw-testimonial-avatar"
							src={ avatarUrl }
							alt={ avatarAlt || '' }
							loading="lazy"
						/>
					) }
					<div className="bw-testimonial-meta-text">
						<RichText
							tagName="div"
							className="bw-testimonial-author"
							value={ authorName }
							onChange={ ( value ) => setAttributes( { authorName: value } ) }
							placeholder={ __( 'Author name', 'blockwriter' ) }
						/>
						<RichText
							tagName="div"
							className="bw-testimonial-role"
							value={ authorRole }
							onChange={ ( value ) => setAttributes( { authorRole: value } ) }
							placeholder={ __( 'Role, company', 'blockwriter' ) }
						/>
					</div>
				</footer>
			</blockquote>
		</>
	);
}
