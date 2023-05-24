/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }

    let toVisitStack = [this.root];
    let total = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      // if (current.val === val)
      //   return current;
      total += current.val

      for (let child of current.children)
        toVisitStack.push(child)
    }
    // console.log(total)
    return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0;
    }

    let toVisitStack = [this.root];
    // let total = 0;
    let nodeCount = 0;


    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      // if (current.val === val)
      //   return current;
      if (current.val % 2 === 0) {
        // total += current.val
        nodeCount++
      }

      for (let child of current.children)
        toVisitStack.push(child)
    }
    // console.log(total)
    // return total
    return nodeCount
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }

    let toVisitStack = [this.root];
    let nodeCount = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      // if (current.val === val)
      //   return current;
      if (current.val > lowerBound) {
        nodeCount++
      }

      for (let child of current.children)
        toVisitStack.push(child)
    }
    // console.log(total)
    return nodeCount
  }
}

module.exports = { Tree, TreeNode };