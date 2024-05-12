import Node from './Node';

class Tree {
  constructor(arr) {
    this.sortedArr = [...new Set(arr.sort())];
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

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.#insertNode(this.root, node);
    }
  }

  #insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (root.right === null) {
      root.right = newNode;
    } else {
      this.insertNode(root.right, newNode);
    }
  }
}

export default Tree;
