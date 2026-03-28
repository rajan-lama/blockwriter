import { useState } from '@wordpress/element';
import {
	Button,
	ButtonGroup,
	RangeControl,
	PanelRow,
} from '@wordpress/components';

const DeviceTabButton = ({ props }) => {
	const { attributes, setAttributes } = props;
	const [currentDevice, setCurrentDevice] = useState(
		attributes.contentWidth.currentDevice
	);

	// desktop
	const [desktopWidth, setDesktopWidth] = useState(
		attributes.contentWidth.desktopValue
	);
	const [desktopUnit, setDesktopUnit] = useState(
		attributes.contentWidth.desktopUnit
	);
	const [desktopHeight, setDesktopHeight] = useState(
		attributes.contentWidth.desktopHeightValue
	);
	const [desktopHeightUnit, setDesktopHeightUnit] = useState(
		attributes.contentWidth.desktopHeightUnit
	);

	// tablet
	const [tabletWidth, setTabletWidth] = useState(
		attributes.contentWidth.tabletValue
	);
	const [tabletUnit, setTabletUnit] = useState(
		attributes.contentWidth.tabletUnit
	);
	const [tabletHeight, setTabletHeight] = useState(
		attributes.contentWidth.tabletHeightValue
	);
	const [tabletHeightUnit, setTabletHeightUnit] = useState(
		attributes.contentWidth.tabletHeightUnit
	);

	// mobile
	const [mobileWidth, setMobileWidth] = useState(
		attributes.contentWidth.mobileValue
	);
	const [mobileUnit, setMobileUnit] = useState(
		attributes.contentWidth.mobileUnit
	);
	const [mobileHeight, setMobileHeight] = useState(
		attributes.contentWidth.mobileHeightValue
	);
	const [mobileHeightUnit, setMobileHeightUnit] = useState(
		attributes.contentWidth.mobileHeightUnit
	);

	const ContainerBoxWidth = () => {
		const onClickFilter = (tempDevice, unit) => {
			const tempContentWidth = attributes.contentWidth;

			switch (tempDevice) {
				case 'tablet':
					if (unit === 'pxh') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								tabletHeightUnit: 'px',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === 'vh') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								tabletHeightUnit: 'vh',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === '%') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								tabletUnit: '%',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === 'vw') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								tabletUnit: 'vw',
								currentDevice: tempDevice,
							},
						});
					} else {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								tabletUnit: 'px',
								currentDevice: tempDevice,
							},
						});
					}
					break;
				case 'mobile':
					if (unit === 'pxh') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								mobileHeightUnit: 'px',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === 'vh') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								mobileHeightUnit: 'vh',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === '%') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								mobileUnit: '%',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === 'vw') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								mobileUnit: 'vw',
								currentDevice: tempDevice,
							},
						});
					} else {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								mobileUnit: 'px',
								currentDevice: tempDevice,
							},
						});
					}
					break;
				default:
					if (unit === 'pxh') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								desktopHeightUnit: 'px',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === 'vh') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								desktopHeightUnit: 'vh',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === '%') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								desktopUnit: '%',
								currentDevice: tempDevice,
							},
						});
					} else if (unit === 'vw') {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								desktopUnit: 'vw',
								currentDevice: tempDevice,
							},
						});
					} else {
						setAttributes({
							contentWidth: {
								...tempContentWidth,
								desktopUnit: 'px',
								currentDevice: tempDevice,
							},
						});
					}
					break;
			}
		};

		const deviceFilter = (
			tempDevice,
			width,
			unit,
			pxUnit,
			maxValue,
			height,
			heightUnit
		) => {
			return (
				<>
					<RangeControl
						value={width}
						onChange={(value) => {
							if (tempDevice === 'desktop') {
								setDesktopWidth(value);
							} else if (tempDevice === 'tablet') {
								setTabletWidth(value);
							} else {
								setMobileWidth(value);
							}
						}}
						min={0}
						max={unit === 'px' ? maxValue : 100}
						step={unit === '%' ? 0.01 : 1}
						allowReset={true}
						resetFallbackValue={unit === 'px' ? pxUnit : 100}
					/>
					<div className="gs-title-button-units-section">
						<PanelRow>Unit:</PanelRow>
						<ButtonGroup>
							<Button
								variant="secondary"
								onClick={() => onClickFilter(tempDevice, 'px')}
								isPressed={unit === 'px' ? true : false}
							>
								px
							</Button>
							<Button
								variant="secondary"
								onClick={() => onClickFilter(tempDevice, '%')}
								isPressed={unit === '%' ? true : false}
							>
								%
							</Button>
							<Button
								variant="secondary"
								onClick={() => onClickFilter(tempDevice, 'vw')}
								isPressed={unit === 'vw' ? true : false}
							>
								vw
							</Button>
						</ButtonGroup>
					</div>
					<div className="gs-title-button-units-holder">
						<div className="gs-title-button-units">
							Container Box Height
						</div>
						<ButtonGroup>
							<Button
								icon="desktop"
								iconSize="20"
								variant="link"
								isSmall="true"
								onClick={() => setCurrentDevice('desktop')}
								isPressed={
									currentDevice === 'desktop' ? true : false
								}
							></Button>

							<Button
								icon="tablet"
								iconSize="20"
								variant="link"
								isSmall="true"
								onClick={() => setCurrentDevice('tablet')}
								isPressed={
									currentDevice === 'tablet' ? true : false
								}
							></Button>

							<Button
								icon="smartphone"
								iconSize="20"
								variant="link"
								isSmall="true"
								onClick={() => setCurrentDevice('mobile')}
								isPressed={
									currentDevice === 'mobile' ? true : false
								}
							></Button>
						</ButtonGroup>
					</div>
					<RangeControl
						value={height}
						onChange={(value) => {
							if (tempDevice === 'desktop') {
								setDesktopHeight(value);
							} else if (tempDevice === 'tablet') {
								setTabletHeight(value);
							} else {
								setMobileHeight(value);
							}
						}}
						min={0}
						max={heightUnit === 'px' ? 1000 : 100}
						allowReset={true}
						resetFallbackValue={heightUnit === 'px' ? 1000 : 100}
					/>
					<div className="gs-title-button-units-section">
						<PanelRow>Unit:</PanelRow>
						<ButtonGroup>
							<Button
								variant="secondary"
								onClick={() => onClickFilter(tempDevice, 'pxh')}
								isPressed={heightUnit === 'px' ? true : false}
							>
								px
							</Button>
							<Button
								variant="secondary"
								onClick={() => onClickFilter(tempDevice, 'vh')}
								isPressed={heightUnit === 'vh' ? true : false}
							>
								vw
							</Button>
						</ButtonGroup>
					</div>
				</>
			);
		};

		return (
			<>
				{currentDevice === 'desktop' &&
					deviceFilter(
						'desktop',
						desktopWidth,
						desktopUnit,
						1200,
						1600,
						desktopHeight,
						desktopHeightUnit
					)}
				{currentDevice === 'tablet' &&
					deviceFilter(
						'tablet',
						tabletWidth,
						tabletUnit,
						1024,
						1600,
						tabletHeight,
						tabletHeightUnit
					)}
				{currentDevice === 'mobile' &&
					deviceFilter(
						'mobile',
						mobileWidth,
						mobileUnit,
						767,
						1600,
						mobileHeight,
						mobileHeightUnit
					)}
			</>
		);
	};

	// const onSelect = (tabName) => {
	// 	setCurrentDevice(tabName);
	// };

	return (
		<>
			<div className="gs-title-button-units-holder">
				<div className="gs-title-button-units">Container Box Width</div>
				<ButtonGroup>
					<Button
						icon="desktop"
						iconSize="20"
						variant="link"
						isSmall="true"
						onClick={() => setCurrentDevice('desktop')}
						isPressed={currentDevice === 'desktop' ? true : false}
					></Button>

					<Button
						icon="tablet"
						iconSize="20"
						variant="link"
						isSmall="true"
						onClick={() => setCurrentDevice('tablet')}
						isPressed={currentDevice === 'tablet' ? true : false}
					></Button>

					<Button
						icon="smartphone"
						iconSize="20"
						variant="link"
						isSmall="true"
						onClick={() => setCurrentDevice('mobile')}
						isPressed={currentDevice === 'mobile' ? true : false}
					></Button>
				</ButtonGroup>
			</div>

			<div className="gs-title-button-units-tab-panel">
				<ContainerBoxWidth />
			</div>
		</>
	);
};

export default DeviceTabButton;
