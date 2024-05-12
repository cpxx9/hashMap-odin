import Node from './Node';

class Tree {
  constructor(arr) {
    this.tree = arr.sort();
    this.root = this.buildTree(arr);
  }

  buildTree(arr = this.tree, start = 0, end = this.tree.length - 1) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = this.buildTree(arr, start, mid - 1);
    node.left = this.buildTree(arr, mid + 1, end);

    return node;
  }
}

export default Tree;
