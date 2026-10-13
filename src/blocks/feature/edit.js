import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getFeatureIcon } from './icons';
import { getFeatureStyles, getFeatureClassName } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		icon,
		showIcon,
		title,
		description,
		linkText,
		linkUrl,
		htmlId,
		extraClass,
	} = attributes;

	const Icon = getFeatureIcon( icon );

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, getFeatureClassName( attributes ) ]
				.filter( Boolean )
				.join( ' ' ) || undefined,
		style: getFeatureStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-feature__inner">
					{ showIcon && (
						<span className="bw-feature__icon" aria-hidden="true">
							<Icon />
						</span>
					) }
					<div className="bw-feature__content">
						<RichText
							tagName="h3"
							className="bw-feature__title"
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'Feature title', 'blockwriter' ) }
						/>
						<RichText
							tagName="p"
							className="bw-feature__description"
							value={ description }
							onChange={ ( value ) => setAttributes( { description: value } ) }
							placeholder={ __( 'Describe this feature…', 'blockwriter' ) }
						/>
						{ ( linkText || linkUrl ) && (
							<RichText
								tagName="span"
								className="bw-feature__link"
								value={ linkText }
								onChange={ ( value ) => setAttributes( { linkText: value } ) }
								placeholder={ __( 'Learn more', 'blockwriter' ) }
							/>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
