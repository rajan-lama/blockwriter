import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { getVisibleSteps } from './helpers';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { steps, stepsLayout, htmlId, extraClass } = attributes;

	const items = Array.isArray( steps ) ? steps : [];
	const visibleSteps = getVisibleSteps( steps );

	const blockProps = useBlockProps( {
		id: htmlId || undefined,
		className:
			[ extraClass, `bw-steps-layout-${ stepsLayout || 'vertical' }` ]
				.filter( Boolean )
				.join( ' ' ) || undefined,
	} );

	return (
		<>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } />
			<div { ...blockProps }>
				{ items.map( ( step, index ) => (
					<div className="bw-step" key={ index }>
						<span className="bw-step-number" aria-hidden="true">
							{ index + 1 }
						</span>
						<div className="bw-step-content">
							{ String( step.title || '' ).trim() ? (
								<h3 className="bw-step-title">{ step.title }</h3>
							) : (
								<h3 className="bw-step-title bw-step-placeholder">
									{ __( 'Step title', 'blockwriter' ) }
								</h3>
							) }
							{ String( step.description || '' ).trim() ? (
								<p className="bw-step-description">{ step.description }</p>
							) : (
								<p className="bw-step-description bw-step-placeholder">
									{ __( 'Step description', 'blockwriter' ) }
								</p>
							) }
						</div>
					</div>
				) ) }
				{ visibleSteps.length === 0 && (
					<p className="bw-steps-hint">
						{ __( 'Add your steps in the block settings.', 'blockwriter' ) }
					</p>
				) }
			</div>
		</>
	);
}
