const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = (data instanceof Node) ? data : new Node(data);
    let node = this.rootNode;

    if (data === null) return;
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    while (true) {
      if (newNode.data > node.data) {
        if (node.right === null) {
          node.right = newNode;
          return;
        }
        node = node.right;
      } else if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
          return;
        }
        node = node.left;
      }
    }
  }

  has(data) {
    return (this.find(data) instanceof Node) ? true : false;
  }

  find(data) {
    let node = this.rootNode;

    while (true) {
      if (node === null) return null;
      if (data === node.data) return node;
      if (data > node.data) {
        node = node.right;
      } else if (data < node.data) {
        node = node.left;
      }
    }
  }

  remove(data) {
    let node = this.rootNode;
    let delNode = null;

    if (data === this.rootNode.data){ 
      delNode = this.rootNode;
      this.rootNode = delNode.right;
      this.add(delNode.left);
      return;
    }

    while (true) {
      if (node === null) return;

      if (data > node.data) {
        if (node.right.data === data) { 
          delNode = node.right;
          node.right = null;
          break;
        } 
        node = node.right;

      } else if (data < node.data) {
        if (node.left.data === data) { 
          delNode = node.left;
          node.left = null;
          break;
        }
        node = node.left;
      }  
    }

    this.add(delNode.right);
    this.add(delNode.left);
  }

  min() {
    let node = this.rootNode;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    let node = this.rootNode;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

// root — return root node of the tree
// add(data) — add node with data to the tree
// has(data) — returns true if node with the data exists in the tree and false otherwise
// find(data) — returns node with the data if node with the data exists in the tree and null otherwise
// remove(data) — removes node with the data from the tree if node with the data exists
// min — returns minimal value stored in the tree (or null if tree has no nodes)
// max — returns maximal value stored in the tree (or null if tree has no nodes)