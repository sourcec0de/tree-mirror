import { TreeMirror, TreeMirrorClient } from './tree-mirror';

if (typeof window === "object") {
  window.TreeMirror = TreeMirror;
  window.TreeMirrorClient = TreeMirrorClient;
}
