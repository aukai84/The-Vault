'use strict';
module.exports = function() {

  var _secretVault = {};

  function _setValue(key,value) {
    _secretVault[key] = value;

  }

  function _getValue(key) {
    if(_secretVault.hasOwnProperty(key)) {
      return _secretVault[key];
    } else {
      return null;
    }
  }

  return {
    setValue: _setValue,
    getValue: _getValue
  };
};