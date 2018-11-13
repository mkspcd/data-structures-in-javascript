# Data Structures In JavaScript

Some basic implementation of data structures in JavaScript.  
(See it as an exercice...)

- Linked List
- Binary Search Tree
- Hash Table

## Linked List

I worked with a [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) for this exercice.

## Binary Search Tree

The [tree](https://en.wikipedia.org/wiki/Binary_search_tree) satisfies the binary search property, which states that the key in each node must be greater than or equal to any key stored in the left sub-tree, and less than or equal to any key stored in the right sub-tree.

<p align="center">
  <img src="https://raw.githubusercontent.com/mkspcd/data-structures-in-javascript/master/img/bst.png" alt="Tree example" />
</p>

I worked with the above tree in my tests. To create such a tree :

```
let bst = new BST(50)
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)
```

Then, the methods can be tested :

```
bst.depthFirstTraversal(log, 'in-order')
bst.breadthFirstTraversal(log)

console.log(bst.getMinValue())
console.log(bst.getMaxValue())
```

## Hash Table

To test the Hash Table :

```
let myHT = new HashTable(30)
console.log(myHT.insert('Dean', 'dean@gmail.com'));
console.log(myHT.insert('Megan', 'megan@gmail.com'));
console.log(myHT.insert('Dane', 'dane@gmail.com'));

console.log(myHT.getAll());
```

You will have collision between Dean and Dane since the hash return the same value. They will be stored in the same bucket.

To update a node :

```
console.log(myHT.insert('John', 'john@gmail.com'));
console.log(myHT.insert('John', 'johnny@gmail.com'));
```
