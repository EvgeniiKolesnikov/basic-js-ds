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
    // this.left = null;
    // this.right = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    let isAdd = false;

    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    }

    // console.log('node =', node);
    let currentNode = this.rootNode;

    while (!isAdd) {
      if (node.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = node;
          isAdd = true;
        } else {
          currentNode = currentNode.right;
        }
      } else if (node.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = node;
          isAdd = true;
        } else {
          currentNode = currentNode.left;
        }
      }
    }

    console.log('this.root =', this.rootNode);
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
    // if (this.has(data)) {
      
    // }
    let currentNode = this.rootNode;
    
    while (true) {
      if (currentNode === null) {
        return;
      }

      if (data === currentNode.data) {
        return currentNode;
      }

      if (data > currentNode.data) {
        if (currentNode.right === data) {
          currentNode.right = data.right
          return;
        }
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        if (currentNode.left === data) {
          currentNode.left = data.left
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
