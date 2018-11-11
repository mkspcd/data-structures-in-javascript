function BST(value) {
  this.value = value
  this.left = null
  this.right = null
}

/**
 * Insert a value in the tree.
 */
BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value)
    else this.left.insert(value)
  } else {
    if (!this.right) this.right = new BST(value)
    else this.right.insert(value)
  }
}

/**
 * Return true if the tree contains the specified value.
 */
BST.prototype.contains = function (value) {
  if (value === this.value) {
    return true
  } else if (value < this.value) {
    if (!this.left) return false
    else return this.left.contains(value)
  } else if (value > this.value) {
    if (!this.right) return false
    else return this.right.contains(value)
  }
}

/**
 * Depth First Traversal of the tree.
 * order can take 3 values: 'in-order', 'pre-order', and 'post-order'.
 */
BST.prototype.depthFirstTraversal = function (iteratorFunction, order) {
  if (order === 'pre-order') iteratorFunction(this.value)
  if (this.left) this.left.depthFirstTraversal(iteratorFunction, order)
  if (order === 'in-order') iteratorFunction(this.value)
  if (this.right) this.right.depthFirstTraversal(iteratorFunction, order)
  if (order === 'post-order') iteratorFunction(this.value)
}

/**
 * Breadth First Traversal of the tree.
 */
BST.prototype.breadthFirstTraversal = function (iteratorFunction) {
  let queue = [this]

  while (queue.length) {
    let treeNode = queue.shift()
    iteratorFunction(treeNode.value)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}

/**
 * Return the minimal value in the tree.
 */
BST.prototype.getMinValue = function () {
  if (this.left) return this.left.getMinValue()
  else return this.value
}

/**
 * Return the maximal value in the tree.
 */
BST.prototype.getMaxValue = function () {
  if (this.right) return this.right.getMaxValue()
  else return this.value
}

/**
 * This method is used for the iteratorFunction.
 * Here, we only log the node value.
 */
function log(value) {
  console.log(value)
}
