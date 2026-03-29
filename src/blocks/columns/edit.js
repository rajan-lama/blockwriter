import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { layout, paddingY, background } = attributes;

	const blockProps = useBlockProps({
		className: `${paddingY} ${background}`,
	});

	// const columns = ( layout ) => {
	//   switch( layout ){
	//     case "layout-one":
	//       return ["12"];
	//       break;
	//     case "layout-two":
	//       return ["6", "6"];
	//       break;
	//     case "layout-three":
	//       return ["4", "4", "4"];
	//       break;
	//     case "layout-four":
	//       return ["3","3","3","3"];
	//       break;
	//     case "layout-five":
	//       return ["2","2","2","2"];
	//       break;
	//     case "layout-six":
	//       return ["2","2","2","2","2","2"];
	//       break;
	//     case "layout-eight-four":
	//       return ["8","4"];
	//       break;
	//     case "layout-four-eight":
	//       return ["4","8"];
	//       break;
	//     case "layout-nine-three":
	//       return ["9","3"];
	//       break;
	//     case "layout-three-nine":
	//       return ["3","9"];
	//       break;
	//     case "layout-five-seven":
	//       return ["5","7"];
	//       break;
	//     case "layout-seven-five":
	//       return ["7","5"];
	//       break;
	//   }
	// }

	// const { replaceInnerBlocks } = useDispatch('core/block-editor');

	// useEffect(() => {
	// 	const newBlocks = getColumns(layout).map((colClass) =>
	// 		wp.blocks.createBlock('rithemes/column', { colMd: colClass })
	// 	);

	// 	replaceInnerBlocks(clientId, newBlocks);
	// }, [layout]);

	const getColumns = (layout) => {
		switch (layout) {
			case 'layout-one':
				return ['col-md-12'];

			case 'layout-two':
				return ['col-md-6', 'col-md-6'];

			case 'layout-three':
				return ['col-md-4', 'col-md-4', 'col-md-4'];

			case 'layout-four':
				return ['col-md-3', 'col-md-3', 'col-md-3', 'col-md-3'];

			case 'layout-five':
				return [
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
				];

			case 'layout-six':
				return [
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
					'col-md-2',
				];

			// Custom layouts
			case 'layout-eight-four':
				return ['col-md-8', 'col-md-4'];

			case 'layout-four-eight':
				return ['col-md-4', 'col-md-8'];

			case 'layout-nine-three':
				return ['col-md-9', 'col-md-3'];

			case 'layout-three-nine':
				return ['col-md-3', 'col-md-9'];

			case 'layout-five-seven':
				return ['col-md-5', 'col-md-7'];

			case 'layout-seven-five':
				return ['col-md-7', 'col-md-5'];

			case 'layout-eighty-twenty':
				return ['col-md-10', 'col-md-2'];

			case 'layout-twenty-eighty':
				return ['col-md-2', 'col-md-10'];

			default:
				return ['col-md-12'];
		}
	};

	const TEMPLATE = getColumns(layout).map((colClass) => [
		'blockwriter/column',
		{ colMd: colClass },
	]);

	console.log('TEMPLATE', TEMPLATE);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<div {...blockProps}>
				<Row>
					<InnerBlocks template={TEMPLATE} templateLock="all" />
				</Row>
			</div>
		</>
	);
}
