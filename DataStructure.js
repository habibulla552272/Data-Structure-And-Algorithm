let a = [15, 2, 7, 44, 11, 5];

//bubble sort star
// function bubble_Sort(a, n) {
//   let i, j, temp;

//   for (i = 0; i < n; i++) {
//     for (j = 0; j < n - i - 1; j++) {
//       if (a[j] > a[j + 1]) {
//         temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;

//       }

//       }
//     }
//     return a;
// }

// let lent = a.length;
// console.log(lent);

// let x=bubble_Sort(a, lent);

// console.log(x);

//bubble sort end

//Linear  search start

function liner_Search(A, n, x) {
  let i;

  for (i = 0; i < n; i++) {
    if (A[i] == x) {
      return i;
    }
  }
  i = -1;
  return i;
}

let n = a.length;

let liner_Data = liner_Search(a, n, 2);
console.log(liner_Data);

//Linear  search end

//Linear  search Start
let arr = [1, 2, 3, 5, 6, 7, 8, 33, 44, 55, 66, 77];

function binary_Search(arr, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let binary_Data = binary_Search(arr, 33);
console.log(binary_Data);

//Binary  search end

//   Selecttion sort start

let arr2 = [5, 9, 99, 33, 7, 2, 1];

function slection_sort(arr2, n) {
  let min, temp, i, j;

  for (i = 0; i < n - 1; i++) {
    min = i;
    for (j = i + 1; j < n; j++) {
      if (arr2[j] < arr2[min]) {
        min = j;
      }
    }

    if (min != i) {
      temp = arr2[i];

      arr2[i] = arr2[min];

      arr2[min] = temp;
    }
  }

  return arr2;
}

let len = arr2.length;

let selection_data = slection_sort(arr2, len);
console.log(selection_data);

//   Selecttion sort End

//   Insertion sort start

function insertion_Sort(arr, n) {
  let i, j, item;

  for (i = 1; i < n; i++) {
    item = arr[i];

    j = i - 1;
    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = item;
  }
  return arr;
}

let insertion_Sort_Data = insertion_Sort(arr2, len);

console.log(insertion_Sort_Data);

//   Insertion sort End

// Stack start

class Stack {
  constructor() {
    this.item = [];
  }
  pushs(element) {
    this.item.push(element);
  }

  pops() {
    if (this.item.length === 0) {
      return this.item.pop();
    }
    return this.item.pop();
  }
}

let stack = new Stack();
stack.pushs(3);
stack.pushs(3);
stack.pushs(7);
stack.pushs(9);
stack.pushs(6);
stack.pushs(8);
stack.pushs(2);

stack.pops();

console.log(stack);

class Stacks {
  constructor() {
    this.stack = []; // Initialize an empty array
    this.size = 0; // Track the number of elements in the stack
  }

  // Simulated Push
  push(element) {
    this.stack[this.size] = element; // Assign the element at the current size
    this.size++; // Increment the size
  }

  // Pop operation (optional)
  pop() {
    if (this.size === 0) {
      return "Stack is empty";
    }
    const removedElement = this.stack[this.size - 1]; // Get the top element
    this.size--; // Decrement the size
    return removedElement;
  }

  // Print the stack
  print() {
    console.log(this.stack.slice(0, this.size)); // Print only the active stack
  }
}

// Example Usage
const myStack = new Stacks();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.print(); // Output: [10, 20, 30]

// Stack End

// Queue in javaScript start

class queue {
  constructor() {
    this.items = [];
    this.fontIndex = 0;
    this.bacIndex = 0;
  }
  enqueue(item) {
    this.items[this.bacIndex] = item;
    this.bacIndex++;
    return item + " inserted";
  }
  dequeue() {
    const item = this.items[this.fontIndex];
    delete this.items[this.fontIndex];
    this.fontIndex++;
    return item;
  }
  peek() {
    return this.items[this.fontIndex];
  }
  get printQueue() {
    return this.items;
  }
}

const Queues = new queue();

console.log(Queues.enqueue(7));
console.log(Queues.enqueue(3));
console.log(Queues.enqueue(5));
console.log(Queues.enqueue(1));
console.log(Queues.enqueue(8));
console.log(Queues.enqueue(19));

let data = Queues.printQueue;
console.log(data);

console.log(Queues.dequeue());

let data2 = Queues.printQueue;
console.log(data2);

// Queue in javaScript End

// Linked lish start
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedLinst {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  // Add a node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  // Remove a node by value
  remove(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }
  // Find a node by value
  find(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  }
  // Print the list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " ->";
      current = current.next;
    }
    console.log(result + " null");
  }
}

//Example usage:

const list = new LinkedLinst();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print();
list.remove(30);
list.print();

console.log(list.find(20));
list.prepend(5);
list.print();

console.log(list);

// Linked lish End

//Double Linked lish Start
class Nodes {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Nodes(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Nodes(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  print() {
    let current = this.tail;
    const result = [];
    while (current) {
      result=current.data;
      current = current.prev;
    }
    console.log(result);
  }
}

const dll = new DoublyLinkedList();

dll.append(55);
dll.append(65);
dll.append(75);
dll.append(85);
dll.prepend(99);
dll.prepend(919);
console.log(dll);


//Double Linked lish End
