'use strict';
module.exports = function() {

  var secretVault = {};

  function _setValue(key,value) {
    secretVault[key] = value;

  }

  function _getValue(key) {
    if(secretVault.hasOwnProperty(key)) {
      return secretVault[key];
    } else {
      return null;
    }
  }

  return {
    setValue: _setValue,
    getValue: _getValue
  };
};