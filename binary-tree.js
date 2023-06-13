/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let toVisitStack = [this.root];
    let currentMinDepth = Infinity;

    while (toVisitStack.length) {
      var runningMinDepth = 2

      let current = toVisitStack.shift();

      if (current.val) {
        // console.log(current.val)
      }

      if (current.left) {
        // console.log('has left')
        toVisitStack.push(current.left)
      }

      if (current.right) {
        // console.log('has right')
        toVisitStack.push(current.right)
      }

      if (current.left || current.right) {
        runningMinDepth++
      }

    }
    if (runningMinDepth < currentMinDepth) {
      currentMinDepth = runningMinDepth
    }
    // console.log('currentMinDepth', currentMinDepth)
    return currentMinDepth
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    const queue = [this.root];
    let currDepth = 1;

    while (queue.length) {
      const node = queue.shift();

      if (node.left) {
        // console.log(node.left)
        queue.push(node.left);
      }

      if (node.right) {
        // console.log(node.right)
        queue.push(node.right);
      }

      let hasNextNode = false
      
      if (node.left) {
        hasNextNode = true
      } else if (node.right) {
        hasNextNode = true
      }

      if (hasNextNode === true) {
        currDepth++
      }
    }

    return currDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    let maxSum = 0;

    const traverse = (node) => {
      if (!node) {
        // console.log('!node -> 0')
        return 0;
      }

      let currSum = 0

      const leftSum = traverse(node.left);
      // console.log('leftSum', leftSum)

      const rightSum = traverse(node.right);
      // console.log('rightSum', rightSum)

      currSum = Math.max(leftSum, 0) + Math.max(rightSum, 0) + node.val;
      // console.log('currSum', currSum)

      maxSum = Math.max(maxSum, currSum);

      return Math.max(leftSum, rightSum) + node.val;
    };

    traverse(this.root);

    // console.log(maxSum)
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    let nextLargerVal = null;
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val > lowerBound) {
        if (nextLargerVal == null || currentNode.val < nextLargerVal) {
          nextLargerVal = currentNode.val;
        }
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return nextLargerVal;
  }

  
}

module.exports = { BinaryTree, BinaryTreeNode };





let smallLeft = new BinaryTreeNode(5);
let nextSmallRight = new BinaryTreeNode(8);
let smallRight = new BinaryTreeNode(7, nextSmallRight);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

smallTree.maxDepth()
