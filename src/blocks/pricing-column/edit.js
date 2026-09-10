import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getPricingColumnStyles, getFeatureItems } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		planName,
		planPrice,
		planPeriod,
		features,
		buttonText,
		isHighlight,
		tagType,
		htmlId,
		extraClass,
	} = attributes;

	const featureItems = getFeatureItems( features );

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, isHighlight ? 'is-featured' : '' ]
				.filter( Boolean )
				.join( ' ' ) || undefined,
		style: getPricingColumnStyles( attributes ),
	} );

	const Tag = tagType;

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<Tag { ...blockProps }>
				{ isHighlight && (
					<span className="bw-pricing-badge">
						{ __( 'Featured', 'blockwriter' ) }
					</span>
				) }
				<RichText
					tagName="h4"
					className="bw-pricing-plan"
					value={ planName }
					onChange={ ( value ) => setAttributes( { planName: value } ) }
					placeholder={ __( 'Plan name', 'blockwriter' ) }
				/>
				<div className="bw-pricing-amount">
					<RichText
						tagName="span"
						className="bw-pricing-price"
						value={ planPrice }
						onChange={ ( value ) => setAttributes( { planPrice: value } ) }
						placeholder={ __( '$29', 'blockwriter' ) }
					/>
					<RichText
						tagName="span"
						className="bw-pricing-period"
						value={ planPeriod }
						onChange={ ( value ) => setAttributes( { planPeriod: value } ) }
						placeholder={ __( '/ month', 'blockwriter' ) }
					/>
				</div>
				{ featureItems.length > 0 ? (
					<ul className="bw-pricing-features">
						{ featureItems.map( ( item, index ) => (
							<li key={ index }>{ item }</li>
						) ) }
					</ul>
				) : (
					<p className="bw-pricing-features-hint">
						{ __(
							'Add features in block settings, one per line.',
							'blockwriter',
						) }
					</p>
				) }
				<span className="bw-pricing-button">
					{ buttonText || __( 'Add button in settings', 'blockwriter' ) }
				</span>
			</Tag>
		</>
	);
}
