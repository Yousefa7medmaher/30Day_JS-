class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }

    insertNode(val) {
        this.head = new Node(val, this.head);
        this.size++;
    }

    appendNode(value) {
        let newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
        } else {
            let current = this.head;
            while (current.next) { 
                current = current.next;
            }
            current.next = newnode;  
        }
        this.size++;   
    }

    deleteByVal(value) {
        if (!this.head) return; 
    
        let current = this.head;
     
        if (current.data === value) {
            this.head = current.next;
            this.size--; 
            return;
        }
    
        let prev = null;
         
        while (current && current.data !== value) {
            prev = current;
            current = current.next;
        } 

        if (!current) return;  
        
        prev.next = current.next;
        this.size--;  
    }
    
    deleteByIndex(index) {
        if (!this.head || index < 0 || index >= this.size) return;  
    
        let current = this.head;
     
        if (index === 0) {
            this.head = this.head.next;
            this.size--;  
            return;
        }
    
        let prev = null;
     
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
        }

        if (prev) prev.next = current.next;  
        
        this.size--;  
    }
    
    printAllNodes() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
 
const test = new LinkedList(); 
test.appendNode(11);
test.appendNode(10);
test.appendNode(12);
test.deleteByVal(12);
test.deleteByIndex(0);
test.printAllNodes();
