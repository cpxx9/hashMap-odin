import Node from './Node';

class Tree {
  constructor(arr) {
    this.sortedArr = arr.sort();
    this.root = this.buildTree();
  }

  buildTree(arr = this.sortedArr, start = 0, end = this.sortedArr.length - 1) {
    if (start > end) {
      return null;
    }

    const mid = parseInt((start + end) / 2, 10);
    const node = new Node(arr[mid]);
    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }
}

export default Tree;
