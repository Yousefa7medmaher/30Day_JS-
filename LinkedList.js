
class Node  { 
    constructor(data , next = null )  {
        this.data  = data ;
        this.next = next ;
    }

}
class LinkedList  { 
    constructor()  {
        this.head = null ;
        this.size = 0 ;
    }

    // insert firstNode 
    insertFirst(val) { 
        this.head = new Node(val , this.head) ; 
        this.size++ ;
    }

    // insert LastNode  
    insertlast(val) { 
        let node = new Node(val) ;
        let Current ;
        if(!this.head)  {
            this.head = node;
        }
        else {
            Current = this.head ;

            while(Current.next)  {
                Current = Current.next ;
            }
            Current.next = node ;
        }
        this.size++ ;
    }


    // insert at Index  


    
    // Get at Index 



    // Remove  at Index 




    // Print all data in linked List 
        printListData() { 
            let Current = this.head ;
            while (Current) {
                console.log(Current.data);
                Current = Current.next ;
                
            }
        }



}
const Joo = new LinkedList() ;
Joo.insertlast(100) ;
Joo.insertlast(200) ;
Joo.insertlast(100) ;
Joo.insertlast(100) ;
Joo.insertlast(100) ;

Joo.printListData() ;  


