class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.treeArr = arr.sort();
    this.root = null;
  }

  buildTree;
}

const tree = new Tree([3, 5, 8, 6, 2, 7, 1, 4]);
console.log(tree.treeArr);
