function LinkedList() {
  this.head = null
  this.tail = null
}

function Node(value, next, previous) {
  this.value = value
  this.next = next
  this.previous = previous
}

/**
 * Return the first element in a list.
 */
LinkedList.prototype.getFirst = function () {
  return this.head
}

/**
 * Return the last element in a list.
 */
LinkedList.prototype.getLast = function () {
  return this.tail
}

/**
 * Insert the specified element at the specified position index in a list.
 */
LinkedList.prototype.insertAt = function (index, value) {
  if (index < 0 || index > this.size()) {
    return new Error('index out of range.')
  } else if (index === 0) {
    this.addFirst(value)
    return true
  } else if (index === this.size()) {
    this.addLast(value)
    return true
  } else {
    let currentNode = this.head.next
    let currentIndex = 1

    while (currentNode) {
      if (currentIndex === index) {
        let newNode = new Node(value, currentNode, currentNode.previous)
        currentNode.previous.next = newNode
        currentNode.next.previous = newNode
        return true
      }
      currentNode = currentNode.next
      currentIndex++
    }

    return false
  }
}

/**
 * Insert the given element at the beginning of a list.
 */
LinkedList.prototype.addFirst = function (value) {
  let newHeadNode = new Node(value, this.head, null)

  if (this.head) this.head.previous = newHeadNode
  else this.tail = newHeadNode

  this.head = newHeadNode
}

/**
 * Append the given element to the end of a list.
 */
LinkedList.prototype.addLast = function (value) {
  let newTailNode = new Node(value, null, this.tail)

  if (this.tail) this.tail.next = newTailNode
  else this.head = newTailNode

  this.tail = newTailNode
}

/**
 * Remove the element at the beginning of a list.
 */
LinkedList.prototype.removeFirst = function () {
  if (!this.head) return null

  let previousHeadValue = this.head.value

  this.head = this.head.next
  if (this.head) this.head.previous = null

  return previousHeadValue
}

/**
 * Remove the element at the end of a list.
 */
LinkedList.prototype.removeLast = function () {
  if (!this.tail) return null

  let previousTailValue = this.tail.value

  this.tail = this.tail.previous
  if (this.tail) this.tail.next = null

  return previousTailValue
}

/**
 * Remove the first occurence of the specified element in a list.
 * Return true if an element has been deleted, false otherwise.
 */
LinkedList.prototype.remove = function (value) {
  if (!this.head) return false

  if (this.head.value === value) {
    this.removeFirst()
    return true
  } else if (this.tail.value === value) {
    this.removeLast()
    return true
  } else {
    let currentNode = this.head.next

    while (currentNode) {
      if (currentNode.value === value) {
        currentNode.previous.next = currentNode.next
        currentNode.next.previous = currentNode.previous
        return true
      }
      currentNode = currentNode.next
    }
  }

  return false
}

/**
 * Search if the specified element is in a list, and returns it. Otherwise
 * returns null.
 * (not so useful method...)
 */
LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head

  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value
    currentNode = currentNode.next
  }
  return null
}

/**
 * Return true if the list contains the specified element.
 */
LinkedList.prototype.contains = function (value) {
  if (!this.head) return false

  let currentNode = this.head

  while (currentNode) {
    if (currentNode.value === value) return true
    currentNode = currentNode.next
  }
  return false
}

/**
 * Return an array containing all the indexes in a list of the occurrences of 
 * the specified element, or an empty array if the list does not contain the 
 * specified element.
 */
LinkedList.prototype.indexOf = function (value) {
  let indexes = []
  let currentNode = this.head
  let currentIndex = 0

  while (currentNode) {
    if (currentNode.value === value) indexes.push(currentIndex)
    currentNode = currentNode.next
    currentIndex++
  }

  return indexes
}

/**
 * Return the index in a list of the first occurrence of the specified element,
 * or -1 if the list does not contain the specified element.
 */
LinkedList.prototype.firstIndexOf = function (value) {
  let currentNode = this.head
  let currentIndex = 0

  while (currentNode) {
    if (currentNode.value === value) return currentIndex
    currentNode = currentNode.next
    currentIndex++
  }

  return -1
}

/**
 * Return the index in a list of the last occurrence of the specified element,
 * or -1 if the list does not contain the specified element.
 */
LinkedList.prototype.lastIndexOf = function (value) {
  let currentNode = this.tail
  let currentIndex = this.size() - 1

  while (currentNode) {
    if (currentNode.value === value) return currentIndex
    currentNode = currentNode.previous
    currentIndex--
  }

  return -1
}

/**
 * Return the number of elements in a list.
 */
LinkedList.prototype.size = function () {
  let size = 0
  let currentNode = this.head

  while (currentNode) {
    size++
    currentNode = currentNode.next
  }
  return size
}

/**
 * Return an array containing all the elements of a list.
 * (Useful during development 🙂)
 */
LinkedList.prototype._values = function () {
  let values = []
  let currentNode = this.head

  while (currentNode) {
    values.push(currentNode.value)
    currentNode = currentNode.next
  }
  return values
}
