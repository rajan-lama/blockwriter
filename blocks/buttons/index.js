/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/buttons/edit.js"
/*!************************************!*\
  !*** ./src/blocks/buttons/edit.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/buttons/inspector.js");
/* harmony import */ var _hooks_getBWBlockName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/getBWBlockName */ "./src/hooks/getBWBlockName.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    buttons = []
  } = attributes;
  const addButton = () => {
    const newButtons = [...buttons, {
      text: 'New Button',
      url: '#'
    }];
    setAttributes({
      buttons: newButtons
    });
  };
  const updateButton = (index, field, value) => {
    const newButtons = [...buttons];
    newButtons[index][field] = value;
    setAttributes({
      buttons: newButtons
    });
  };
  const removeButton = index => {
    const newButtons = buttons.filter((_, i) => i !== index);
    setAttributes({
      buttons: newButtons
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }), buttons.map((btn, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        marginBottom: '10px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: "Button Text",
        value: btn.text,
        onChange: val => updateButton(index, 'text', val)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: "Button URL",
        value: btn.url,
        onChange: val => updateButton(index, 'url', val)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isDestructive: true,
        onClick: () => removeButton(index),
        children: "Remove"
      })]
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      onClick: addButton,
      children: "+ Add Button"
    })]
  });
}

/***/ },

/***/ "./src/blocks/buttons/inspector.js"
/*!*****************************************!*\
  !*** ./src/blocks/buttons/inspector.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspector)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TabButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TabButton */ "./src/components/TabButton.js");
/* harmony import */ var _hooks_getBWBlockName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/getBWBlockName */ "./src/hooks/getBWBlockName.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Inspector({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TabButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      blockName: (0,_hooks_getBWBlockName__WEBPACK_IMPORTED_MODULE_2__["default"])(_block_json__WEBPACK_IMPORTED_MODULE_3__.name)
    })
  });
}

/***/ },

/***/ "./src/blocks/buttons/save.js"
/*!************************************!*\
  !*** ./src/blocks/buttons/save.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    buttons = []
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: buttons.map((btn, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
      href: btn.url,
      className: "my-button",
      style: {
        marginRight: '10px'
      },
      children: btn.text
    }, index))
  });
}

/***/ },

/***/ "./src/components/DeviceTabButton.js"
/*!*******************************************!*\
  !*** ./src/components/DeviceTabButton.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DeviceTabButton = ({
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const [currentDevice, setCurrentDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.currentDevice);

  // desktop
  const [desktopWidth, setDesktopWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.desktopValue);
  const [desktopUnit, setDesktopUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.desktopUnit);
  const [desktopHeight, setDesktopHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.desktopHeightValue);
  const [desktopHeightUnit, setDesktopHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.desktopHeightUnit);

  // tablet
  const [tabletWidth, setTabletWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.tabletValue);
  const [tabletUnit, setTabletUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.tabletUnit);
  const [tabletHeight, setTabletHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.tabletHeightValue);
  const [tabletHeightUnit, setTabletHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.tabletHeightUnit);

  // mobile
  const [mobileWidth, setMobileWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.mobileValue);
  const [mobileUnit, setMobileUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.mobileUnit);
  const [mobileHeight, setMobileHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.mobileHeightValue);
  const [mobileHeightUnit, setMobileHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.contentWidth.mobileHeightUnit);
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
                currentDevice: tempDevice
              }
            });
          } else if (unit === 'vh') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                tabletHeightUnit: 'vh',
                currentDevice: tempDevice
              }
            });
          } else if (unit === '%') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                tabletUnit: '%',
                currentDevice: tempDevice
              }
            });
          } else if (unit === 'vw') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                tabletUnit: 'vw',
                currentDevice: tempDevice
              }
            });
          } else {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                tabletUnit: 'px',
                currentDevice: tempDevice
              }
            });
          }
          break;
        case 'mobile':
          if (unit === 'pxh') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                mobileHeightUnit: 'px',
                currentDevice: tempDevice
              }
            });
          } else if (unit === 'vh') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                mobileHeightUnit: 'vh',
                currentDevice: tempDevice
              }
            });
          } else if (unit === '%') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                mobileUnit: '%',
                currentDevice: tempDevice
              }
            });
          } else if (unit === 'vw') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                mobileUnit: 'vw',
                currentDevice: tempDevice
              }
            });
          } else {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                mobileUnit: 'px',
                currentDevice: tempDevice
              }
            });
          }
          break;
        default:
          if (unit === 'pxh') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                desktopHeightUnit: 'px',
                currentDevice: tempDevice
              }
            });
          } else if (unit === 'vh') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                desktopHeightUnit: 'vh',
                currentDevice: tempDevice
              }
            });
          } else if (unit === '%') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                desktopUnit: '%',
                currentDevice: tempDevice
              }
            });
          } else if (unit === 'vw') {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                desktopUnit: 'vw',
                currentDevice: tempDevice
              }
            });
          } else {
            setAttributes({
              contentWidth: {
                ...tempContentWidth,
                desktopUnit: 'px',
                currentDevice: tempDevice
              }
            });
          }
          break;
      }
    };
    const deviceFilter = (tempDevice, width, unit, pxUnit, maxValue, height, heightUnit) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          value: width,
          onChange: value => {
            if (tempDevice === 'desktop') {
              setDesktopWidth(value);
            } else if (tempDevice === 'tablet') {
              setTabletWidth(value);
            } else {
              setMobileWidth(value);
            }
          },
          min: 0,
          max: unit === 'px' ? maxValue : 100,
          step: unit === '%' ? 0.01 : 1,
          allowReset: true,
          resetFallbackValue: unit === 'px' ? pxUnit : 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gs-title-button-units-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
            children: "Unit:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              onClick: () => onClickFilter(tempDevice, 'px'),
              isPressed: unit === 'px' ? true : false,
              children: "px"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              onClick: () => onClickFilter(tempDevice, '%'),
              isPressed: unit === '%' ? true : false,
              children: "%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              onClick: () => onClickFilter(tempDevice, 'vw'),
              isPressed: unit === 'vw' ? true : false,
              children: "vw"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gs-title-button-units-holder",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "gs-title-button-units",
            children: "Container Box Height"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              icon: "desktop",
              iconSize: "20",
              variant: "link",
              isSmall: "true",
              onClick: () => setCurrentDevice('desktop'),
              isPressed: currentDevice === 'desktop' ? true : false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              icon: "tablet",
              iconSize: "20",
              variant: "link",
              isSmall: "true",
              onClick: () => setCurrentDevice('tablet'),
              isPressed: currentDevice === 'tablet' ? true : false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              icon: "smartphone",
              iconSize: "20",
              variant: "link",
              isSmall: "true",
              onClick: () => setCurrentDevice('mobile'),
              isPressed: currentDevice === 'mobile' ? true : false
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          value: height,
          onChange: value => {
            if (tempDevice === 'desktop') {
              setDesktopHeight(value);
            } else if (tempDevice === 'tablet') {
              setTabletHeight(value);
            } else {
              setMobileHeight(value);
            }
          },
          min: 0,
          max: heightUnit === 'px' ? 1000 : 100,
          allowReset: true,
          resetFallbackValue: heightUnit === 'px' ? 1000 : 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gs-title-button-units-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
            children: "Unit:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              onClick: () => onClickFilter(tempDevice, 'pxh'),
              isPressed: heightUnit === 'px' ? true : false,
              children: "px"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              onClick: () => onClickFilter(tempDevice, 'vh'),
              isPressed: heightUnit === 'vh' ? true : false,
              children: "vw"
            })]
          })]
        })]
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [currentDevice === 'desktop' && deviceFilter('desktop', desktopWidth, desktopUnit, 1200, 1600, desktopHeight, desktopHeightUnit), currentDevice === 'tablet' && deviceFilter('tablet', tabletWidth, tabletUnit, 1024, 1600, tabletHeight, tabletHeightUnit), currentDevice === 'mobile' && deviceFilter('mobile', mobileWidth, mobileUnit, 767, 1600, mobileHeight, mobileHeightUnit)]
    });
  };

  // const onSelect = (tabName) => {
  // 	setCurrentDevice(tabName);
  // };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "gs-title-button-units-holder",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gs-title-button-units",
        children: "Container Box Width"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "desktop",
          iconSize: "20",
          variant: "link",
          isSmall: "true",
          onClick: () => setCurrentDevice('desktop'),
          isPressed: currentDevice === 'desktop' ? true : false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "tablet",
          iconSize: "20",
          variant: "link",
          isSmall: "true",
          onClick: () => setCurrentDevice('tablet'),
          isPressed: currentDevice === 'tablet' ? true : false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "smartphone",
          iconSize: "20",
          variant: "link",
          isSmall: "true",
          onClick: () => setCurrentDevice('mobile'),
          isPressed: currentDevice === 'mobile' ? true : false
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gs-title-button-units-tab-panel",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContainerBoxWidth, {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceTabButton);

/***/ },

/***/ "./src/components/DimensionComponent.js"
/*!**********************************************!*\
  !*** ./src/components/DimensionComponent.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DeviceTabButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/DeviceTabButton */ "./src/components/DeviceTabButton.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



// import { Icon } from "@wordpress/icons";
// eslint-disable-next-line import/no-unresolved

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



const DimensionComponent = ({
  label,
  dimension,
  updatedDimension
}) => {
  const [top, setTop] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(dimension.top);
  const [bottom, setBottom] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(dimension.bottom);
  const [left, setLeft] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(dimension.left);
  const [right, setRight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(dimension.right);
  const [locked, setLocked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(dimension.locked);
  const units = [{
    value: 'px',
    label: 'px',
    default: 0
  }, {
    value: '%',
    label: '%',
    default: 10
  }, {
    value: 'em',
    label: 'em',
    default: 0
  }];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updatedDimension({
      top,
      bottom,
      left,
      right,
      locked
    });
  }, [top, bottom, left, right, locked]);
  const onChangeFilter = (position, value) => {
    if (locked === true) {
      setTop(value);
      setLeft(value);
      setRight(value);
      setBottom(value);
    } else {
      switch (position) {
        case 'top':
          setTop(value);
          break;
        case 'bottom':
          setBottom(value);
          break;
        case 'left':
          setLeft(value);
          break;
        case 'right':
          setRight(value);
          break;
      }
    }
  };
  const onChangelock = value => {
    setLocked(value);
    if (locked === true) {
      setLeft(top);
      setRight(top);
      setBottom(top);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "gs-dimension-control",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gs-dimension-control-value",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
          onChange: value => onChangeFilter('top', value),
          value: top,
          units: units,
          label: "Top",
          labelPosition: "bottom"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
          onChange: value => onChangeFilter('left', value),
          value: left,
          units: units,
          label: "left",
          labelPosition: "bottom"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
          onChange: value => onChangeFilter('bottom', value),
          value: bottom,
          units: units,
          label: "bottom",
          labelPosition: "bottom"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
          onChange: value => onChangeFilter('right', value),
          value: right,
          units: units,
          label: "right",
          labelPosition: "bottom"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          icon: "admin-links",
          variant: "tertiary",
          isSmall: "true",
          iconSize: "15",
          onClick: () => onChangelock(!locked),
          isPressed: locked === true ? true : false
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionComponent);

/***/ },

/***/ "./src/components/TabButton.js"
/*!*************************************!*\
  !*** ./src/components/TabButton.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_LayoutOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/LayoutOptions */ "./src/hooks/LayoutOptions.js");
/* harmony import */ var _hooks_AdvanceOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/AdvanceOptions */ "./src/hooks/AdvanceOptions.js");
/* harmony import */ var _hooks_GeneralOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/GeneralOptions */ "./src/hooks/GeneralOptions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





const TabButton = ({
  attributes,
  setAttributes,
  blockName
}) => {
  const onSelect = tabName => {
    console.log('Selecting tab', tabName);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "blockwriter-tab-panel",
    activeClass: "active-tab",
    onSelect: onSelect,
    tabs: [{
      name: 'general',
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-admin-generic"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "General"
        })]
      }),
      className: 'tab-one'
    }, {
      name: 'layout',
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-layout"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "Layout"
        })]
      }),
      className: 'tab-one'
    }, {
      name: 'advanced',
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-admin-settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "Advanced"
        })]
      }),
      className: 'tab-two'
    }],
    children: tab => tab.name === 'general' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hooks_GeneralOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      blockName: blockName
    }) : tab.name === 'layout' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hooks_LayoutOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      blockName: blockName
    }) : tab.name === 'advanced' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hooks_AdvanceOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      blockName: blockName
    }) : null
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabButton);

/***/ },

/***/ "./src/constants/AdvanceAttributes.js"
/*!********************************************!*\
  !*** ./src/constants/AdvanceAttributes.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const advancedOptionsAttributes = {
  animations: {
    type: 'string',
    default: 'none',
    usedBy: 'AnimationPanel'
  },
  onHoverAnimations: {
    type: 'string',
    default: 'none',
    usedBy: 'AnimationPanel'
  },
  displayDateRange: {
    type: 'Object',
    usedBy: 'DateRangeVisibilityPanel'
  },
  showDesktop: {
    type: 'Boolean',
    display: true,
    usedBy: 'DeviceVisibilityPanel'
  },
  showTablet: {
    type: 'Object',
    display: true,
    usedBy: 'DeviceVisibilityPanel'
  },
  showMobile: {
    type: 'Object',
    display: true,
    usedBy: 'DeviceVisibilityPanel'
  },
  userVisibility: {
    type: 'string',
    default: 'none',
    usedBy: 'UserVisibilityPanel'
  },
  selectedRoles: {
    type: 'array',
    default: '[]',
    usedBy: 'UserVisibilityPanel'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advancedOptionsAttributes);

/***/ },

/***/ "./src/constants/LayoutAttributes.js"
/*!*******************************************!*\
  !*** ./src/constants/LayoutAttributes.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const LayoutOptionsAttributes = {
  header: {
    type: 'string',
    default: ''
  },
  headerBgColor: {
    type: 'string',
    default: '#000'
  },
  headerTextColor: {
    type: 'string',
    default: '#eee'
  },
  headerIcon: {
    type: 'string',
    default: 'unfold'
  },
  headerIconColor: {
    type: 'string',
    default: '#fff'
  },
  bodyBgColor: {
    type: 'string'
  },
  bodyTextColor: {
    type: 'string'
  },
  borderStyle: {
    type: 'string',
    default: 'solid'
  },
  borderWidth: {
    type: 'number',
    default: 0
  },
  borderColor: {
    type: 'string'
  },
  borderRadius: {
    type: 'number',
    default: 2
  },
  marginBottom: {
    type: 'number'
  },
  collapsedAll: {
    type: 'boolean',
    default: false
  },
  changed: {
    type: 'boolean',
    default: false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutOptionsAttributes);

/***/ },

/***/ "./src/constants/animations.js"
/*!*************************************!*\
  !*** ./src/constants/animations.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const animations = [{
  label: 'None',
  value: 'none'
}, {
  label: 'Flash',
  value: 'flash'
}, {
  label: 'Pulse',
  value: 'pulse'
}, {
  label: 'Rubber Band',
  value: 'rubberBand'
}, {
  label: 'Shake X',
  value: 'shakeX'
}, {
  label: 'Shake Y',
  value: 'shakeY'
}, {
  label: 'Head Shake',
  value: 'headShake'
}, {
  label: 'Swing',
  value: 'swing'
}, {
  label: 'Tada',
  value: 'tada'
}, {
  label: 'Wobble',
  value: 'wobble'
}, {
  label: 'Jello',
  value: 'jello'
}, {
  label: 'Heart Beat',
  value: 'heartbeat'
}, {
  label: 'Back In Down',
  value: 'backInDown'
}, {
  label: 'Back Out Left',
  value: 'backOutLeft'
}, {
  label: 'Back Out Right',
  value: 'backOutRight'
}, {
  label: 'Back Out Up',
  value: 'backOutUp'
}, {
  label: 'Bounce In',
  value: 'bounceIn'
}, {
  label: 'Bounce In Down',
  value: 'bounceInDown'
}, {
  label: 'Bounce In Left',
  value: 'bounceInLeft'
}, {
  label: 'Bounce In Right',
  value: 'bounceInRight'
}, {
  label: 'Bounce In Up',
  value: 'bounceInUp'
}, {
  label: 'Bounce Out',
  value: 'bounceOut'
}, {
  label: 'Bounce Out Down',
  value: 'bounceOutDown'
}, {
  label: 'Bounce Out Left',
  value: 'bounceOutLeft'
}, {
  label: 'Bounce Out Right',
  value: 'bounceOutRight'
}, {
  label: 'Bounce Out Up',
  value: 'bounceOutUp'
}, {
  label: 'Fade In',
  value: 'fadeIn'
}, {
  label: 'Fade In Down',
  value: 'fadeInDown'
}, {
  label: 'Fade In Down Big',
  value: 'fadeInDownBig'
}, {
  label: 'Fade In Left',
  value: 'fadeInLeft'
}, {
  label: 'Fade In Left Big',
  value: 'fadeInLeftBig'
}, {
  label: 'Fade In Right',
  value: 'fadeInRight'
}, {
  label: 'Fade In Right Big',
  value: 'fadeInRightBig'
}, {
  label: 'Fade In Up',
  value: 'fadeInUp'
}, {
  label: 'Fade In Up Big',
  value: 'fadeInUpBig'
}, {
  label: 'Fade In Top Left',
  value: 'fadeInTopLeft'
}, {
  label: 'Fade In Top Right',
  value: 'fadeInTopRight'
}, {
  label: 'Fade In Bottom Left',
  value: 'fadeInBottomLeft'
}, {
  label: 'Fade In Bottom Right',
  value: 'fadeInBottomRight'
}, {
  label: 'Fade Out',
  value: 'fadeOut'
}, {
  label: 'Fade Out Down',
  value: 'fadeOutDown'
}, {
  label: 'Fade Out Down Big',
  value: 'fadeOutDownBig'
}, {
  label: 'Fade Out Left',
  value: 'fadeOutLeft'
}, {
  label: 'Fade Out Left Big',
  value: 'fadeOutLeftBig'
}, {
  label: 'Fade Out Right',
  value: 'fadeOutRight'
}, {
  label: 'Fade Out Right Big',
  value: 'fadeOutRightBig'
}, {
  label: 'Fade Out Up',
  value: 'fadeOutUp'
}, {
  label: 'Fade Out Up Big',
  value: 'fadeOutUpBig'
}, {
  label: 'Fade Out Top Left',
  value: 'fadeOutTopLeft'
}, {
  label: 'Fade Out Top Right',
  value: 'fadeOutTopRight'
}, {
  label: 'Fade Out Bottom Left',
  value: 'fadeOutBottomLeft'
}, {
  label: 'Fade Out Bottom Right',
  value: 'fadeOutBottomRight'
}, {
  label: 'Flip',
  value: 'flip'
}, {
  label: 'Flip In X',
  value: 'flipInX'
}, {
  label: 'Flip In Y',
  value: 'flipInY'
}, {
  label: 'Flip Out X',
  value: 'flipOutX'
}, {
  label: 'Flip Out Y',
  value: 'flipOutY'
}, {
  label: 'Light Speed In Right',
  value: 'lightSpeedInRight'
}, {
  label: 'Light Speed In Left',
  value: 'lightSpeedInLeft'
}, {
  label: 'Light Speed Out Right',
  value: 'lightSpeedOutRight'
}, {
  label: 'Light Speed Out Left',
  value: 'lightSpeedOutLeft'
}, {
  label: 'Rotate In',
  value: 'rotateIn'
}, {
  label: 'Rotate In Down Left',
  value: 'rotateInDownLeft'
}, {
  label: 'Rotate In Down Right',
  value: 'rotateInDownRight'
}, {
  label: 'Rotate In Up Left',
  value: 'rotateInUpLeft'
}, {
  label: 'Rotate In Up Right',
  value: 'rotateInUpRight'
}, {
  label: 'Rotate Out',
  value: 'rotateOut'
}, {
  label: 'Rotate Out Down Left',
  value: 'rotateOutDownLeft'
}, {
  label: 'Rotate Out Down Right',
  value: 'rotateOutDownRight'
}, {
  label: 'Rotate Out Up Left',
  value: 'rotateOutUpLeft'
}, {
  label: 'Rotate Out Up Right',
  value: 'rotateOutUpRight'
}, {
  label: 'Hinge',
  value: 'hinge'
}, {
  label: 'Jack In The Box',
  value: 'jackInTheBox'
}, {
  label: 'Roll In',
  value: 'rollIn'
}, {
  label: 'Roll Out',
  value: 'rollOut'
}, {
  label: 'Zoom In',
  value: 'zoomIn'
}, {
  label: 'Zoom In Down',
  value: 'zoomInDown'
}, {
  label: 'Zoom In Left',
  value: 'zoomInLeft'
}, {
  label: 'Zoom In Right',
  value: 'zoomInRight'
}, {
  label: 'Zoom In Up',
  value: 'zoomInUp'
}, {
  label: 'Zoom Out',
  value: 'zoomOut'
}, {
  label: 'Zoom Out Down',
  value: 'zoomOutDown'
}, {
  label: 'Zoom Out Left',
  value: 'zoomOutLeft'
}, {
  label: 'Zoom Out Right',
  value: 'zoomOutRight'
}, {
  label: 'Zoom Out Up',
  value: 'zoomOutUp'
}, {
  label: 'Slide In Down',
  value: 'slideInDown'
}, {
  label: 'Slide In Left',
  value: 'slideInLeft'
}, {
  label: 'Slide In Right',
  value: 'slideInRight'
}, {
  label: 'Slide In Up',
  value: 'slideInUp'
}, {
  label: 'Slide Out Down',
  value: 'slideOutDown'
}, {
  label: 'Slide Out Left',
  value: 'slideOutLeft'
}, {
  label: 'Slide Out Right',
  value: 'slideOutRight'
}, {
  label: 'Slide Out Up',
  value: 'slideOutUp'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animations);

/***/ },

/***/ "./src/constants/blockOptions.js"
/*!***************************************!*\
  !*** ./src/constants/blockOptions.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const BlockOptions = {
  'advanced-header': {
    advanced: ['AnimationPanel', 'DateRangeVisibilityPanel', 'DeviceVisibilityPanel', 'UserVisibilityPanel'],
    layout: {},
    general: ['SectionSettingsPanel', 'TextColorPanel', 'BackgroundColorPanel'],
    blockControlOptions: {}
  },
  buttons: {
    advanced: ['AnimationPanel', 'DateRangeVisibilityPanel', 'DeviceVisibilityPanel', 'UserVisibilityPanel'],
    layout: ['BackgroundPanel', 'BorderControlPanel', 'BorderPanel', 'BoxShadowPanel', 'DisplayTypePanel', 'PositionPanel', 'ShapeDividerPanel', 'SpacingPanel', 'TextColorPanel', 'ZIndexPanel'],
    general: [],
    blockControlOptions: {}
  },
  carousel: {
    advanced: ['AnimationPanel', 'DateRangeVisibilityPanel', 'DeviceVisibilityPanel', 'UserVisibilityPanel'],
    layout: [],
    general: ['SectionSettingsPanel'],
    blockControlOptions: {}
  },
  columns: {
    advanced: ['AnimationPanel', 'DateRangeVisibilityPanel', 'DeviceVisibilityPanel', 'UserVisibilityPanel'],
    layout: [],
    general: ['ColumnsSettingsPanel'],
    blockControlOptions: {}
  },
  icon: {
    advanced: ['AnimationPanel', 'DateRangeVisibilityPanel', 'DeviceVisibilityPanel', 'UserVisibilityPanel'],
    layout: [],
    general: ['SectionSettingsPanel'],
    blockControlOptions: {}
  },
  section: {
    advanced: ['AnimationPanel', 'DateRangeVisibilityPanel', 'DeviceVisibilityPanel', 'UserVisibilityPanel'],
    layout: [],
    general: ['SectionSettingsPanel'],
    blockControlOptions: {}
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockOptions);

/***/ },

/***/ "./src/hooks/AdvanceOptions.js"
/*!*************************************!*\
  !*** ./src/hooks/AdvanceOptions.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvanceOptions: () => (/* binding */ AdvanceOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspectors_advanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inspectors/advanced */ "./src/inspectors/advanced/index.js");
/* harmony import */ var _constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/blockOptions */ "./src/constants/blockOptions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */




const AdvanceOptions = ({
  attributes,
  setAttributes,
  blockName
}) => {
  const options = _constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__["default"][blockName].advanced || [];
  const panels = {
    AnimationPanel: _inspectors_advanced__WEBPACK_IMPORTED_MODULE_1__.AnimationPanel,
    // DateRangeVisibilityPanel,
    DeviceVisibilityPanel: _inspectors_advanced__WEBPACK_IMPORTED_MODULE_1__.DeviceVisibilityPanel,
    // TypographyPanel,
    UserVisibilityPanel: _inspectors_advanced__WEBPACK_IMPORTED_MODULE_1__.UserVisibilityPanel
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "blockwriter-styling-section",
      children: options.map(name => {
        const Panel = panels[name];
        return Panel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Panel, {
          attributes: attributes,
          setAttributes: setAttributes
        }, name) : null;
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvanceOptions);

/***/ },

/***/ "./src/hooks/GeneralOptions.js"
/*!*************************************!*\
  !*** ./src/hooks/GeneralOptions.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralOptions: () => (/* binding */ GeneralOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspectors_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inspectors/general */ "./src/inspectors/general/index.js");
/* harmony import */ var _constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/blockOptions */ "./src/constants/blockOptions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */




const GeneralOptions = ({
  attributes,
  setAttributes,
  blockName
}) => {
  const options = _constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__["default"][blockName].general || [];
  const panels = {
    SectionSettingsPanel: _inspectors_general__WEBPACK_IMPORTED_MODULE_1__.SectionSettingsPanel,
    ColumnsSettingsPanel: _inspectors_general__WEBPACK_IMPORTED_MODULE_1__.ColumnsSettingsPanel
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "blockwriter-styling-section",
      children: options.map(name => {
        const Panel = panels[name];
        return Panel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Panel, {
          attributes: attributes,
          setAttributes: setAttributes
        }, name) : null;
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralOptions);

/***/ },

/***/ "./src/hooks/LayoutOptions.js"
/*!************************************!*\
  !*** ./src/hooks/LayoutOptions.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutOptions: () => (/* binding */ LayoutOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inspectors/layout */ "./src/inspectors/layout/index.js");
/* harmony import */ var _constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/blockOptions */ "./src/constants/blockOptions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */




console.log(_constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__["default"]);
const LayoutOptions = ({
  attributes,
  setAttributes,
  blockName
}) => {
  const options = _constants_blockOptions__WEBPACK_IMPORTED_MODULE_2__["default"][blockName]?.layout || [];
  console.log(options);
  const panels = {
    BackgroundPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.BackgroundPanel,
    BorderPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.BorderPanel,
    BoxShadowPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.BoxShadowPanel,
    DisplayTypePanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.DisplayTypePanel,
    PositionPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.PositionPanel,
    ShapeDividerPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.ShapeDividerPanel,
    SpacingPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.SpacingPanel,
    TextColorPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.TextColorPanel,
    ZIndexPanel: _inspectors_layout__WEBPACK_IMPORTED_MODULE_1__.ZIndexPanel
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "blockwriter-styling-section",
      children: options.map(name => {
        const Panel = panels[name];
        return Panel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Panel, {
          attributes: attributes,
          setAttributes: setAttributes
        }, name) : null;
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutOptions);

/***/ },

/***/ "./src/hooks/getBWBlockName.js"
/*!*************************************!*\
  !*** ./src/hooks/getBWBlockName.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBWBlockName = blockName => {
  if (typeof blockName === 'string') {
    const parts = blockName.split('/');
    return parts.length > 1 ? parts[1] : blockName;
  }
  return '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBWBlockName);

/***/ },

/***/ "./src/inspectors/advanced/AnimationPanel.jsx"
/*!****************************************************!*\
  !*** ./src/inspectors/advanced/AnimationPanel.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/animations */ "./src/constants/animations.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const AnimationPanel = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation Settings', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation', 'blockwriter'),
        value: attributes.animations,
        options: _constants_animations__WEBPACK_IMPORTED_MODULE_0__["default"],
        onChange: value => setAttributes({
          animations: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('OnHover Animation', 'blockwriter'),
        value: attributes.onHoverAnimations,
        options: _constants_animations__WEBPACK_IMPORTED_MODULE_0__["default"],
        onChange: value => setAttributes({
          onHoverAnimations: value
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationPanel);

/***/ },

/***/ "./src/inspectors/advanced/DeviceVisibilityPanel.jsx"
/*!***********************************************************!*\
  !*** ./src/inspectors/advanced/DeviceVisibilityPanel.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DeviceVisibilityPanel = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Device settings', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display on Desktop', 'blockwriter'),
        checked: attributes.showDesktop,
        onChange: value => setAttributes({
          showDesktop: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display on Tablet', 'blockwriter'),
        checked: attributes.showTablet,
        onChange: value => setAttributes({
          showTablet: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display on Mobile', 'blockwriter'),
        checked: attributes.showMobile,
        onChange: value => setAttributes({
          showMobile: value
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceVisibilityPanel);

/***/ },

/***/ "./src/inspectors/advanced/TypographyPanel.jsx"
/*!*****************************************************!*\
  !*** ./src/inspectors/advanced/TypographyPanel.jsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DimensionComponent */ "./src/components/DimensionComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';






const TypographyPanel = ({
  attributes,
  setAttributes
}) => {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentBgOption, setCurrentBgOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageOverlay, setImageOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [columns, setColumns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [linkColor, setLinkColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [focalPoint, setFocalPoint] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0.5,
    y: 0.5
  });
  const url = 'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{
    name: 'red',
    color: '#f00'
  }];
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  const {
    margin,
    padding
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'blockwriter'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "Z index the section"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyPanel);

/***/ },

/***/ "./src/inspectors/advanced/UserVisibilityPanel.jsx"
/*!*********************************************************!*\
  !*** ./src/inspectors/advanced/UserVisibilityPanel.jsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const UserVisibilityPanel = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User Visibility', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User Status', 'blockwriter'),
        value: attributes.userVisibility,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Users', 'blockwriter'),
          value: 'all'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logged In Users', 'blockwriter'),
          value: 'logged-in'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logged Out Users', 'blockwriter'),
          value: 'logged-out'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specific Roles', 'blockwriter'),
          value: 'specific-roles'
        }],
        onChange: value => setAttributes({
          userVisibility: value
        })
      }), attributes.userVisibility === 'specific-roles' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Roles', 'blockwriter'),
        value: attributes.selectedRoles || [],
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Administrator', 'blockwriter'),
          value: 'administrator'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editor', 'blockwriter'),
          value: 'editor'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author ', 'blockwriter'),
          value: 'author'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contributor', 'blockwriter'),
          value: 'contributor'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subscriber', 'blockwriter'),
          value: 'subscriber'
        }],
        onChange: value => setAttributes({
          selectedRoles: value
        }),
        multiple: true
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserVisibilityPanel);

/***/ },

/***/ "./src/inspectors/advanced/index.js"
/*!******************************************!*\
  !*** ./src/inspectors/advanced/index.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationPanel: () => (/* reexport safe */ _advanced_AnimationPanel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   DeviceVisibilityPanel: () => (/* reexport safe */ _advanced_DeviceVisibilityPanel__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   TypographyPanel: () => (/* reexport safe */ _advanced_TypographyPanel__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   UserVisibilityPanel: () => (/* reexport safe */ _advanced_UserVisibilityPanel__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _advanced_AnimationPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../advanced/AnimationPanel */ "./src/inspectors/advanced/AnimationPanel.jsx");
/* harmony import */ var _advanced_DeviceVisibilityPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../advanced/DeviceVisibilityPanel */ "./src/inspectors/advanced/DeviceVisibilityPanel.jsx");
/* harmony import */ var _advanced_TypographyPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../advanced/TypographyPanel */ "./src/inspectors/advanced/TypographyPanel.jsx");
/* harmony import */ var _advanced_UserVisibilityPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../advanced/UserVisibilityPanel */ "./src/inspectors/advanced/UserVisibilityPanel.jsx");

// export { default as DateRangeVisibilityPanel } from '../advanced/DateRangeVisibilityPanel';




/***/ },

/***/ "./src/inspectors/general/ColumnsSettingsPanel.jsx"
/*!*********************************************************!*\
  !*** ./src/inspectors/general/ColumnsSettingsPanel.jsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const ColumnsSettingsPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    layout,
    paddingY,
    background,
    container
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Column Layout Settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Selector",
      value: layout,
      options: [{
        label: 'One Column',
        value: 'layout-one'
      }, {
        label: 'Two Column',
        value: 'layout-two'
      }, {
        label: 'Three Colum',
        value: 'layout-three'
      }, {
        label: 'Four Column',
        value: 'layout-four'
      }, {
        label: 'Five Column',
        value: 'layout-five'
      }, {
        label: 'Six Column',
        value: 'layout-six'
      }, {
        label: '8/12 + 4/12',
        value: 'layout-eight-four'
      }, {
        label: '4/12 + 8/12',
        value: 'layout-four-eight'
      }, {
        label: '9/12 + 3/12',
        value: 'layout-nine-three'
      }, {
        label: '3/12 + 9/12',
        value: 'layout-three-nine'
      }, {
        label: '7/12 + 5/12',
        value: 'layout-seven-five'
      }, {
        label: '5/12 + 7/12',
        value: 'layout-five-seven'
      }, {
        label: '80/20',
        value: 'layout-eighty-twenty'
      }, {
        label: '20/80',
        value: 'layout-twenty-eighty'
      }, {
        label: '3/12 + 3/12 + 6/12',
        value: 'layout-three-three-six'
      }, {
        label: '6/12 + 3/12 + 3/12',
        value: 'layout-six-three-three'
      }, {
        label: '4/12 + 4/12 + 4/12',
        value: 'layout-four-four-four'
      }, {
        label: '2/12 + 4/12 + 4/12 + 2/12',
        value: 'layout-two-four-four-two'
      }, {
        label: 'None',
        value: 'layout-none'
      }],
      onChange: value => setAttributes({
        layout: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Container",
      value: container,
      options: [{
        label: 'Container',
        value: 'container'
      }, {
        label: 'Fluid',
        value: 'container-fluid'
      }],
      onChange: value => setAttributes({
        container: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Vertical Spacing",
      value: paddingY,
      options: [{
        label: 'None',
        value: 'py-0'
      }, {
        label: 'Small',
        value: 'py-2'
      }, {
        label: 'Medium',
        value: 'py-4'
      }, {
        label: 'Large',
        value: 'py-5'
      }],
      onChange: value => setAttributes({
        paddingY: value
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnsSettingsPanel);

/***/ },

/***/ "./src/inspectors/general/SectionSettingsPanel.jsx"
/*!*********************************************************!*\
  !*** ./src/inspectors/general/SectionSettingsPanel.jsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const SectionSettingsPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    layout,
    container,
    background,
    backgroundColor,
    backgroundImage,
    tagType,
    paddingY,
    borderStyle,
    margin
  } = attributes;
  const defaultBorder = {
    color: '#72aee6',
    style: 'dashed',
    width: '1px'
  };
  const [borders, setBorders] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder
  });
  const onChange = newBorders => setBorders(newBorders);
  const [paddingSize, setPaddingSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [border, setBorder] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Section Settings",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Selector",
      value: tagType,
      options: [{
        label: 'Section',
        value: 'section'
      }, {
        label: 'Div',
        value: 'div'
      }, {
        label: 'Aside',
        value: 'aside'
      }, {
        label: 'Main',
        value: 'main'
      }, {
        label: 'Article',
        value: 'article'
      }, {
        label: 'Header',
        value: 'header'
      }, {
        label: 'Footer',
        value: 'footer'
      }],
      onChange: value => setAttributes({
        tagType: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Layout",
      value: layout,
      options: [{
        label: 'One Column',
        value: 'layout-one'
      }, {
        label: 'Two Column',
        value: 'layout-two'
      }, {
        label: 'Three Column',
        value: 'layout-three'
      }, {
        label: 'Four Column',
        value: 'layout-four'
      }, {
        label: 'Five Column',
        value: 'layout-five'
      }, {
        label: 'Six Column',
        value: 'layout-six'
      }, {
        label: '8/12 + 4/12',
        value: 'layout-eight-four'
      }, {
        label: '4/12 + 8/12',
        value: 'layout-four-eight'
      }, {
        label: '9/12 + 3/12',
        value: 'layout-nine-three'
      }, {
        label: '3/12 + 9/12',
        value: 'layout-three-nine'
      }, {
        label: '7/12 + 5/12',
        value: 'layout-seven-five'
      }, {
        label: '5/12 + 7/12',
        value: 'layout-five-seven'
      }, {
        label: '80/20',
        value: 'layout-eighty-twenty'
      }, {
        label: '20/80',
        value: 'layout-twenty-eighty'
      }, {
        label: '3/12 + 3/12 + 6/12',
        value: 'layout-three-three-six'
      }, {
        label: '6/12 + 3/12 + 3/12',
        value: 'layout-six-three-three'
      }, {
        label: '4/12 + 4/12 + 4/12',
        value: 'layout-four-four-four'
      }, {
        label: '2/12 + 4/12 + 4/12 + 2/12',
        value: 'layout-two-four-four-two'
      }, {
        label: 'None',
        value: 'layout-none'
      }],
      onChange: value => setAttributes({
        layout: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Container",
      value: container,
      options: [{
        label: 'Container',
        value: 'container'
      }, {
        label: 'Fluid',
        value: 'container-fluid'
      }, {
        label: 'None',
        value: 'none'
      }],
      onChange: value => setAttributes({
        container: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Vertical Spacing",
      value: paddingY,
      options: [{
        label: 'None',
        value: 'py-0'
      }, {
        label: 'Small',
        value: 'py-2'
      }, {
        label: 'Medium',
        value: 'py-4'
      }, {
        label: 'Large',
        value: 'py-5'
      }],
      onChange: value => setAttributes({
        paddingY: value
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionSettingsPanel);

/***/ },

/***/ "./src/inspectors/general/index.js"
/*!*****************************************!*\
  !*** ./src/inspectors/general/index.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnsSettingsPanel: () => (/* reexport safe */ _ColumnsSettingsPanel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SectionSettingsPanel: () => (/* reexport safe */ _SectionSettingsPanel__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _ColumnsSettingsPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnsSettingsPanel */ "./src/inspectors/general/ColumnsSettingsPanel.jsx");
/* harmony import */ var _SectionSettingsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionSettingsPanel */ "./src/inspectors/general/SectionSettingsPanel.jsx");



/***/ },

/***/ "./src/inspectors/layout/BackgroundPanel.jsx"
/*!***************************************************!*\
  !*** ./src/inspectors/layout/BackgroundPanel.jsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const BackgroundPanel = ({
  attributes,
  setAttributes
}) => {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [currentBgOption, setCurrentBgOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [imageOverlay, setImageOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [columns, setColumns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  const [linkColor, setLinkColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
  const [focalPoint, setFocalPoint] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    x: 0.5,
    y: 0.5
  });
  const url = 'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{
    name: 'red',
    color: '#f00'
  }];
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background', 'blockwriter'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gs-title-button-units-section",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            icon: "admin-customizer",
            variant: "secondary",
            isSmall: "true",
            iconSize: "15",
            onClick: () => setCurrentBgOption('color'),
            isPressed: currentBgOption === 'color' ? true : false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            icon: "laptop",
            variant: "secondary",
            isSmall: "true",
            iconSize: "15",
            onClick: () => setCurrentBgOption('gradient'),
            isPressed: currentBgOption === 'gradient' ? true : false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            icon: "format-image",
            variant: "secondary",
            isSmall: "true",
            iconSize: "15",
            onClick: () => setCurrentBgOption('image'),
            isPressed: currentBgOption === 'image' ? true : false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            icon: "video-alt2",
            variant: "secondary",
            isSmall: "true",
            iconSize: "15",
            onClick: () => setCurrentBgOption('video'),
            isPressed: currentBgOption === 'video' ? true : false
          })]
        })
      }), currentBgOption === 'color' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
          children: "Select Background Color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
          color: color,
          onChange: setColor,
          enableAlpha: true,
          defaultValue: "#000"
        })]
      }), currentBgOption === 'gradient' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
            children: "Select Background Gradient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.GradientPicker, {
            value: gradient,
            onChange: currentGradient => setGradient(currentGradient),
            gradients: [{
              name: 'JShine',
              gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
              slug: 'jshine'
            }, {
              name: 'Moonlit Asteroid',
              gradient: 'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
              slug: 'moonlit-asteroid'
            }, {
              name: 'Rastafarie',
              gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
              slug: 'rastafari'
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enable Image Overlay', 'blockwriter'),
          help: 'Add overlay to image.',
          checked: imageOverlay,
          onChange: newValue => {
            setImageOverlay(newValue);
          }
        }), imageOverlay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figure", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload
              // onSelect={onSelectImage}
              , {
                allowedTypes: ['image']
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
                ,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  className: 'button button-large image-select-button',
                  onClick: open,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon, {
                    icon: "format-image"
                  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Change Image', 'jsforwpblocks')]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FocalPointPicker, {
            __nextHasNoMarginBottom: true,
            url: url,
            value: focalPoint,
            onDragStart: setFocalPoint,
            onDrag: setFocalPoint,
            onChange: setFocalPoint
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: style
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Attachment', 'blockwriter'),
            labelPosition: "side"
            // value={attributes.htmlTag}
            ,
            options: [{
              label: 'Scroll',
              value: 'scroll'
            }, {
              label: 'Fixed',
              value: 'fixed'
            }],
            onChange: value => {
              setAttributes({
                htmlTag: value
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Blend Mode', 'blockwriter'),
            labelPosition: "side"
            // value={attributes.htmlTag}
            ,
            options: [{
              label: 'Normal',
              value: 'div'
            }, {
              label: 'Multiple',
              value: 'header'
            }, {
              label: 'Screen',
              value: 'footer'
            }, {
              label: 'Overlay',
              value: 'main'
            }, {
              label: 'Darken',
              value: 'article'
            }, {
              label: 'Lighten',
              value: 'section'
            }, {
              label: 'Color Dodge',
              value: 'aside'
            }, {
              label: 'Saturation',
              value: 'figure'
            }, {
              label: 'Color',
              value: 'figcaption'
            }]
            // onChange={(value) => {
            //   setAttributes({ htmlTag: value });
            // }}
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'blockwriter'),
            labelPosition: "side"
            // value={attributes.htmlTag}
            ,
            options: [{
              label: 'No Repeat',
              value: 'no-repeat'
            }, {
              label: 'Repeat',
              value: 'repeat'
            }, {
              label: 'Repeat-X',
              value: 'repeat-x'
            }, {
              label: 'Repeat-Y',
              value: 'repeat-y'
            }]
            // onChange={(value) => {
            //   setAttributes({ htmlTag: value });
            // }}
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'blockwriter'),
            labelPosition: "side"
            // value={attributes.htmlTag}
            ,
            options: [{
              label: 'Auto',
              value: 'no-repeat'
            }, {
              label: 'Cover',
              value: 'repeat'
            }, {
              label: 'Contain',
              value: 'repeat-x'
            }, {
              label: 'Custom',
              value: 'repeat-y'
            }]
            // onChange={(value) => {
            //   setAttributes({ htmlTag: value });
            // }}
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Opacity', 'blockwriter'),
            value: columns,
            onChange: value => setColumns(value),
            min: 0,
            step: 0.01,
            max: 1,
            allowReset: "true",
            resetFallbackValue: 0.5
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundPanel);

/***/ },

/***/ "./src/inspectors/layout/BorderControlPanel.jsx"
/*!******************************************************!*\
  !*** ./src/inspectors/layout/BorderControlPanel.jsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';





const BorderControlPanel = ({
  attributes,
  setAttributes
}) => {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentBgOption, setCurrentBgOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageOverlay, setImageOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [columns, setColumns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [linkColor, setLinkColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [focalPoint, setFocalPoint] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0.5,
    y: 0.5
  });
  const url = 'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{
    name: 'red',
    color: '#f00'
  }];
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Repeat', 'blockwriter'),
        labelPosition: "side"
        // value={attributes.htmlTag}
        ,
        options: [{
          label: 'Default',
          value: 'no-repeat'
        }, {
          label: 'None',
          value: 'repeat'
        }, {
          label: 'Solid',
          value: 'repeat-x'
        }, {
          label: 'Dotted',
          value: 'repeat-y'
        }, {
          label: 'Dashed',
          value: 'no-repeat'
        }, {
          label: 'Doubled',
          value: 'repeat'
        }, {
          label: 'Groove',
          value: 'repeat-x'
        }, {
          label: 'Inset',
          value: 'repeat-y'
        }, {
          label: 'Outset',
          value: 'repeat-y'
        }, {
          label: 'Ridget',
          value: 'repeat-y'
        }]
        // onChange={(value) => {
        //   setAttributes({ htmlTag: value });
        // }}
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Width"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Radius"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('normal'),
          isPressed: linkColor === 'normal' ? true : false,
          children: "Normal"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('hover'),
          isPressed: linkColor === 'hover' ? true : false,
          children: "Hover"
        })]
      }), linkColor === 'normal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
        asButtons: "true",
        colors: colors,
        value: color,
        onChange: color => setColor(color),
        headingLevel: "2"
      }), linkColor === 'hover' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
        asButtons: "true",
        colors: colors,
        value: color,
        onChange: color => setColor(color),
        headingLevel: "2"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControlPanel);

/***/ },

/***/ "./src/inspectors/layout/BorderPanel.jsx"
/*!***********************************************!*\
  !*** ./src/inspectors/layout/BorderPanel.jsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const BorderPanel = ({
  attributes,
  setAttributes
}) => {
  const colors = [{
    name: 'Blue 20',
    color: '#72aee6'
  }];
  const defaultBorder = {
    color: '#72aee6',
    style: 'dashed',
    width: '1px'
  };
  const [borders, setBorders] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder
  });
  const onChange = newBorders => setBorders(newBorders);

  // const [border, setBorder] = useState();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Settings'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BorderBoxControl, {
      __next40pxDefaultSize: true,
      colors: colors,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Borders'),
      onChange: onChange,
      value: borders
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderPanel);

/***/ },

/***/ "./src/inspectors/layout/BoxShadowPanel.jsx"
/*!**************************************************!*\
  !*** ./src/inspectors/layout/BoxShadowPanel.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';





const BoxShadowPanel = ({
  attributes,
  setAttributes
}) => {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentBgOption, setCurrentBgOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageOverlay, setImageOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [columns, setColumns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [linkColor, setLinkColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [focalPoint, setFocalPoint] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0.5,
    y: 0.5
  });
  const url = 'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{
    name: 'red',
    color: '#f00'
  }];
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Box Shadow', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Color"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
        color: color,
        onChange: setColor,
        enableAlpha: true,
        defaultValue: "#000"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'blockwriter'),
        value: columns,
        onChange: value => setColumns(value),
        min: 0,
        max: 100,
        allowReset: "true",
        resetFallbackValue: 0.5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'blockwriter'),
        value: columns,
        onChange: value => setColumns(value),
        min: 0,
        max: 100,
        allowReset: "true",
        resetFallbackValue: 0.5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur', 'blockwriter'),
        value: columns,
        onChange: value => setColumns(value),
        min: 0,
        max: 100,
        allowReset: "true",
        resetFallbackValue: 0.5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spread', 'blockwriter'),
        value: columns,
        onChange: value => setColumns(value),
        min: 0,
        max: 100,
        allowReset: "true",
        resetFallbackValue: 0.5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('normal'),
          isPressed: linkColor === 'normal' ? true : false,
          children: "Outset"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('hover'),
          isPressed: linkColor === 'hover' ? true : false,
          children: "Inset"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxShadowPanel);

/***/ },

/***/ "./src/inspectors/layout/DisplayTypePanel.jsx"
/*!****************************************************!*\
  !*** ./src/inspectors/layout/DisplayTypePanel.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DisplayTypePanel = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Option', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Type', 'blockwriter'),
        labelPosition: "side",
        value: attributes.displayType,
        options: [{
          label: 'Default',
          value: 'default'
        }, {
          label: 'Block',
          value: 'block'
        }, {
          label: 'Inline Block',
          value: 'inline-block'
        }, {
          label: 'Flex',
          value: 'flex'
        }, {
          label: 'Inline Flex',
          value: 'inline-flex'
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flex Direction', 'blockwriter'),
        labelPosition: "side",
        value: attributes.positionType,
        options: [{
          label: 'Default',
          value: 'default'
        }, {
          label: 'Row',
          value: 'row'
        }, {
          label: 'Row Reverse',
          value: 'row-reverse'
        }, {
          label: 'Column',
          value: 'column'
        }, {
          label: 'Column Reverse',
          value: 'column-reverse'
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flex Wrap', 'blockwriter'),
        labelPosition: "side",
        value: attributes.positionType,
        options: [{
          label: 'Default',
          value: 'default'
        }, {
          label: 'Wrap',
          value: 'wrap'
        }, {
          label: 'Wrap Reverse',
          value: 'wrap-reverse'
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justify Content', 'blockwriter'),
        labelPosition: "side",
        value: attributes.positionType,
        options: [{
          label: 'Default',
          value: 'default'
        }, {
          label: 'Flex Start',
          value: 'flex-start'
        }, {
          label: 'Flex End',
          value: 'flex-end'
        }, {
          label: 'Center',
          value: 'center'
        }, {
          label: 'Space Between',
          value: 'space-between'
        }, {
          label: 'Space Around',
          value: 'space-around'
        }, {
          label: 'Space Evenly',
          value: 'space-evenly'
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align Item', 'blockwriter'),
        labelPosition: "side",
        value: attributes.positionType,
        options: [{
          label: 'Default',
          value: 'default'
        }, {
          label: 'Flex Start',
          value: 'flex-start'
        }, {
          label: 'Flex End',
          value: 'flex-end'
        }, {
          label: 'Center',
          value: 'center'
        }, {
          label: 'Stretch',
          value: 'stretch'
        }, {
          label: 'Baseline',
          value: 'baseline'
        }]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTypePanel);

/***/ },

/***/ "./src/inspectors/layout/PositionPanel.jsx"
/*!*************************************************!*\
  !*** ./src/inspectors/layout/PositionPanel.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


// import DimensionControl from '@wordpress/components/build-types/dimension-control';

const PositionPanel = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'blockwriter'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position Type', 'blockwriter'),
        labelPosition: "side",
        value: attributes.positionType,
        options: [{
          label: 'Default',
          value: 'default'
        }, {
          label: 'Relative',
          value: 'relative'
        }, {
          label: 'Absolute',
          value: 'absolute'
        }, {
          label: 'Fixed',
          value: 'fixed'
        }, {
          label: 'Sticky',
          value: 'sticky'
        }]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositionPanel);

/***/ },

/***/ "./src/inspectors/layout/ShapeDividerPanel.jsx"
/*!*****************************************************!*\
  !*** ./src/inspectors/layout/ShapeDividerPanel.jsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';





const ShapeDividerPanel = ({
  attributes,
  setAttributes
}) => {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentBgOption, setCurrentBgOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageOverlay, setImageOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [columns, setColumns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [linkColor, setLinkColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [focalPoint, setFocalPoint] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0.5,
    y: 0.5
  });
  const url = 'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{
    name: 'red',
    color: '#f00'
  }];
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shape Divider', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Top / Bottom"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Type"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Color"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Width"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Height"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Flip"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Invert"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: "Bring To Front"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapeDividerPanel);

/***/ },

/***/ "./src/inspectors/layout/SpacingPanel.jsx"
/*!************************************************!*\
  !*** ./src/inspectors/layout/SpacingPanel.jsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DimensionComponent */ "./src/components/DimensionComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';






const SpacingPanel = ({
  attributes,
  setAttributes
}) => {
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  const {
    rowGap,
    columnGap,
    margin,
    padding
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Row Gap', 'blockwriter'),
        dimension: rowGap,
        updatedDimension: updateAttribute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Gap', 'blockwriter'),
        dimension: columnGap,
        updatedDimension: updateAttribute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Padding', 'blockwriter'),
        dimension: padding,
        updatedDimension: updateAttribute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Margin', 'blockwriter'),
        dimension: margin,
        updatedDimension: updateAttribute
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingPanel);

/***/ },

/***/ "./src/inspectors/layout/TextColorPanel.jsx"
/*!**************************************************!*\
  !*** ./src/inspectors/layout/TextColorPanel.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


//import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';





const TextColorPanel = ({
  attributes,
  setAttributes
}) => {
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentBgOption, setCurrentBgOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageOverlay, setImageOverlay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [columns, setColumns] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [linkColor, setLinkColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
  const [focalPoint, setFocalPoint] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0.5,
    y: 0.5
  });
  const url = 'http://pluginfactory.loc/wp-content/uploads/2022/11/Course-Sales-Page-and-Instructional-Design-Template-1536x864.jpg';

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  };

  // const [ color, setColor ] = useState ( '#f00' )
  const colors = [{
    name: 'red',
    color: '#f00'
  }];
  const updateAttribute = newValue => {
    setAttributes({
      margin: newValue
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'blockwriter'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('normal'),
          isPressed: linkColor === 'normal' ? true : false,
          children: "Normal"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('link'),
          isPressed: linkColor === 'link' ? true : false,
          children: "Link"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('hover'),
          isPressed: linkColor === 'hover' ? true : false,
          children: "Hover"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          isSmall: "true",
          onClick: () => setLinkColor('visited'),
          isPressed: linkColor === 'visited' ? true : false,
          children: "Visited"
        })]
      }), linkColor === 'normal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
        asButtons: "true",
        colors: colors,
        value: color,
        onChange: color => setColor(color),
        headingLevel: "2"
      }), linkColor === 'link' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
        asButtons: "true",
        colors: colors,
        value: color,
        onChange: color => setColor(color),
        headingLevel: "2"
      }), linkColor === 'hover' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
        asButtons: "true",
        colors: colors,
        value: color,
        onChange: color => setColor(color),
        headingLevel: "2"
      }), linkColor === 'visited' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
        asButtons: "true",
        colors: colors,
        value: color,
        onChange: color => setColor(color),
        headingLevel: "2"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextColorPanel);

/***/ },

/***/ "./src/inspectors/layout/ZIndexPanel.jsx"
/*!***********************************************!*\
  !*** ./src/inspectors/layout/ZIndexPanel.jsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ZIndexPanel = ({
  attributes,
  setAttributes
}) => {
  const updateAttribute = newValue => {
    setAttributes({
      zindex: newValue
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Z-index ', 'blockwriter'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Z Index', 'blockwriter'),
        value: attributes.zindex,
        onChange: updateAttribute
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZIndexPanel);

/***/ },

/***/ "./src/inspectors/layout/index.js"
/*!****************************************!*\
  !*** ./src/inspectors/layout/index.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundPanel: () => (/* reexport safe */ _BackgroundPanel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BorderControlPanel: () => (/* reexport safe */ _BorderControlPanel__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   BorderPanel: () => (/* reexport safe */ _BorderPanel__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   BoxShadowPanel: () => (/* reexport safe */ _BoxShadowPanel__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   DisplayTypePanel: () => (/* reexport safe */ _DisplayTypePanel__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   PositionPanel: () => (/* reexport safe */ _PositionPanel__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ShapeDividerPanel: () => (/* reexport safe */ _ShapeDividerPanel__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   SpacingPanel: () => (/* reexport safe */ _SpacingPanel__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   TextColorPanel: () => (/* reexport safe */ _TextColorPanel__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   ZIndexPanel: () => (/* reexport safe */ _ZIndexPanel__WEBPACK_IMPORTED_MODULE_9__["default"])
/* harmony export */ });
/* harmony import */ var _BackgroundPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundPanel */ "./src/inspectors/layout/BackgroundPanel.jsx");
/* harmony import */ var _BorderPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BorderPanel */ "./src/inspectors/layout/BorderPanel.jsx");
/* harmony import */ var _BorderControlPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BorderControlPanel */ "./src/inspectors/layout/BorderControlPanel.jsx");
/* harmony import */ var _BoxShadowPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxShadowPanel */ "./src/inspectors/layout/BoxShadowPanel.jsx");
/* harmony import */ var _DisplayTypePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayTypePanel */ "./src/inspectors/layout/DisplayTypePanel.jsx");
/* harmony import */ var _PositionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PositionPanel */ "./src/inspectors/layout/PositionPanel.jsx");
/* harmony import */ var _ShapeDividerPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShapeDividerPanel */ "./src/inspectors/layout/ShapeDividerPanel.jsx");
/* harmony import */ var _SpacingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpacingPanel */ "./src/inspectors/layout/SpacingPanel.jsx");
/* harmony import */ var _TextColorPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextColorPanel */ "./src/inspectors/layout/TextColorPanel.jsx");
/* harmony import */ var _ZIndexPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ZIndexPanel */ "./src/inspectors/layout/ZIndexPanel.jsx");











/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/blocks/buttons/block.json"
/*!***************************************!*\
  !*** ./src/blocks/buttons/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockwriter/buttons","version":"0.1.0","title":"BW Button Group","category":"blockwriter","icon":"index-card","description":"Button group container","keywords":["icon","fontawesome","fa"],"supports":{"html":false},"attributes":{"buttons":{"type":"array","default":[]},"buttonLabel":{"type":"string","default":""}},"textdomain":"blockwriter","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/blocks/buttons/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_AdvanceAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/AdvanceAttributes */ "./src/constants/AdvanceAttributes.js");
/* harmony import */ var _constants_LayoutAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/LayoutAttributes */ "./src/constants/LayoutAttributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/buttons/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/buttons/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */




/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  // merge attributes from block.json and advancedOptionsAttributes
  attributes: {
    ..._block_json__WEBPACK_IMPORTED_MODULE_5__.attributes,
    ..._constants_AdvanceAttributes__WEBPACK_IMPORTED_MODULE_1__["default"],
    ..._constants_LayoutAttributes__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map