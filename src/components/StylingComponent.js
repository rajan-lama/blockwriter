import { useState } from '@wordpress/element';
import DimensionComponent from '@components/DimensionComponent';
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
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	PanelRow,
	Icon,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	ToggleControl,
	ColorPicker,
	GradientPicker,
	FocalPointPicker,
	ColorPalette,
} from '@wordpress/components';

const StylingComponent = ({ props }) => {
	const { attributes, setAttributes } = props;
	const { margin, padding } = attributes;
	const [color, setColor] = useState();
	const [gradient, setGradient] = useState(null);
	const [currentBgOption, setCurrentBgOption] = useState();
	const [imageOverlay, setImageOverlay] = useState(false);
	const [columns, setColumns] = useState(2);
	const [linkColor, setLinkColor] = useState('normal');
	const [focalPoint, setFocalPoint] = useState({
		x: 0.5,
		y: 0.5,
	});

	const url =
		'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

	/* Example function to render the CSS styles based on Focal Point Picker value */
	const style = {
		backgroundImage: `url(${url})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
	};

	// const [ color, setColor ] = useState ( '#f00' )
	const colors = [{ name: 'red', color: '#f00' }];

	const updateAttribute = (newValue) => {
		setAttributes({ margin: newValue });
	};
	return (
		<div className="gs-styling-section">
			<Panel>
				<PanelBody
					title={__('Background', 'gutenstar')}
					initialOpen={true}
				>
					<div className="gs-title-button-units-section">
						<PanelRow>{__('Type:', 'gutenstar')}</PanelRow>
						<ButtonGroup>
							<Button
								icon="admin-customizer"
								variant="secondary"
								isSmall="true"
								iconSize="15"
								onClick={() => setCurrentBgOption('color')}
								isPressed={
									currentBgOption === 'color' ? true : false
								}
							></Button>
							<Button
								icon="laptop"
								variant="secondary"
								isSmall="true"
								iconSize="15"
								onClick={() => setCurrentBgOption('gradient')}
								isPressed={
									currentBgOption === 'gradient'
										? true
										: false
								}
							></Button>
							<Button
								icon="format-image"
								variant="secondary"
								isSmall="true"
								iconSize="15"
								onClick={() => setCurrentBgOption('image')}
								isPressed={
									currentBgOption === 'image' ? true : false
								}
							></Button>
							<Button
								icon="video-alt2"
								variant="secondary"
								isSmall="true"
								iconSize="15"
								onClick={() => setCurrentBgOption('video')}
								isPressed={
									currentBgOption === 'video' ? true : false
								}
							></Button>
						</ButtonGroup>
					</div>
					{currentBgOption === 'color' && (
						<>
							<PanelRow>Select Background Color</PanelRow>
							<ColorPicker
								color={color}
								onChange={setColor}
								enableAlpha
								defaultValue="#000"
							/>
						</>
					)}
					{currentBgOption === 'gradient' && (
						<>
							<>
								<PanelRow>Select Background Gradient</PanelRow>
								<GradientPicker
									value={gradient}
									onChange={(currentGradient) =>
										setGradient(currentGradient)
									}
									gradients={[
										{
											name: 'JShine',
											gradient:
												'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
											slug: 'jshine',
										},
										{
											name: 'Moonlit Asteroid',
											gradient:
												'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
											slug: 'moonlit-asteroid',
										},
										{
											name: 'Rastafarie',
											gradient:
												'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
											slug: 'rastafari',
										},
									]}
								/>
							</>
							<ToggleControl
								label={__('Enable Image Overlay', 'gutenstar')}
								help={'Add overlay to image.'}
								checked={imageOverlay}
								onChange={(newValue) => {
									setImageOverlay(newValue);
								}}
							/>

							{imageOverlay && (
								<>
									<figure>
										<MediaUploadCheck>
											<MediaUpload
												// onSelect={onSelectImage}
												allowedTypes={['image']}
												// value={attributes.id}
												// render={() => (
												//   <>
												//     {!mediaImageID &&
												//       !currentSrc &&
												//       renderDefaultRenderedEditor()}

												//     {mediaImageID !== 0 &&
												//       currentSrc !== "" &&
												//       renderDefaultImageRenderEditor(currentSrc)}
												//   </>
												// )}
												render={({ open }) => (
													<Button
														className={
															'button button-large image-select-button'
														}
														onClick={open}
													>
														<Icon icon="format-image" />
														{__(
															'Change Image',
															'jsforwpblocks'
														)}
													</Button>
												)}
											/>
										</MediaUploadCheck>
									</figure>

									<FocalPointPicker
										__nextHasNoMarginBottom
										url={url}
										value={focalPoint}
										onDragStart={setFocalPoint}
										onDrag={setFocalPoint}
										onChange={setFocalPoint}
									/>
									<div style={style} />

									<SelectControl
										label={__('Attachment', 'gutenstar')}
										labelPosition="side"
										// value={attributes.htmlTag}
										options={[
											{
												label: 'Scroll',
												value: 'scroll',
											},
											{ label: 'Fixed', value: 'fixed' },
										]}
										onChange={(value) => {
											setAttributes({ htmlTag: value });
										}}
									/>

									<SelectControl
										label={__('Blend Mode', 'gutenstar')}
										labelPosition="side"
										// value={attributes.htmlTag}
										options={[
											{ label: 'Normal', value: 'div' },
											{
												label: 'Multiple',
												value: 'header',
											},
											{
												label: 'Screen',
												value: 'footer',
											},
											{ label: 'Overlay', value: 'main' },
											{
												label: 'Darken',
												value: 'article',
											},
											{
												label: 'Lighten',
												value: 'section',
											},
											{
												label: 'Color Dodge',
												value: 'aside',
											},
											{
												label: 'Saturation',
												value: 'figure',
											},
											{
												label: 'Color',
												value: 'figcaption',
											},
										]}
										// onChange={(value) => {
										//   setAttributes({ htmlTag: value });
										// }}
									/>

									<SelectControl
										label={__('Repeat', 'gutenstar')}
										labelPosition="side"
										// value={attributes.htmlTag}
										options={[
											{
												label: 'No Repeat',
												value: 'no-repeat',
											},
											{
												label: 'Repeat',
												value: 'repeat',
											},
											{
												label: 'Repeat-X',
												value: 'repeat-x',
											},
											{
												label: 'Repeat-Y',
												value: 'repeat-y',
											},
										]}
										// onChange={(value) => {
										//   setAttributes({ htmlTag: value });
										// }}
									/>

									<SelectControl
										label={__('Repeat', 'gutenstar')}
										labelPosition="side"
										// value={attributes.htmlTag}
										options={[
											{
												label: 'Auto',
												value: 'no-repeat',
											},
											{ label: 'Cover', value: 'repeat' },
											{
												label: 'Contain',
												value: 'repeat-x',
											},
											{
												label: 'Custom',
												value: 'repeat-y',
											},
										]}
										// onChange={(value) => {
										//   setAttributes({ htmlTag: value });
										// }}
									/>

									<RangeControl
										__nextHasNoMarginBottom
										label={__('Opacity', 'gutenstar')}
										value={columns}
										onChange={(value) => setColumns(value)}
										min={0}
										step={0.01}
										max={1}
										allowReset="true"
										resetFallbackValue={0.5}
									/>
								</>
							)}
						</>
					)}
				</PanelBody>
				<PanelBody
					title={__('Text Color', 'gutenstar')}
					initialOpen={false}
				>
					<ButtonGroup>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('normal')}
							isPressed={linkColor === 'normal' ? true : false}
						>
							Normal
						</Button>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('link')}
							isPressed={linkColor === 'link' ? true : false}
						>
							Link
						</Button>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('hover')}
							isPressed={linkColor === 'hover' ? true : false}
						>
							Hover
						</Button>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('visited')}
							isPressed={linkColor === 'visited' ? true : false}
						>
							Visited
						</Button>
					</ButtonGroup>
					{linkColor === 'normal' && (
						<ColorPalette
							asButtons="true"
							colors={colors}
							value={color}
							onChange={(color) => setColor(color)}
							headingLevel="2"
						/>
					)}
					{linkColor === 'link' && (
						<ColorPalette
							asButtons="true"
							colors={colors}
							value={color}
							onChange={(color) => setColor(color)}
							headingLevel="2"
						/>
					)}
					{linkColor === 'hover' && (
						<ColorPalette
							asButtons="true"
							colors={colors}
							value={color}
							onChange={(color) => setColor(color)}
							headingLevel="2"
						/>
					)}
					{linkColor === 'visited' && (
						<ColorPalette
							asButtons="true"
							colors={colors}
							value={color}
							onChange={(color) => setColor(color)}
							headingLevel="2"
						/>
					)}
				</PanelBody>
				<PanelBody
					title={__('Border', 'gutenstar')}
					initialOpen={false}
				>
					<SelectControl
						label={__('Repeat', 'gutenstar')}
						labelPosition="side"
						// value={attributes.htmlTag}
						options={[
							{
								label: 'Default',
								value: 'no-repeat',
							},
							{ label: 'None', value: 'repeat' },
							{
								label: 'Solid',
								value: 'repeat-x',
							},
							{
								label: 'Dotted',
								value: 'repeat-y',
							},
							{
								label: 'Dashed',
								value: 'no-repeat',
							},
							{ label: 'Doubled', value: 'repeat' },
							{
								label: 'Groove',
								value: 'repeat-x',
							},
							{
								label: 'Inset',
								value: 'repeat-y',
							},
							{
								label: 'Outset',
								value: 'repeat-y',
							},
							{
								label: 'Ridget',
								value: 'repeat-y',
							},
						]}
						// onChange={(value) => {
						//   setAttributes({ htmlTag: value });
						// }}
					/>
					<PanelRow>Width</PanelRow>
					<PanelRow>Radius</PanelRow>
					<ButtonGroup>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('normal')}
							isPressed={linkColor === 'normal' ? true : false}
						>
							Normal
						</Button>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('hover')}
							isPressed={linkColor === 'hover' ? true : false}
						>
							Hover
						</Button>
					</ButtonGroup>
					{linkColor === 'normal' && (
						<ColorPalette
							asButtons="true"
							colors={colors}
							value={color}
							onChange={(color) => setColor(color)}
							headingLevel="2"
						/>
					)}
					{linkColor === 'hover' && (
						<ColorPalette
							asButtons="true"
							colors={colors}
							value={color}
							onChange={(color) => setColor(color)}
							headingLevel="2"
						/>
					)}
				</PanelBody>
				<PanelBody
					title={__('Box Shadow', 'gutenstar')}
					initialOpen={false}
				>
					<PanelRow>Color</PanelRow>
					<ColorPicker
						color={color}
						onChange={setColor}
						enableAlpha
						defaultValue="#000"
					/>
					<RangeControl
						__nextHasNoMarginBottom
						label={__('Horizontal', 'gutenstar')}
						value={columns}
						onChange={(value) => setColumns(value)}
						min={0}
						max={100}
						allowReset="true"
						resetFallbackValue={0.5}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						label={__('Vertical', 'gutenstar')}
						value={columns}
						onChange={(value) => setColumns(value)}
						min={0}
						max={100}
						allowReset="true"
						resetFallbackValue={0.5}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						label={__('Blur', 'gutenstar')}
						value={columns}
						onChange={(value) => setColumns(value)}
						min={0}
						max={100}
						allowReset="true"
						resetFallbackValue={0.5}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						label={__('Spread', 'gutenstar')}
						value={columns}
						onChange={(value) => setColumns(value)}
						min={0}
						max={100}
						allowReset="true"
						resetFallbackValue={0.5}
					/>
					<ButtonGroup>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('normal')}
							isPressed={linkColor === 'normal' ? true : false}
						>
							Outset
						</Button>
						<Button
							variant="secondary"
							isSmall="true"
							onClick={() => setLinkColor('hover')}
							isPressed={linkColor === 'hover' ? true : false}
						>
							Inset
						</Button>
					</ButtonGroup>
				</PanelBody>
				{/* <PanelBody title={__('Shape Divider','gutenstar')} initialOpen={false}>
					<PanelRow>Top / Bottom</PanelRow>
					<PanelRow>Type</PanelRow>
					<7PanelRow>Color</Pane   
					.lRow>`1																	
					<PanelRow>Width</PanelRow>
					<PanelRow>Height</PanelRow>
					<PanelRow>Flip</PanelRow>
					<PanelRow>Invert</PanelRow>
					<PanelRow>Bring To Front</PanelRow>
				</PanelBody> */}
				<PanelBody
					title={__('Spacing', 'gutenstar')}
					initialOpen={false}
				>
					{/* <DimensionComponent
						label={__('Row Gap','gutenstar')}
						dimension={row}
						updatedDimension={updateAttribute}
					/> */}
					{/* <DimensionComponent
						label={__('Column Gap','gutenstar')}
						dimension={column}
						updatedDimension={updateAttribute}
					/> */}
					<DimensionComponent
						label={__('Padding Gap', 'gutenstar')}
						dimension={padding}
						updatedDimension={updateAttribute}
					/>
					<DimensionComponent
						label={__('Margin Gap', 'gutenstar')}
						dimension={margin}
						updatedDimension={updateAttribute}
					/>
				</PanelBody>
				{/* <PanelBody title={__('Container Type','gutenstar')} initialOpen={true}>
                    <PanelRow>Container Width</PanelRow>
                    <ButtonGroup>
                        <Button
                            onClick={() =>
                                onClickContainerType('alignfull')
                            }
                            variant="primary"
                            isPressed={fullwidthContainer}
                        >
                            Full Width
                        </Button>
                        <Button
                            onClick={() =>
                                onClickContainerType('alignwide')
                            }
                            variant="primary"
                            isPressed={boxedContainer}
                        >
                            Boxed
                        </Button>
                        <Button
                            onClick={() => onClickContainerType('default')}
                            variant="primary"
                            isPressed={customContainer}
                        >
                            Custom
                        </Button>
                    </ButtonGroup>
                    <PanelRow>Content Width</PanelRow>
                    <ButtonGroup>
                        <Button
                            onClick={() => onClickContentType('full-width')}
                            variant="primary"
                            isPressed={fullwidthContent}
                        >
                            Full Width
                        </Button>
                        <Button
                            onClick={() => onClickContentType('boxed')}
                            variant="primary"
                            isPressed={boxedContent}
                        >
                            Boxed
                        </Button>
                    </ButtonGroup>
                    <DeviceTabButton props={props} />
                    <ToggleControl
                        label={__('Auto Height','gutenstar')}
                        help={
                            'Enabling this will change the Align Items value to Stretch.'
                        }
                        checked={attributes.autoHeight}
                        onChange={(value) => {
                            setAttributes({ autoHeight: value });
                        }}
                        className="gs-auto-height"
                    />
                    <SelectControl
                        label={__('HTML Tag','gutenstar')}
                        labelPosition="side"
                        value={attributes.htmlTag}
                        options={[
                            { label: 'Div', value: 'div' },
                            { label: 'Header', value: 'header' },
                            { label: 'Footer', value: 'footer' },
                            { label: 'Main', value: 'main' },
                            { label: 'Article', value: 'article' },
                            { label: 'Section', value: 'section' },
                            { label: 'Aside', value: 'aside' },
                            { label: 'Figure', value: 'figure' },
                            { label: 'FigCaption', value: 'figcaption' },
                            { label: 'Summary', value: 'summary' },
                            { label: 'Nav', value: 'nav' },
                            { label: 'Link', value: 'link' },
                        ]}
                        onChange={(value) => {
                            setAttributes({ htmlTag: value });
                        }}
                    />
                    <PanelRow>Overflow</PanelRow>
                    <ButtonGroup>
                        <Button
                            onClick={() =>
                                setAttributes({ overflow: 'visible' })
                            }
                            variant="primary"
                            isPressed={fullwidthContainer}
                        >
                            Visible
                        </Button>
                        <Button
                            onClick={() =>
                                setAttributes({ overflow: 'hidden' })
                            }
                            variant="primary"
                            isPressed={boxedContainer}
                        >
                            Hidden
                        </Button>
                        <Button
                            onClick={() =>
                                setAttributes({ overflow: 'auto' })
                            }
                            variant="primary"
                            isPressed={customContainer}
                        >
                            Auto
                        </Button>
                    </ButtonGroup>
                </PanelBody> */}
			</Panel>
		</div>
	);
};

export default StylingComponent;
