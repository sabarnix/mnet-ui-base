"use strict";

exports.__esModule = true;

var _ModalPopUp = require("./ModalPopUp");

Object.keys(_ModalPopUp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalPopUp[key]) return;
  exports[key] = _ModalPopUp[key];
});