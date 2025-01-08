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
    }
  }

  prepend(value) {
  const newNode = new Node(value);

  if(this.head === null){
    this.head = newNode;
  }
  }
}
