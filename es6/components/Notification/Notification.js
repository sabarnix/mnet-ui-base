import React, { useState, useContext } from 'react';
import EventEmitter from 'event-emitter';
import { v1 as uuid } from 'uuid';
import { ThemeContext } from 'styled-components';
import { Layer } from '../Layer';
import { defaultProps } from '../../default-props';
import { Toast } from './Toast';
var emitter = new EventEmitter();
var timeoutId;
export var addNotification = function addNotification(type, config) {
  var id = uuid();
  emitter.emit('addNotification', id, type, config);
  return id;
};
export var addToast = function addToast(config) {
  return addNotification('toast', config);
};
export var removeNotification = function removeNotification(id) {
  emitter.emit('removeNotification', id);
};
export function Notification() {
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var _useState = useState([]),
      notifications = _useState[0],
      setNotifications = _useState[1];

  var deleteNotification = function deleteNotification(deleteId) {
    setNotifications(notifications.filter(function (_ref) {
      var id = _ref.id;
      return deleteId !== id;
    }));
  };

  var deleteLast = function deleteLast() {
    if (notifications.length) {
      deleteNotification(notifications[0].id);
    }
  };

  var autoRemoveNotification = function autoRemoveNotification(timeout) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      return deleteLast();
    }, timeout);
  };

  emitter.on('removeNotification', function (id) {
    deleteNotification(id);
  });
  emitter.on('addNotification', function (id, type, config) {
    setNotifications([].concat(notifications, [{
      id: id,
      type: type,
      config: config
    }]));
  });

  if (!notifications.length) {
    return null;
  }

  if (notifications.length) autoRemoveNotification(theme.notification.toast.timeout || 2000);
  return /*#__PURE__*/React.createElement(Layer, {
    position: theme.notification.toast.position,
    modal: false,
    margin: {
      vertical: 'medium',
      horizontal: 'small'
    },
    onEsc: deleteLast,
    responsive: false,
    style: {
      zIndex: theme.notification.toast.zIndex,
      maxWidth: theme.notification.toast.width
    },
    plain: true
  }, notifications.map(function (_ref2) {
    var id = _ref2.id,
        _ref2$config = _ref2.config,
        msg = _ref2$config.msg,
        type = _ref2$config.type;
    return /*#__PURE__*/React.createElement(Toast, {
      id: id,
      msg: msg,
      type: type,
      onClose: deleteNotification
    });
  }));
}