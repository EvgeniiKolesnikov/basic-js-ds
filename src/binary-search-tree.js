const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = (data instanceof Node) ? data : new Node(data);
    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    }
    
    if (data === null) return;

    let currentNode = this.rootNode;
    while (true) {
      if (node.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (node.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }

    // console.log('this.root =', this.rootNode);
  }

  has(data) {
    let currentNode = this.rootNode;

    while (true) {
      if (currentNode === null) {
        return false;
      }
      if (data === currentNode.data) {
        return true;
      }

      if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
    }
  }

  find(data) {
    let currentNode = this.rootNode;

    while (true) {
      if (currentNode === null) {
        return null;
      }
      if (data === currentNode.data) {
        return currentNode;
      }

      if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
    }
  }

  remove(data) {
    let currentNode = this.rootNode;
    let delNode = null;
    let rNode = null;
    let lNode = null;

    if (data === this.rootNode.data){ 
      rNode = this.rootNode.right;
      lNode = this.rootNode.left;
      this.rootNode = rNode;
      if (lNode) this.add(lNode);
      return;
    }

    while (true) {
      if (currentNode === null) return;
      if (data > currentNode.data) {
        if (currentNode.right.data === data) { 
          delNode = currentNode.right;
          rNode = delNode.right;
          lNode = delNode.left;
          currentNode.right = null;

          if (rNode) this.add(rNode);
          if (lNode) this.add(lNode);
          return;
        } 
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        if (currentNode.left.data === data) { 
          delNode = currentNode.left;
          rNode = delNode.right;
          lNode = delNode.left;
          currentNode.left = null;

          if (rNode) this.add(rNode);
          if (lNode) this.add(lNode);
          return;
        }
        currentNode = currentNode.left;
      }  
    }
  }

  min() {
    let node = this.rootNode;
    while (node.left !== null) {
      node = node.left;
    }
    let min = node.data;
    return min;
  }

  max() {
    let node = this.rootNode;
    while (node.right !== null) {
      node = node.right;
    }
    let max = node.data;
    return max;
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