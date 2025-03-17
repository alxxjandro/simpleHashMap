class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let t = this.head;
    while (t.next != null) {
      t = t.next;
    }
    t.next = new Node(value);
  }

  prepend(value) {
    let t = this.head;
    this.head = new Node(value);
    this.head.next = t;
  }

  printList() {
    let t = this.head;
    while (t != null) {
      console.log(t.data);
      t = t.next;
    }
  }

  size() {
    if (this.head) {
      let counter = 1;
      let t = this.head;
      while (t.next != null) {
        counter++;
        t = t.next;
      }
      return counter;
    } else {
      return 0;
    }
  }

  getHead() {
    if (this.head) {
      return this.head;
    } else return null;
  }

  getTail() {
    if (this.head) {
      let t = this.head;
      while (t.next != null) {
        t = t.next;
      }
      return t;
    } else return null;
  }

  at(index) {
    if (this.head) {
      let t = this.head;
      for (let i = 0; i < index; i++) {
        t = t.next;
      }
      return t ? t : null;
    } else return null;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let last = this.head.next;
    while (last.next != null) {
      previous = previous.next;
      last = last.next;
    }

    previous.next = null;
  }

  contains(value) {
    return this.find(value) ? true : false;
  }

  find(value) {
    let t = this.head;
    while (t != null) {
      if (t.data === value) return t;
      t = t.next;
    }
    return null;
  }

  toString() {
    if (this.head) {
      let t = this.head;
      let s = "";
      while (t != null) {
        s += `(${t.data}) -> `;
        t = t.next;
      }
      s += "null";
      return s;
    }
  }

  insertAt(value, index) {
    if (index == 0) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    if (!this.head) {
      console.log("Out of bounds!");
      return;
    }

    let prev = this.head;
    let current = this.head.next;
    let i = 1;

    while (current !== null && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (i === index) {
      const newNode = new Node(value);
      prev.next = newNode;
      newNode.next = current;
    } else {
      console.log("Index out of bounds!");
    }
  }

  removeAt(index) {
    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    if (!this.head) {
      console.log("Out of bounds!");
      return;
    }

    let prev = this.head;
    let current = this.head.next;
    let i = 1;

    while (current !== null && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (i === index) {
      prev.next = current.next;
      current = null;
    } else {
      console.log("Index out of bounds!");
    }
  }
}
