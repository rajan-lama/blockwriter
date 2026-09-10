import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getStatStyles } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { statNumber, statLabel, statPrefix, statSuffix, htmlId, extraClass } =
		attributes;

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className: extraClass || undefined,
		style: getStatStyles( attributes ),
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				<div className="bw-stat-value">
					{ statPrefix && (
						<span className="bw-stat-prefix">{ statPrefix }</span>
					) }
					<RichText
						tagName="span"
						className="bw-stat-num"
						value={ statNumber }
						onChange={ ( value ) => setAttributes( { statNumber: value } ) }
						placeholder={ __( 'Add number', 'blockwriter' ) }
					/>
					{ statSuffix && (
						<span className="bw-stat-suffix">{ statSuffix }</span>
					) }
				</div>
				<RichText
					tagName="p"
					className="bw-stat-label"
					value={ statLabel }
					onChange={ ( value ) => setAttributes( { statLabel: value } ) }
					placeholder={ __( 'Stat label', 'blockwriter' ) }
				/>
			</div>
		</>
	);
}
