class Node{
  constructor(value){
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;//the head starts with null or as empty
  }

  append(value){
    const newNode = new Node(value)//new node for constructor
    
    if(this.head === null){
      this.head = newNode;//if list is empty set this as the head
    }else{
      let currentNode = this.head;
      while(currentNode.nextNode !== null){
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
  const newNode = new Node(value);
    //if list is empty make variable as the head
    if(this.head === null){ 
      this.head = newNode;
    //else if not empty make the variable as the new head of the list
    }else{
      newNode.nextNode = this.head; 
      this.head = newNode;
    }
  }

  size(){
    let size = 0
    let currentNode = this.head;

    while (currentNode !== null){
      size++;
      currentNode = currentNode.nextNode;
    }
    return size; 
  }

  headNode(){ //a method to return the head which is the first node in the linkedList
    return this.head.value;
  }

  tail(){ // a method to return the tail which is the last node in the linkedList
    let currentNode = this.head;

    if (currentNode === null) {
      return null;
    }

    while (currentNode.nextNode !== null) { //tranverse to the end of the list
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  atIndex(index) {
    let current = this.head;
    let currentIndex = 0
  }
}

