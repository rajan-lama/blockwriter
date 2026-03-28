import { useState } from '@wordpress/element';
import animations from '@constants/animations';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	Button,
	ButtonGroup,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

const AdvanceComponent = ({ props }) => {
	const { attributes, setAttributes } = props;
	const [sticky, setSticky] = useState(attributes.sticky);
	return (
		<>
			<Panel>
				<PanelBody title={__('Sticky', 'gutenstar')} initialOpen={true}>
					<ToggleControl
						label={__('Sticky Container', 'gutenstar')}
						help={__(
							'Changes affect the frontend only.',
							'gutenstar'
						)}
						checked={attributes.sticky}
						onChange={(value) => {
							setAttributes({ sticky: value });
							setSticky(value);
						}}
						className="gs-auto-height"
					/>
					{sticky && (
						<>
							<PanelRow>{__('Stick At', 'gutenstar')}</PanelRow>
							<ButtonGroup>
								<Button
									isPressed={
										attributes.stickyPosition === 'top'
											? true
											: false
									}
									onClick={() => {
										setAttributes({
											stickyPosition: 'top',
										});
									}}
								>
									{__('Top', 'gutenstar')}
								</Button>
								<Button
									isPressed={
										attributes.stickyPosition === 'bottom'
											? true
											: false
									}
									onClick={() => {
										setAttributes({
											stickyPosition: 'bottom',
										});
									}}
								>
									{__('Bottom', 'gutenstar')}
								</Button>
							</ButtonGroup>
							<PanelRow>
								{__('Offset (in px)', 'gutenstar')}
							</PanelRow>
							<RangeControl
								value={attributes.stickyOffsetValue}
								onChange={(value) => {
									setAttributes({ stickyOffsetValue: value });
								}}
								min={0}
								max={500}
								step={1}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody
					title={__('Animations', 'gutenstar')}
					initialOpen={false}
				>
					<SelectControl
						value={attributes.animation}
						options={animations}
						onChange={(value) => {
							setAttributes({ animation: value });
						}}
					/>
					{attributes.animation !== 'none' && (
						<>
							<SelectControl
								value={attributes.animationDuration}
								options={[
									{ label: 'Slower', value: 'slower' },
									{ label: 'Slow', value: 'slow' },
									{ label: 'Fast', value: 'fast' },
									{ label: 'Faster', value: 'faster' },
								]}
								onChange={(value) => {
									setAttributes({ animationDuration: value });
								}}
							/>
						</>
					)}
				</PanelBody>
				{/* <PanelBody title="Display Conditions" initialOpen={false}>
					<PanelRow>Display Conditions</PanelRow>
				</PanelBody> */}
				<PanelBody
					title={__('Responsive Conditions', 'gutenstar')}
					initialOpen={false}
				>
					<ToggleControl
						label="Hide on Desktop"
						help={'Changes affect the frontend only.'}
						checked={attributes.hideOnDesktop}
						onChange={(value) => {
							setAttributes({ hideOnDesktop: value });
						}}
					/>
					<ToggleControl
						label="Hide on Tablet"
						help={'Changes affect the frontend only.'}
						checked={attributes.hideOnTablet}
						onChange={(value) => {
							setAttributes({ hideOnTablet: value });
						}}
					/>
					<ToggleControl
						label="Hide on Mobile"
						help={'Changes affect the frontend only.'}
						checked={attributes.hideOnMobile}
						onChange={(value) => {
							setAttributes({ hideOnMobile: value });
						}}
					/>
				</PanelBody>
				<PanelBody title="Z-Index" initialOpen={false}>
					<PanelRow>Offset</PanelRow>
					<RangeControl
						value={attributes.zindex}
						onChange={(value) => {
							setAttributes({ zindex: value });
						}}
						min={-999}
						max={999}
						step={1}
						allowReset={true}
						resetFallbackValue={0}
					/>
				</PanelBody>
			</Panel>
		</>
	);
};

export default AdvanceComponent;
