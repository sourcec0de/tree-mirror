import { TreeMirror, TreeMirrorClient } from './tree-mirror';

(function() {
  var root = this;

  if( typeof exports !== 'undefined' ) {

    if( typeof module !== 'undefined' && module.exports ) {
      var exports = module.exports = {
        TreeMirror: TreeMirror,
        TreeMirrorClient: TreeMirrorClient
      }
    }
    exports.TreeMirror = TreeMirror;
    exports.TreeMirrorClient = TreeMirrorClient;
  }
  else {
    root.TreeMirror = TreeMirror;
    root.TreeMirrorClient = TreeMirrorClient;
  }

}).call(this);
