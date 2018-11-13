function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

function HashNode(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

HashTable.prototype.hash = function (key) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i)
  }
  return total % this.numBuckets
}

HashTable.prototype.insert = function (key, value) {
  const index = this.hash(key)

  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value)
  // Update of a Node when it is the first in the bucket
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value
  } else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      // Update of a Node when it's not the first in the bucket
      if (currentNode.next.key === key) {
        currentNode.next.value = value
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
  }
}

HashTable.prototype.get = function (key) {
  let index = this.hash(key)

  if (!this.buckets[index]) return null
  else {
    let currentNode = this.buckets[index]
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }
}

HashTable.prototype.getAll = function () {
  let values = []
  let currentNode;

  this.buckets.forEach(bucket => {
    currentNode = bucket

    if (currentNode) {
      values.push(currentNode.value)
      while (currentNode.next) {
        values.push(currentNode.value)
        currentNode = currentNode.next
      }
    }
  });

  return values
}
