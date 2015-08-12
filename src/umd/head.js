(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory(require('rangy'));
  }
  else if(typeof define === 'function' && define.amd) {
    define(['rangy-core'], factory);
  }
  else {
    root.wysihtml = factory(root.rangy);
  }
}(this, function(rangy) {
