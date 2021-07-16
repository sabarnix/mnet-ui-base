import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';
import { MnetUIBase } from '..';
import { Heading } from '../../Heading';
import { AnnounceContext, ResponsiveContext } from '../../../contexts';
import { mnet } from '../../../themes/mnet';

var TestAnnouncer = function TestAnnouncer(_ref) {
  var announce = _ref.announce;
  React.useEffect(function () {
    return announce('hello', 'assertive');
  });
  return /*#__PURE__*/React.createElement("div", null, "hi");
};

var customBreakpointsTheme = {
  global: {
    deviceBreakpoints: {
      phone: 'small',
      tablet: 'medium',
      computer: 'large'
    },
    breakpoints: {
      small: {
        value: 600
      },
      medium: {
        value: 800
      },
      large: {
        value: 1000
      }
    }
  }
};

var SSRTester = function SSRTester(_ref2) {
  var ua = _ref2.ua;
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customBreakpointsTheme,
    userAgent: ua
  }, /*#__PURE__*/React.createElement(ResponsiveContext.Consumer, null, function (size) {
    return /*#__PURE__*/React.createElement(Heading, null, "Received size " + size + " for " + ua);
  }));
};

describe('MnetUIBase', function () {
  afterEach(cleanup);
  test('basic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('mnet theme', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      theme: mnet
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('themeMode', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      theme: mnet,
      themeMode: "dark"
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('cssVars', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      cssVars: true
    }, "MnetUIBase App"));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('full', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      full: true
    }, "MnetUIBase App"));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('background', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      full: true,
      background: "#0000ff"
    }, "MnetUIBase App"));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('announce', function (done) {
    var _render = render( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(AnnounceContext.Consumer, null, function (announce) {
      return /*#__PURE__*/React.createElement(TestAnnouncer, {
        announce: announce
      });
    }))),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot(); // no style, no need for expectPortal

    expect(document.body.querySelector('[aria-live]')).toMatchSnapshot();
    setTimeout(function () {
      // should clear the aria-live container
      expect(document.body.querySelector('[aria-live]')).toMatchSnapshot();
      done();
    }, 600); // wait the aria-live container to clear
  });
  [
  /* eslint-disable max-len */
  'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1 PTST/396', 'Mozilla/5.0 (iPad; CPU OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 [FBAN/FBIOS;FBAV/156.0.0.41.97;FBBV/89172188;FBDV/iPad5,3;FBMD/iPad;FBSN/iOS;FBSV/11.2.1;FBSS/2;FBCR/;FBID/tablet;FBLC/en_GB;FBOP/5;FBRV/0]', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
  /* eslint-enable max-len */
  ].forEach(function (ua) {
    test("ssr rendering " + ua.substring(0, 25), function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(SSRTester, {
        ua: ua
      }));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});