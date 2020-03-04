"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var positions = ['left', 'right', 'top', 'bottom', 'center'];

var TargetLayer = function TargetLayer() {
  var _React$useState = _react["default"].useState(),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var _React$useState2 = _react["default"].useState('small'),
      gutter = _React$useState2[0],
      setGutter = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(positions[0]),
      position = _React$useState3[0],
      setPosition = _React$useState3[1];

  _react["default"].useEffect(function () {
    window.dispatchEvent(new Event('resize'));
    return undefined;
  }, [gutter]);

  var ref = _react["default"].useRef();

  var onOpen = function onOpen() {
    return setOpen(true);
  };

  var onClose = function onClose() {
    return setOpen(undefined);
  };

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Grid, {
    fill: true,
    columns: [gutter, 'flex', gutter],
    rows: [gutter, 'flex', gutter],
    areas: [{
      name: 'main',
      start: [1, 1],
      end: [1, 1]
    }]
  }, _react["default"].createElement(_mnetUiBase.Box, {
    ref: ref,
    gridArea: "main",
    fill: true,
    align: "center",
    justify: "center",
    gap: "medium",
    background: "brand"
  }, _react["default"].createElement(_mnetUiBase.Select, {
    options: positions,
    value: position,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setPosition(option);
    }
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "Open",
    onClick: onOpen
  }))), open && _react["default"].createElement(_mnetUiBase.Layer, {
    position: position,
    target: ref.current,
    modal: true,
    onClickOutside: onClose,
    onEsc: onClose
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "small",
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Toggle gutter size",
    onClick: function onClick() {
      return setGutter(gutter === 'small' ? 'xsmall' : 'small');
    }
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "Close",
    onClick: onClose
  }))));
};

(0, _react2.storiesOf)('Layer', module).add('Target', function () {
  return _react["default"].createElement(TargetLayer, null);
});