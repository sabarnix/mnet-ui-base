"use strict";

exports.__esModule = true;
exports.TooltipsSidebar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

var _Sidebar = require("../Sidebar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

var NotificationIcon = function NotificationIcon() {
  return _react["default"].createElement(_mnetUiBase.Stack, {
    anchor: "top-right"
  }, _react["default"].createElement(_grommetIcons.Notification, null), _react["default"].createElement(_mnetUiBase.Box, {
    background: "accent-1",
    pad: "xsmall",
    round: true,
    responsive: false
  }));
};

var NotificationAlert = function NotificationAlert() {
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      over = _useState[0],
      setOver = _useState[1];

  return _react["default"].createElement(_mnetUiBase.Box, {
    alignSelf: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    onFocus: function onFocus() {
      return setOver(true);
    },
    onBlur: function onBlur() {
      return setOver(false);
    },
    onMouseOver: function onMouseOver() {
      return setOver(true);
    },
    onMouseOut: function onMouseOut() {
      return setOver(false);
    },
    icon: _react["default"].createElement(NotificationIcon, null),
    ref: ref
  }), ref.current && over && _react["default"].createElement(_mnetUiBase.Drop, {
    align: {
      left: 'right'
    },
    plain: true,
    target: ref.current
  }, _react["default"].createElement(_mnetUiBase.Box, {
    animation: "jiggle",
    background: "accent-1",
    round: {
      corner: 'left'
    },
    pad: "small",
    margin: {
      vertical: 'large'
    }
  }, "New Analytics!")));
};

var SidebarFooter = function SidebarFooter() {
  return _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(NotificationAlert, null), _react["default"].createElement(_mnetUiBase.Avatar, {
    margin: "small",
    src: src
  }));
};

var SidebarHeader = function SidebarHeader() {
  return _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small"
  }, _react["default"].createElement(_mnetUiBase.Avatar, {
    background: "linear-gradient(#6FFFB0 0%, #7D4CDB 100%)",
    border: {
      color: 'white',
      size: 'small'
    },
    round: "medium"
  }, _react["default"].createElement(_grommetIcons.Gremlin, {
    color: "white"
  })));
};

var iconsMap = function iconsMap(color) {
  return [_react["default"].createElement(_grommetIcons.Analytics, {
    color: color
  }), _react["default"].createElement(_grommetIcons.Stakeholder, {
    color: color
  }), _react["default"].createElement(_grommetIcons.Calculator, {
    color: color
  })];
};

var SidebarButton = function SidebarButton(_ref) {
  var iconName = _ref.iconName,
      index = _ref.index;

  var _useState2 = (0, _react.useState)(),
      over = _useState2[0],
      setOver = _useState2[1];

  var tooltipColor = {
    color: 'accent-1',
    opacity: 0.9
  };
  var ref = (0, _react.useRef)();
  return _react["default"].createElement(_mnetUiBase.Box, {
    fill: "horizontal"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    ref: ref,
    onMouseOver: function onMouseOver() {
      return setOver(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setOver(false);
    },
    onFocus: function onFocus() {
      return setOver(false);
    },
    onBlur: function onBlur() {
      return setOver(false);
    },
    hoverIndicator: tooltipColor,
    plain: true
  }, function (_ref2) {
    var hover = _ref2.hover;
    return _react["default"].createElement(_mnetUiBase.Box, {
      pad: {
        vertical: 'small'
      },
      align: "center"
    }, iconsMap(hover ? 'black' : 'white')[index]);
  }), ref.current && over && _react["default"].createElement(_mnetUiBase.Drop, {
    align: {
      left: 'right'
    },
    target: ref.current,
    plain: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    animation: "slideRight",
    margin: "xsmall",
    pad: "small",
    background: tooltipColor,
    round: {
      size: 'medium',
      corner: 'right'
    }
  }, iconName)));
};

var TooltipsSidebar = function TooltipsSidebar() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    height: {
      min: '100%'
    }
  }, _react["default"].createElement(_Sidebar.Sidebar, {
    overflow: "auto",
    background: "brand",
    header: _react["default"].createElement(SidebarHeader, null),
    footer: _react["default"].createElement(SidebarFooter, null),
    pad: "none"
  }, _react["default"].createElement(_mnetUiBase.Nav, null, ['Analytics', 'Stakeholder', 'Calculator'].map(function (iconName, index) {
    return _react["default"].createElement(SidebarButton, {
      key: iconName,
      iconName: iconName,
      index: index
    });
  })))));
};

exports.TooltipsSidebar = TooltipsSidebar;
(0, _react2.storiesOf)('Sidebar', module).add('Tooltips', function () {
  return _react["default"].createElement(TooltipsSidebar, null);
});