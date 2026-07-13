/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/base/classBase.js'(
      /*!*******************************!*\
  !*** ./src/base/classBase.js ***!
  \*******************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ BlockWriterBase,
        /* harmony export */
      });
      /* harmony import */ var _classBaseBlocks__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./classBaseBlocks */ './src/base/classBaseBlocks.js',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__,
        );

      class BlockWriterBase
        extends _classBaseBlocks__WEBPACK_IMPORTED_MODULE_0__['default']
      {
        constructor(
          OptionName,
          OptionType,
          OptionSource,
          OptionSelector,
          OptionAttribute,
          OptionExtra,
        ) {
          super(
            OptionName,
            OptionType,
            OptionSource,
            OptionSelector,
            OptionAttribute,
            OptionExtra,
          );
        }
        render() {
          return /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            className: 'blockwriter-component',
            children: this.renderComponents(),
          });
        }
        renderComponents() {
          // Render each Gutenberg component based on OptionType
          if (this.OptionType) {
            return this.OptionExtra.map((component, index) =>
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                'div',
                {
                  className: `component-${this.OptionType}`,
                  children: component,
                },
                index,
              ),
            );
          }
          return null;
        }
      }

      /***/
    },

    /***/ './src/base/classBaseBlocks.js'(
      /*!*************************************!*\
  !*** ./src/base/classBaseBlocks.js ***!
  \*************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ BlockWriterBaseBlocks,
        /* harmony export */
      });
      class BlockWriterBaseBlocks {
        constructor(
          OptionName,
          OptionType,
          OptionSource,
          OptionSelector,
          OptionAttribute,
          OptionExtra,
        ) {
          this.OptionName = OptionName;
          this.OptionType = OptionType;
          this.OptionSource = OptionSource;
          this.OptionSelector = OptionSelector;
          this.OptionAttribute = OptionAttribute;
          this.OptionExtra = OptionExtra;
        }
        getOptionName() {
          return this.OptionName;
        }
        getOptionType() {
          return this.OptionType;
        }
        getOptionSource() {
          return this.OptionSource;
        }
        getOptionSelector() {
          return this.OptionSelector;
        }
        getOptionAttribute() {
          return this.OptionAttribute;
        }
        getOptionExtra() {
          return this.OptionExtra;
        }
        setOptionName(OptionName) {
          this.OptionName = OptionName;
        }
        setOptionType(OptionType) {
          this.OptionType = OptionType;
        }
        setOptionSource(OptionSource) {
          this.OptionSource = OptionSource;
        }
        setOptionSelector(OptionSelector) {
          this.OptionSelector = OptionSelector;
        }
        setOptionAttribute(OptionAttribute) {
          this.OptionAttribute = OptionAttribute;
        }
        setOptionExtra(OptionExtra) {
          this.OptionExtra = OptionExtra;
        }
      }

      /***/
    },

    /***/ './src/blocks/buttons/edit.js'(
      /*!************************************!*\
  !*** ./src/blocks/buttons/edit.js ***!
  \************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ Edit,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./inspector */ './src/blocks/buttons/inspector.js',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__,
        );

      function Edit({ attributes, setAttributes }) {
        const { buttons = [] } = attributes;
        const addButton = () => {
          const newButtons = [
            ...buttons,
            {
              text: 'New Button',
              url: '#',
            },
          ];
          setAttributes({
            buttons: newButtons,
          });
        };
        const updateButton = (index, field, value) => {
          const newButtons = [...buttons];
          newButtons[index][field] = value;
          setAttributes({
            buttons: newButtons,
          });
        };
        const removeButton = (index) => {
          const newButtons = buttons.filter((_, i) => i !== index);
          setAttributes({
            buttons: newButtons,
          });
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('div', {
          ...(0,
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
          children: [
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _inspector__WEBPACK_IMPORTED_MODULE_2__['default'],
              {
                attributes: attributes,
                setAttributes: setAttributes,
              },
            ),
            buttons.map((btn, index) =>
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                'div',
                {
                  style: {
                    marginBottom: '10px',
                  },
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl,
                      {
                        label: 'Button Text',
                        value: btn.text,
                        onChange: (val) => updateButton(index, 'text', val),
                      },
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl,
                      {
                        label: 'Button URL',
                        value: btn.url,
                        onChange: (val) => updateButton(index, 'url', val),
                      },
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                      {
                        isDestructive: true,
                        onClick: () => removeButton(index),
                        children: 'Remove',
                      },
                    ),
                  ],
                },
                index,
              ),
            ),
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
              {
                variant: 'primary',
                onClick: addButton,
                children: '+ Add Button',
              },
            ),
          ],
        });
      }

      /***/
    },

    /***/ './src/blocks/buttons/inspector.js'(
      /*!*****************************************!*\
  !*** ./src/blocks/buttons/inspector.js ***!
  \*****************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ Inspector,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _hooks_ClassSettings__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../hooks/ClassSettings */ './src/hooks/ClassSettings.js',
        );
      /* harmony import */ var _components_TabButton__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../components/TabButton */ './src/components/TabButton.js',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__,
        );

      function Inspector(props) {
        const settings = new _hooks_ClassSettings__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ]('buttonLabel', 'text', 'attribute', 'input', 'value', {
          placeholder: 'Enter button label',
          defaultValue: '',
          required: false,
        });
        const option = settings.generateTextBoxOptions();
        const { attributes, setAttributes } = props;
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_TabButton__WEBPACK_IMPORTED_MODULE_2__['default'],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
              },
            ),
          },
        );
      }

      /***/
    },

    /***/ './src/blocks/buttons/save.js'(
      /*!************************************!*\
  !*** ./src/blocks/buttons/save.js ***!
  \************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ save,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__,
        );

      function save({ attributes }) {
        const { buttons = [] } = attributes;
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
          children: buttons.map((btn, index) =>
            /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              'a',
              {
                href: btn.url,
                className: 'my-button',
                style: {
                  marginRight: '10px',
                },
                children: btn.text,
              },
              index,
            ),
          ),
        });
      }

      /***/
    },

    /***/ './src/components/DeviceTabButton.js'(
      /*!*******************************************!*\
  !*** ./src/components/DeviceTabButton.js ***!
  \*******************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__,
        );

      const DeviceTabButton = ({ props }) => {
        const { attributes, setAttributes } = props;
        const [currentDevice, setCurrentDevice] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.currentDevice,
        );

        // desktop
        const [desktopWidth, setDesktopWidth] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.desktopValue,
        );
        const [desktopUnit, setDesktopUnit] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.desktopUnit,
        );
        const [desktopHeight, setDesktopHeight] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.desktopHeightValue,
        );
        const [desktopHeightUnit, setDesktopHeightUnit] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.desktopHeightUnit,
        );

        // tablet
        const [tabletWidth, setTabletWidth] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.tabletValue,
        );
        const [tabletUnit, setTabletUnit] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.tabletUnit,
        );
        const [tabletHeight, setTabletHeight] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.tabletHeightValue,
        );
        const [tabletHeightUnit, setTabletHeightUnit] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.tabletHeightUnit,
        );

        // mobile
        const [mobileWidth, setMobileWidth] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.mobileValue,
        );
        const [mobileUnit, setMobileUnit] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.mobileUnit,
        );
        const [mobileHeight, setMobileHeight] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.mobileHeightValue,
        );
        const [mobileHeightUnit, setMobileHeightUnit] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          attributes.contentWidth.mobileHeightUnit,
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
            heightUnit,
          ) => {
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl,
                    {
                      value: width,
                      onChange: (value) => {
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
                      resetFallbackValue: unit === 'px' ? pxUnit : 100,
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
                    className: 'gs-title-button-units-section',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow,
                        {
                          children: 'Unit:',
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                        _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup,
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                variant: 'secondary',
                                onClick: () => onClickFilter(tempDevice, 'px'),
                                isPressed: unit === 'px' ? true : false,
                                children: 'px',
                              },
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                variant: 'secondary',
                                onClick: () => onClickFilter(tempDevice, '%'),
                                isPressed: unit === '%' ? true : false,
                                children: '%',
                              },
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                variant: 'secondary',
                                onClick: () => onClickFilter(tempDevice, 'vw'),
                                isPressed: unit === 'vw' ? true : false,
                                children: 'vw',
                              },
                            ),
                          ],
                        },
                      ),
                    ],
                  }),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
                    className: 'gs-title-button-units-holder',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        'div',
                        {
                          className: 'gs-title-button-units',
                          children: 'Container Box Height',
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                        _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup,
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                icon: 'desktop',
                                iconSize: '20',
                                variant: 'link',
                                isSmall: 'true',
                                onClick: () => setCurrentDevice('desktop'),
                                isPressed:
                                  currentDevice === 'desktop' ? true : false,
                              },
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                icon: 'tablet',
                                iconSize: '20',
                                variant: 'link',
                                isSmall: 'true',
                                onClick: () => setCurrentDevice('tablet'),
                                isPressed:
                                  currentDevice === 'tablet' ? true : false,
                              },
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                icon: 'smartphone',
                                iconSize: '20',
                                variant: 'link',
                                isSmall: 'true',
                                onClick: () => setCurrentDevice('mobile'),
                                isPressed:
                                  currentDevice === 'mobile' ? true : false,
                              },
                            ),
                          ],
                        },
                      ),
                    ],
                  }),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl,
                    {
                      value: height,
                      onChange: (value) => {
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
                      resetFallbackValue: heightUnit === 'px' ? 1000 : 100,
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
                    className: 'gs-title-button-units-section',
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow,
                        {
                          children: 'Unit:',
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                        _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup,
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                variant: 'secondary',
                                onClick: () => onClickFilter(tempDevice, 'pxh'),
                                isPressed: heightUnit === 'px' ? true : false,
                                children: 'px',
                              },
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                              _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                              {
                                variant: 'secondary',
                                onClick: () => onClickFilter(tempDevice, 'vh'),
                                isPressed: heightUnit === 'vh' ? true : false,
                                children: 'vw',
                              },
                            ),
                          ],
                        },
                      ),
                    ],
                  }),
                ],
              },
            );
          };
          return /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                currentDevice === 'desktop' &&
                  deviceFilter(
                    'desktop',
                    desktopWidth,
                    desktopUnit,
                    1200,
                    1600,
                    desktopHeight,
                    desktopHeightUnit,
                  ),
                currentDevice === 'tablet' &&
                  deviceFilter(
                    'tablet',
                    tabletWidth,
                    tabletUnit,
                    1024,
                    1600,
                    tabletHeight,
                    tabletHeightUnit,
                  ),
                currentDevice === 'mobile' &&
                  deviceFilter(
                    'mobile',
                    mobileWidth,
                    mobileUnit,
                    767,
                    1600,
                    mobileHeight,
                    mobileHeightUnit,
                  ),
              ],
            },
          );
        };

        // const onSelect = (tabName) => {
        // 	setCurrentDevice(tabName);
        // };

        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
          {
            children: [
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
                className: 'gs-title-button-units-holder',
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    className: 'gs-title-button-units',
                    children: 'Container Box Width',
                  }),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup,
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                          {
                            icon: 'desktop',
                            iconSize: '20',
                            variant: 'link',
                            isSmall: 'true',
                            onClick: () => setCurrentDevice('desktop'),
                            isPressed:
                              currentDevice === 'desktop' ? true : false,
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                          {
                            icon: 'tablet',
                            iconSize: '20',
                            variant: 'link',
                            isSmall: 'true',
                            onClick: () => setCurrentDevice('tablet'),
                            isPressed:
                              currentDevice === 'tablet' ? true : false,
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
                          {
                            icon: 'smartphone',
                            iconSize: '20',
                            variant: 'link',
                            isSmall: 'true',
                            onClick: () => setCurrentDevice('mobile'),
                            isPressed:
                              currentDevice === 'mobile' ? true : false,
                          },
                        ),
                      ],
                    },
                  ),
                ],
              }),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                className: 'gs-title-button-units-tab-panel',
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  ContainerBoxWidth,
                  {},
                ),
              }),
            ],
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        DeviceTabButton;

      /***/
    },

    /***/ './src/components/DimensionComponent.js'(
      /*!**********************************************!*\
  !*** ./src/components/DimensionComponent.js ***!
  \**********************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/data */ '@wordpress/data');
      /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_data__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _components_DeviceTabButton__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @components/DeviceTabButton */ './src/components/DeviceTabButton.js',
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__,
        );

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

      const DimensionComponent = ({ label, dimension, updatedDimension }) => {
        const [top, setTop] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          dimension.top,
        );
        const [bottom, setBottom] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          dimension.bottom,
        );
        const [left, setLeft] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          dimension.left,
        );
        const [right, setRight] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          dimension.right,
        );
        const [locked, setLocked] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(
          dimension.locked,
        );
        const units = [
          {
            value: 'px',
            label: 'px',
            default: 0,
          },
          {
            value: '%',
            label: '%',
            default: 10,
          },
          {
            value: 'em',
            label: 'em',
            default: 0,
          },
        ];
        (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
          updatedDimension({
            top,
            bottom,
            left,
            right,
            locked,
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
        const onChangelock = (value) => {
          setLocked(value);
          if (locked === true) {
            setLeft(top);
            setRight(top);
            setBottom(top);
          }
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)('div', {
              className: 'gs-dimension-control',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                  _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow,
                  {
                    children: label,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)('div', {
                  className: 'gs-dimension-control-value',
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl,
                      {
                        onChange: (value) => onChangeFilter('top', value),
                        value: top,
                        units: units,
                        label: 'Top',
                        labelPosition: 'bottom',
                      },
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl,
                      {
                        onChange: (value) => onChangeFilter('left', value),
                        value: left,
                        units: units,
                        label: 'left',
                        labelPosition: 'bottom',
                      },
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl,
                      {
                        onChange: (value) => onChangeFilter('bottom', value),
                        value: bottom,
                        units: units,
                        label: 'bottom',
                        labelPosition: 'bottom',
                      },
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl,
                      {
                        onChange: (value) => onChangeFilter('right', value),
                        value: right,
                        units: units,
                        label: 'right',
                        labelPosition: 'bottom',
                      },
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button,
                      {
                        icon: 'admin-links',
                        variant: 'tertiary',
                        isSmall: 'true',
                        iconSize: '15',
                        onClick: () => onChangelock(!locked),
                        isPressed: locked === true ? true : false,
                      },
                    ),
                  ],
                }),
              ],
            }),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        DimensionComponent;

      /***/
    },

    /***/ './src/components/TabButton.js'(
      /*!*************************************!*\
  !*** ./src/components/TabButton.js ***!
  \*************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/data */ '@wordpress/data');
      /* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_data__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _components_DeviceTabButton__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @components/DeviceTabButton */ './src/components/DeviceTabButton.js',
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _hooks_LayoutOptions__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ../hooks/LayoutOptions */ './src/hooks/LayoutOptions.js',
        );
      /* harmony import */ var _hooks_AdvanceOptions__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! ../hooks/AdvanceOptions */ './src/hooks/AdvanceOptions.js',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__,
        );

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

      const TabButton = ({ attributes, setAttributes }) => {
        const onSelect = (tabName) => {
          console.log('Selecting tab', tabName);
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TabPanel,
          {
            className: 'blockwriter-tab-panel',
            activeClass: 'active-tab',
            onSelect: onSelect,
            tabs: [
              {
                name: 'general',
                title: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        'span',
                        {
                          className: 'dashicons dashicons-admin-generic',
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        'span',
                        {
                          children: 'General',
                        },
                      ),
                    ],
                  },
                ),
                className: 'tab-one',
              },
              {
                name: 'layout',
                title: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        'span',
                        {
                          className: 'dashicons dashicons-layout',
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        'span',
                        {
                          children: 'Layout',
                        },
                      ),
                    ],
                  },
                ),
                className: 'tab-one',
              },
              {
                name: 'advanced',
                title: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        'span',
                        {
                          className: 'dashicons dashicons-admin-settings',
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        'span',
                        {
                          children: 'Advanced',
                        },
                      ),
                    ],
                  },
                ),
                className: 'tab-two',
              },
            ],
            children: (tab) =>
              tab.name === 'general'
                ? /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                    _hooks_LayoutOptions__WEBPACK_IMPORTED_MODULE_6__[
                      'default'
                    ],
                    {
                      attributes: attributes,
                      setAttributes: setAttributes,
                    },
                  )
                : tab.name === 'layout'
                  ? /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _hooks_AdvanceOptions__WEBPACK_IMPORTED_MODULE_7__[
                        'default'
                      ],
                      {
                        attributes: attributes,
                        setAttributes: setAttributes,
                      },
                    )
                  : tab.name === 'advanced'
                    ? /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                        _hooks_AdvanceOptions__WEBPACK_IMPORTED_MODULE_7__[
                          'default'
                        ],
                        {
                          attributes: attributes,
                          setAttributes: setAttributes,
                        },
                      )
                    : null,
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TabButton;

      /***/
    },

    /***/ './src/constants/AdvanceAttributes.js'(
      /*!********************************************!*\
  !*** ./src/constants/AdvanceAttributes.js ***!
  \********************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      const advancedOptionsAttributes = {
        header: {
          type: 'string',
          default: '',
        },
        headerBgColor: {
          type: 'string',
          default: '#000',
        },
        headerTextColor: {
          type: 'string',
          default: '#eee',
        },
        headerIcon: {
          type: 'string',
          default: 'unfold',
        },
        headerIconColor: {
          type: 'string',
          default: '#fff',
        },
        bodyBgColor: {
          type: 'string',
        },
        bodyTextColor: {
          type: 'string',
        },
        borderStyle: {
          type: 'string',
          default: 'solid',
        },
        borderWidth: {
          type: 'number',
          default: 0,
        },
        borderColor: {
          type: 'string',
        },
        borderRadius: {
          type: 'number',
          default: 2,
        },
        marginBottom: {
          type: 'number',
          default: 15,
        },
        collapsedAll: {
          type: 'boolean',
          default: false,
        },
        changed: {
          type: 'boolean',
          default: false,
        },
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        advancedOptionsAttributes;

      /***/
    },

    /***/ './src/hooks/AdvanceOptions.js'(
      /*!*************************************!*\
  !*** ./src/hooks/AdvanceOptions.js ***!
  \*************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ AdvanceOptions: () => /* binding */ AdvanceOptions,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _inspectors_advanced_BackgroundPanel__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../inspectors/advanced/BackgroundPanel */ './src/inspectors/advanced/BackgroundPanel.jsx',
        );
      /* harmony import */ var _inspectors_advanced_TextColorPanel__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../inspectors/advanced/TextColorPanel */ './src/inspectors/advanced/TextColorPanel.jsx',
        );
      /* harmony import */ var _inspectors_advanced_BorderControlPanel__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../inspectors/advanced/BorderControlPanel */ './src/inspectors/advanced/BorderControlPanel.jsx',
        );
      /* harmony import */ var _inspectors_advanced_BoxShadowPanel__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../inspectors/advanced/BoxShadowPanel */ './src/inspectors/advanced/BoxShadowPanel.jsx',
        );
      /* harmony import */ var _inspectors_advanced_ShapeDividerPanel__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ../inspectors/advanced/ShapeDividerPanel */ './src/inspectors/advanced/ShapeDividerPanel.jsx',
        );
      /* harmony import */ var _inspectors_advanced_SpacingPanel__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ../inspectors/advanced/SpacingPanel */ './src/inspectors/advanced/SpacingPanel.jsx',
        );
      /* harmony import */ var _inspectors_advanced_ZIndexPanel__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! ../inspectors/advanced/ZIndexPanel */ './src/inspectors/advanced/ZIndexPanel.jsx',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__,
        );
      /**
       * Retrieves the translation of text.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
       */

      const AdvanceOptions = ({ attributes, setAttributes }) => {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)('div', {
              className: 'blockwriter-styling-section',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_BackgroundPanel__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_TextColorPanel__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_BorderControlPanel__WEBPACK_IMPORTED_MODULE_3__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_BoxShadowPanel__WEBPACK_IMPORTED_MODULE_4__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_ShapeDividerPanel__WEBPACK_IMPORTED_MODULE_5__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_SpacingPanel__WEBPACK_IMPORTED_MODULE_6__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                  _inspectors_advanced_ZIndexPanel__WEBPACK_IMPORTED_MODULE_7__[
                    'default'
                  ],
                  {
                    attributes: attributes,
                    setAttributes: setAttributes,
                  },
                ),
              ],
            }),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        AdvanceOptions;

      /***/
    },

    /***/ './src/hooks/ClassSettings.js'(
      /*!************************************!*\
  !*** ./src/hooks/ClassSettings.js ***!
  \************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ Settings,
        /* harmony export */
      });
      /* harmony import */ var _base_classBase__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ../base/classBase */ './src/base/classBase.js');

      class Settings
        extends _base_classBase__WEBPACK_IMPORTED_MODULE_0__['default']
      {
        constructor(
          OptionName,
          OptionType,
          OptionSource,
          OptionSelector,
          OptionAttribute,
          OptionExtra,
        ) {
          super(
            OptionName,
            OptionType,
            OptionSource,
            OptionSelector,
            OptionAttribute,
            OptionExtra,
          );
        }
        generateOptions() {
          return {
            name: this.getOptionName(),
            type: this.getOptionType(),
            source: this.getOptionSource(),
            selector: this.getOptionSelector(),
            attribute: this.getOptionAttribute(),
            extra: this.getOptionExtra(),
          };
        }
        generateTextBoxOptions() {
          return {
            name: this.getOptionName() || 'textBox',
            type: 'text',
            source: this.getOptionSource() || 'attribute',
            selector: this.getOptionSelector() || 'input',
            attribute: this.getOptionAttribute() || 'value',
            extra: this.getOptionExtra() || {
              placeholder: 'Enter text...',
              defaultValue: '',
              required: false,
            },
          };
        }
      }

      /***/
    },

    /***/ './src/hooks/LayoutOptions.js'(
      /*!************************************!*\
  !*** ./src/hooks/LayoutOptions.js ***!
  \************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ LayoutOptions: () => /* binding */ LayoutOptions,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__,
        );

      const LayoutOptions = ({ attributes, setAttributes }) => {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
                {
                  title: 'Button Label',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl,
                    {
                      label: 'Layout Button Label',
                      value: attributes.buttonLabel,
                      onChange: (value) =>
                        setAttributes({
                          buttonLabel: value,
                        }),
                      //   placeholder={option.extra.placeholder}
                    },
                  ),
                },
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
                {
                  title: 'Button Label',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl,
                    {
                      label: 'Button Label',
                      value: attributes.buttonLabel,
                      onChange: (value) =>
                        setAttributes({
                          buttonLabel: value,
                        }),
                      //   placeholder={option.extra.placeholder}
                    },
                  ),
                },
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
                {
                  title: 'Button Label',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl,
                    {
                      label: 'Button Label',
                      value: attributes.buttonLabel,
                      onChange: (value) =>
                        setAttributes({
                          buttonLabel: value,
                        }),
                      //   placeholder={option.extra.placeholder}
                    },
                  ),
                },
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
                {
                  title: 'Button Label',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl,
                    {
                      label: 'Button Label',
                      value: attributes.buttonLabel,
                      onChange: (value) =>
                        setAttributes({
                          buttonLabel: value,
                        }),
                      //   placeholder={option.extra.placeholder}
                    },
                  ),
                },
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
                {
                  title: 'Button Label',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl,
                    {
                      label: 'Button Label',
                      value: attributes.buttonLabel,
                      onChange: (value) =>
                        setAttributes({
                          buttonLabel: value,
                        }),
                      //   placeholder={option.extra.placeholder}
                    },
                  ),
                },
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
                {
                  title: 'Button Label',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl,
                    {
                      label: 'Button Label',
                      value: attributes.buttonLabel,
                      onChange: (value) =>
                        setAttributes({
                          buttonLabel: value,
                        }),
                      //   placeholder={option.extra.placeholder}
                    },
                  ),
                },
              ),
            ],
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        LayoutOptions;

      /***/
    },

    /***/ './src/inspectors/advanced/BackgroundPanel.jsx'(
      /*!*****************************************************!*\
  !*** ./src/inspectors/advanced/BackgroundPanel.jsx ***!
  \*****************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__,
        );

      const BackgroundPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                  'Background',
                  'blockwriter',
                ),
                initialOpen: true,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('div', {
                    className: 'gs-title-button-units-section',
                    children: /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup,
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
                            {
                              icon: 'admin-customizer',
                              variant: 'secondary',
                              isSmall: 'true',
                              iconSize: '15',
                              onClick: () => setCurrentBgOption('color'),
                              isPressed:
                                currentBgOption === 'color' ? true : false,
                            },
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
                            {
                              icon: 'laptop',
                              variant: 'secondary',
                              isSmall: 'true',
                              iconSize: '15',
                              onClick: () => setCurrentBgOption('gradient'),
                              isPressed:
                                currentBgOption === 'gradient' ? true : false,
                            },
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
                            {
                              icon: 'format-image',
                              variant: 'secondary',
                              isSmall: 'true',
                              iconSize: '15',
                              onClick: () => setCurrentBgOption('image'),
                              isPressed:
                                currentBgOption === 'image' ? true : false,
                            },
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
                            {
                              icon: 'video-alt2',
                              variant: 'secondary',
                              isSmall: 'true',
                              iconSize: '15',
                              onClick: () => setCurrentBgOption('video'),
                              isPressed:
                                currentBgOption === 'video' ? true : false,
                            },
                          ),
                        ],
                      },
                    ),
                  }),
                  currentBgOption === 'color' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow,
                            {
                              children: 'Select Background Color',
                            },
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker,
                            {
                              color: color,
                              onChange: setColor,
                              enableAlpha: true,
                              defaultValue: '#000',
                            },
                          ),
                        ],
                      },
                    ),
                  currentBgOption === 'gradient' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                  _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow,
                                  {
                                    children: 'Select Background Gradient',
                                  },
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                  _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.GradientPicker,
                                  {
                                    value: gradient,
                                    onChange: (currentGradient) =>
                                      setGradient(currentGradient),
                                    gradients: [
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
                                    ],
                                  },
                                ),
                              ],
                            },
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl,
                            {
                              label: (0,
                              _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                'Enable Image Overlay',
                                'blockwriter',
                              ),
                              help: 'Add overlay to image.',
                              checked: imageOverlay,
                              onChange: (newValue) => {
                                setImageOverlay(newValue);
                              },
                            },
                          ),
                          imageOverlay &&
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    'figure',
                                    {
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                        _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck,
                                        {
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                            _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload,
                                            // onSelect={onSelectImage}
                                            {
                                              allowedTypes: ['image'],
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
                                              render: ({ open }) =>
                                                /*#__PURE__*/ (0,
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                                                  _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button,
                                                  {
                                                    className:
                                                      'button button-large image-select-button',
                                                    onClick: open,
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                                        Icon,
                                                        {
                                                          icon: 'format-image',
                                                        },
                                                      ),
                                                      (0,
                                                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                                        'Change Image',
                                                        'jsforwpblocks',
                                                      ),
                                                    ],
                                                  },
                                                ),
                                            },
                                          ),
                                        },
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    FocalPointPicker,
                                    {
                                      __nextHasNoMarginBottom: true,
                                      url: url,
                                      value: focalPoint,
                                      onDragStart: setFocalPoint,
                                      onDrag: setFocalPoint,
                                      onChange: setFocalPoint,
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    'div',
                                    {
                                      style: style,
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl,
                                    {
                                      label: (0,
                                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                        'Attachment',
                                        'blockwriter',
                                      ),
                                      labelPosition: 'side',
                                      // value={attributes.htmlTag}
                                      options: [
                                        {
                                          label: 'Scroll',
                                          value: 'scroll',
                                        },
                                        {
                                          label: 'Fixed',
                                          value: 'fixed',
                                        },
                                      ],
                                      onChange: (value) => {
                                        setAttributes({
                                          htmlTag: value,
                                        });
                                      },
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl,
                                    {
                                      label: (0,
                                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                        'Blend Mode',
                                        'blockwriter',
                                      ),
                                      labelPosition: 'side',
                                      // value={attributes.htmlTag}
                                      options: [
                                        {
                                          label: 'Normal',
                                          value: 'div',
                                        },
                                        {
                                          label: 'Multiple',
                                          value: 'header',
                                        },
                                        {
                                          label: 'Screen',
                                          value: 'footer',
                                        },
                                        {
                                          label: 'Overlay',
                                          value: 'main',
                                        },
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
                                      ],
                                      // onChange={(value) => {
                                      //   setAttributes({ htmlTag: value });
                                      // }}
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl,
                                    {
                                      label: (0,
                                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                        'Repeat',
                                        'blockwriter',
                                      ),
                                      labelPosition: 'side',
                                      // value={attributes.htmlTag}
                                      options: [
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
                                      ],
                                      // onChange={(value) => {
                                      //   setAttributes({ htmlTag: value });
                                      // }}
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl,
                                    {
                                      label: (0,
                                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                        'Repeat',
                                        'blockwriter',
                                      ),
                                      labelPosition: 'side',
                                      // value={attributes.htmlTag}
                                      options: [
                                        {
                                          label: 'Auto',
                                          value: 'no-repeat',
                                        },
                                        {
                                          label: 'Cover',
                                          value: 'repeat',
                                        },
                                        {
                                          label: 'Contain',
                                          value: 'repeat-x',
                                        },
                                        {
                                          label: 'Custom',
                                          value: 'repeat-y',
                                        },
                                      ],
                                      // onChange={(value) => {
                                      //   setAttributes({ htmlTag: value });
                                      // }}
                                    },
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                                    _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl,
                                    {
                                      __nextHasNoMarginBottom: true,
                                      label: (0,
                                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(
                                        'Opacity',
                                        'blockwriter',
                                      ),
                                      value: columns,
                                      onChange: (value) => setColumns(value),
                                      min: 0,
                                      step: 0.01,
                                      max: 1,
                                      allowReset: 'true',
                                      resetFallbackValue: 0.5,
                                    },
                                  ),
                                ],
                              },
                            ),
                        ],
                      },
                    ),
                ],
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        BackgroundPanel;

      /***/
    },

    /***/ './src/inspectors/advanced/BorderControlPanel.jsx'(
      /*!********************************************************!*\
  !*** ./src/inspectors/advanced/BorderControlPanel.jsx ***!
  \********************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__,
        );

      //import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

      const BorderControlPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                  'Border',
                  'blockwriter',
                ),
                initialOpen: false,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl,
                    {
                      label: (0,
                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                        'Repeat',
                        'blockwriter',
                      ),
                      labelPosition: 'side',
                      // value={attributes.htmlTag}
                      options: [
                        {
                          label: 'Default',
                          value: 'no-repeat',
                        },
                        {
                          label: 'None',
                          value: 'repeat',
                        },
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
                        {
                          label: 'Doubled',
                          value: 'repeat',
                        },
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
                      ],
                      // onChange={(value) => {
                      //   setAttributes({ htmlTag: value });
                      // }}
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Width',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Radius',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup,
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('normal'),
                            isPressed: linkColor === 'normal' ? true : false,
                            children: 'Normal',
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('hover'),
                            isPressed: linkColor === 'hover' ? true : false,
                            children: 'Hover',
                          },
                        ),
                      ],
                    },
                  ),
                  linkColor === 'normal' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette,
                      {
                        asButtons: 'true',
                        colors: colors,
                        value: color,
                        onChange: (color) => setColor(color),
                        headingLevel: '2',
                      },
                    ),
                  linkColor === 'hover' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette,
                      {
                        asButtons: 'true',
                        colors: colors,
                        value: color,
                        onChange: (color) => setColor(color),
                        headingLevel: '2',
                      },
                    ),
                ],
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        BorderControlPanel;

      /***/
    },

    /***/ './src/inspectors/advanced/BoxShadowPanel.jsx'(
      /*!****************************************************!*\
  !*** ./src/inspectors/advanced/BoxShadowPanel.jsx ***!
  \****************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__,
        );

      //import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

      const BoxShadowPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                  'Box Shadow',
                  'blockwriter',
                ),
                initialOpen: false,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Color',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker,
                    {
                      color: color,
                      onChange: setColor,
                      enableAlpha: true,
                      defaultValue: '#000',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl,
                    {
                      __nextHasNoMarginBottom: true,
                      label: (0,
                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                        'Horizontal',
                        'blockwriter',
                      ),
                      value: columns,
                      onChange: (value) => setColumns(value),
                      min: 0,
                      max: 100,
                      allowReset: 'true',
                      resetFallbackValue: 0.5,
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl,
                    {
                      __nextHasNoMarginBottom: true,
                      label: (0,
                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                        'Vertical',
                        'blockwriter',
                      ),
                      value: columns,
                      onChange: (value) => setColumns(value),
                      min: 0,
                      max: 100,
                      allowReset: 'true',
                      resetFallbackValue: 0.5,
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl,
                    {
                      __nextHasNoMarginBottom: true,
                      label: (0,
                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                        'Blur',
                        'blockwriter',
                      ),
                      value: columns,
                      onChange: (value) => setColumns(value),
                      min: 0,
                      max: 100,
                      allowReset: 'true',
                      resetFallbackValue: 0.5,
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl,
                    {
                      __nextHasNoMarginBottom: true,
                      label: (0,
                      _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                        'Spread',
                        'blockwriter',
                      ),
                      value: columns,
                      onChange: (value) => setColumns(value),
                      min: 0,
                      max: 100,
                      allowReset: 'true',
                      resetFallbackValue: 0.5,
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup,
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('normal'),
                            isPressed: linkColor === 'normal' ? true : false,
                            children: 'Outset',
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('hover'),
                            isPressed: linkColor === 'hover' ? true : false,
                            children: 'Inset',
                          },
                        ),
                      ],
                    },
                  ),
                ],
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        BoxShadowPanel;

      /***/
    },

    /***/ './src/inspectors/advanced/ShapeDividerPanel.jsx'(
      /*!*******************************************************!*\
  !*** ./src/inspectors/advanced/ShapeDividerPanel.jsx ***!
  \*******************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__,
        );

      //import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

      const ShapeDividerPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                  'Shape Divider',
                  'blockwriter',
                ),
                initialOpen: false,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Top / Bottom',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Type',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Color',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Width',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Height',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Flip',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Invert',
                    },
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow,
                    {
                      children: 'Bring To Front',
                    },
                  ),
                ],
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ShapeDividerPanel;

      /***/
    },

    /***/ './src/inspectors/advanced/SpacingPanel.jsx'(
      /*!**************************************************!*\
  !*** ./src/inspectors/advanced/SpacingPanel.jsx ***!
  \**************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../../components/DimensionComponent */ './src/components/DimensionComponent.js',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__,
        );

      //import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

      const SpacingPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        const { margin, padding } = attributes;
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                  'Spacing',
                  'blockwriter',
                ),
                initialOpen: false,
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)('p', {
                  children: 'Margin and padding here',
                }),
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        SpacingPanel;

      /***/
    },

    /***/ './src/inspectors/advanced/TextColorPanel.jsx'(
      /*!****************************************************!*\
  !*** ./src/inspectors/advanced/TextColorPanel.jsx ***!
  \****************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__,
        );

      //import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

      const TextColorPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                  'Text Color',
                  'blockwriter',
                ),
                initialOpen: false,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                    _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup,
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('normal'),
                            isPressed: linkColor === 'normal' ? true : false,
                            children: 'Normal',
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('link'),
                            isPressed: linkColor === 'link' ? true : false,
                            children: 'Link',
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('hover'),
                            isPressed: linkColor === 'hover' ? true : false,
                            children: 'Hover',
                          },
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
                          {
                            variant: 'secondary',
                            isSmall: 'true',
                            onClick: () => setLinkColor('visited'),
                            isPressed: linkColor === 'visited' ? true : false,
                            children: 'Visited',
                          },
                        ),
                      ],
                    },
                  ),
                  linkColor === 'normal' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette,
                      {
                        asButtons: 'true',
                        colors: colors,
                        value: color,
                        onChange: (color) => setColor(color),
                        headingLevel: '2',
                      },
                    ),
                  linkColor === 'link' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette,
                      {
                        asButtons: 'true',
                        colors: colors,
                        value: color,
                        onChange: (color) => setColor(color),
                        headingLevel: '2',
                      },
                    ),
                  linkColor === 'hover' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette,
                      {
                        asButtons: 'true',
                        colors: colors,
                        value: color,
                        onChange: (color) => setColor(color),
                        headingLevel: '2',
                      },
                    ),
                  linkColor === 'visited' &&
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette,
                      {
                        asButtons: 'true',
                        colors: colors,
                        value: color,
                        onChange: (color) => setColor(color),
                        headingLevel: '2',
                      },
                    ),
                ],
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        TextColorPanel;

      /***/
    },

    /***/ './src/inspectors/advanced/ZIndexPanel.jsx'(
      /*!*************************************************!*\
  !*** ./src/inspectors/advanced/ZIndexPanel.jsx ***!
  \*************************************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! @wordpress/element */ '@wordpress/element');
      /* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_element__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @wordpress/block-editor */ '@wordpress/block-editor',
        );
      /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! @wordpress/i18n */ '@wordpress/i18n');
      /* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! @wordpress/components */ '@wordpress/components',
        );
      /* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _wordpress_components__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _components_DimensionComponent__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../../components/DimensionComponent */ './src/components/DimensionComponent.js',
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(/*! react/jsx-runtime */ 'react/jsx-runtime');
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__,
        );

      //import { Button, ButtonGroup, ColorPicker, GradientPicker, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';

      const ZIndexPanel = ({ attributes, setAttributes }) => {
        const [color, setColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [gradient, setGradient] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
        const [currentBgOption, setCurrentBgOption] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
        const [imageOverlay, setImageOverlay] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [columns, setColumns] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
        const [linkColor, setLinkColor] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('normal');
        const [focalPoint, setFocalPoint] = (0,
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
        const colors = [
          {
            name: 'red',
            color: '#f00',
          },
        ];
        const updateAttribute = (newValue) => {
          setAttributes({
            margin: newValue,
          });
        };
        const { margin, padding } = attributes;
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
          {
            children: /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
              _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody,
              {
                title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
                  'Spacing',
                  'blockwriter',
                ),
                initialOpen: false,
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)('p', {
                  children: 'Z index the section',
                }),
              },
            ),
          },
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ZIndexPanel;

      /***/
    },

    /***/ 'react/jsx-runtime'(
      /*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
      module,
    ) {
      module.exports = window['ReactJSXRuntime'];

      /***/
    },

    /***/ '@wordpress/block-editor'(
      /*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
      module,
    ) {
      module.exports = window['wp']['blockEditor'];

      /***/
    },

    /***/ '@wordpress/blocks'(
      /*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
      module,
    ) {
      module.exports = window['wp']['blocks'];

      /***/
    },

    /***/ '@wordpress/components'(
      /*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
      module,
    ) {
      module.exports = window['wp']['components'];

      /***/
    },

    /***/ '@wordpress/data'(
      /*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
      module,
    ) {
      module.exports = window['wp']['data'];

      /***/
    },

    /***/ '@wordpress/element'(
      /*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
      module,
    ) {
      module.exports = window['wp']['element'];

      /***/
    },

    /***/ '@wordpress/i18n'(
      /*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
      module,
    ) {
      module.exports = window['wp']['i18n'];

      /***/
    },

    /***/ './src/blocks/buttons/block.json'(
      /*!***************************************!*\
  !*** ./src/blocks/buttons/block.json ***!
  \***************************************/
      module,
    ) {
      module.exports = /*#__PURE__*/ JSON.parse(
        '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockwriter/buttons","version":"0.1.0","title":"BW Button Group","category":"blockwriter","icon":"index-card","description":"Button group container","keywords":["icon","fontawesome","fa"],"supports":{"html":false},"attributes":{"buttons":{"type":"array","default":[]},"buttonLabel":{"type":"string","default":""}},"textdomain":"blockwriter","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}',
      );

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ if (!(moduleId in __webpack_modules__)) {
      /******/ delete __webpack_module_cache__[moduleId];
      /******/ var e = new Error("Cannot find module '" + moduleId + "'");
      /******/ e.code = 'MODULE_NOT_FOUND';
      /******/ throw e;
      /******/
    }
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  (() => {
    /*!*************************************!*\
  !*** ./src/blocks/buttons/index.js ***!
  \*************************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! @wordpress/blocks */ '@wordpress/blocks');
    /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__,
      );
    /* harmony import */ var _constants_AdvanceAttributes__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ../../constants/AdvanceAttributes */ './src/constants/AdvanceAttributes.js',
      );
    /* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./edit */ './src/blocks/buttons/edit.js');
    /* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./save */ './src/blocks/buttons/save.js');
    /* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(
        /*! ./block.json */ './src/blocks/buttons/block.json',
      );
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
    (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(
      _block_json__WEBPACK_IMPORTED_MODULE_4__.name,
      {
        // merge attributes from block.json and advancedOptionsAttributes
        attributes: {
          ..._block_json__WEBPACK_IMPORTED_MODULE_4__.attributes,
          ..._constants_AdvanceAttributes__WEBPACK_IMPORTED_MODULE_1__[
            'default'
          ],
        },
        /**
         * @see ./edit.js
         */
        edit: _edit__WEBPACK_IMPORTED_MODULE_2__['default'],
        /**
         * @see ./save.js
         */
        save: _save__WEBPACK_IMPORTED_MODULE_3__['default'],
      },
    );
  })();

  /******/
})();
//# sourceMappingURL=index.js.map
