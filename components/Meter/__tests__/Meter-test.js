"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _MnetUIBase = require("../../MnetUIBase");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VALUES = [{
  value: 20,
  label: 'twenty',
  onHover: function onHover() {}
}];
describe('Meter', function () {
  test('default', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, null)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('basic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('many values', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      values: [{
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('type', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "bar",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      size: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      size: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      size: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      size: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      size: "xlarge",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      size: "24px",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      size: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      size: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      size: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      size: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      size: "xlarge",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      size: "55px",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('thickness', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      thickness: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      thickness: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      thickness: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      thickness: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      thickness: "xlarge",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      thickness: "55px",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      thickness: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      thickness: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      thickness: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      thickness: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      thickness: "xlarge",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      thickness: "55px",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('round', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      round: true,
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('background', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Meter, {
      background: "light-3",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      background: {
        color: 'light-3',
        opacity: 'medium'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      background: "light-3",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      type: "circle",
      background: {
        color: 'light-3',
        opacity: 'medium'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Meter, {
      background: {
        color: 'light-3',
        opacity: 0.2
      },
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});