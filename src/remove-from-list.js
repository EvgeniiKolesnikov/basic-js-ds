const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let length = 0;
  let node = head;
  let prevNode = null;

  while (node) {
    if (node.value === k) {
      if (length === 0) {
        head = node.next;
      } else {
        prevNode.next = node.next;
      }
      node = node.next;
    } else {
      prevNode = node;
      node = node.next;
      length++;
    }
  }
  return head;
}

module.exports = {
  removeKFromList
};