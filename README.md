# CoreJavaEx

package com.linkledist;

public class Linklist<T> {

	private   Node<T> head;
	
	
	public Node <T>gethead(){
		return head;
		
		
		
	}
	
	static class Node <T>{
		
		private T value ;
		Node <T> next;
		
	     Node (T data)
		  {
			this.value=data;
			this.next=null;
			
		  }
	   }
	  
	
	 public void insert (T  data){
		  
			
		  if (head==null){
			  
			  Node<T> newNode= new Node<T>(data);
			  
			  head=newNode;
			}else{
				Node<T>tempNode=head;
				
				while(tempNode.next!=null){
					
					tempNode=tempNode.next;
				}
				
				 Node<T> newNode= new Node<T>(data);
				 
				 tempNode.next=newNode;
				
			}
		  
	  }
	  
	 public void  insertInBitween(T data, T after ){
		 
		 Node<T> temp=head;
		 
		 if(head==null){
			 
			 System.out.println("Empty Link Lsit");
			 return;
		 }
		 
		 
		while(temp!=null){
			if(temp.value==after){
				Node<T> tempNext=temp.next;
				Node<T> newNode=new Node<T>(data);
				temp.next=newNode;
				newNode.next=tempNext;
				return;
			}
			temp=temp.next;
			
		} 
		
		 
		 
	 }
	  
	 
public void delete(T deletedthis){
	
	if(head==null){
		
		System.out.println("No  Link List exist");
		return ;
	}
	
	if(head.value==deletedthis&&head.next==null){
		
		head=null;
		System.out.println("\nDeteted");
		return;
	}
	
if(head.value==deletedthis){
		
		head=head.next;
		System.out.println("\nDeteted");
		return;
	}
	
	
	Node<T> temp=head;
	while(temp!=null){
		
		if(temp.next.value==deletedthis){
			
			temp.next=temp.next.next;
			System.out.println("deleted ");
			return;
	   }else
		
		temp=temp.next;
		
	}
	
}	 
	 


public int getlength( Node<T> head ){
	
	if (head==null)
	{
		return 0;
	}else
	
	return 1+getlength(head.next);
	
	
}


 public void reverse(){
	 
	 
	 Node<T> pre = null,next=null;
	 
	 Node<T>current = head;
	 Node<T>temp= head;
	 
	 
	 while(current!=null)
	 {    next=current.next;
		 current.next=pre;
		 
		 pre=current;
		 current=next;	 
	 }
	 
	 head=pre;
	 
 }
 
 
 
 public Node<T> recursiveReverce(Node<T> current,Node<T> prev ){
	 
	 if(current.next==null){
		 
		 head=current;
		 current.next=prev;
	    return null;	 
	 }
	  Node<T> next1= current.next;
	 
	 current.next=prev;
	 
	 

	
			 recursiveReverce(next1, current);	 
	 
	  return head; 
	 
 }
 
 
 
 public Node<Integer> mergeList(Node<Integer> list1, Node<Integer>list2){
	 
	 
	 
	// Node MergeLists(Node list1, Node list2) {
		  if (list1 == null) return list2;
		  if (list2 == null) return list1;

		  if (list1.value < list2.value) {
		    list1.next = mergeList(list1.next, list2);
		    return list1;
		  } else {
		    list2.next = mergeList(list2.next, list1);
		    return list2;
		  }
		
	 
	 
	
	}
	
	
	 
	
 
	
	 public static void main(String[] args) {
		
		 Linklist<Integer> ll1= new Linklist<Integer>();
		 
		 Linklist<Integer> ll2= new Linklist<Integer>();
		 Linklist<Integer> l3= new Linklist<Integer>();
		 
		 
		 ll1.insert(1);
		 
		 ll1.insert(3);
		 ll1.insert(6);
		 ll1.insert(12);
		 ll1.insert(20);
		 ll1.insert(32);
		 
           ll2.insert(2);
		 
		 ll2.insert(4);
		 ll2.insert(7);
		 ll2.insert(11);
		 ll2.insert(13);
		 ll2.insert(23);
		 
		 for (int i=0;i<10;i++){
			 
			// ll.insert(i+4);
		 }
		 
		Node<Integer> temp=ll1.gethead(); 
		
		 while(temp!=null){
			 
			 System.out.print(temp.value+" ");
			 temp=temp.next;
			 
		 }
		 
		 Node<Integer> temp2=ll2.gethead(); 
		 System.out.println("\n");
		 while(temp2!=null){
			 
			 
			 System.out.print(temp2.value+" ");
			 temp2=temp2.next;
			 
		 }
		  temp=ll1.gethead(); 
		 temp2=ll2.gethead(); 
		 
		 
		Node<Integer> print= l3.mergeList(temp,temp2);
		 
		
		  while(print!=null){
				 
				 System.out.print(print.value+" ");
				 print=print.next;
				 
			 }
		 
		/* System.out.println("\n*********Insert****\n");
		 
		 ll.insertInBitween(100, 5);
		 
		 System.out.println("*********Print After Insert******\n");
		 
		   temp=ll.gethead();
              while(temp!=null){
			 
			 System.out.print(temp.value+" ");
			 temp=temp.next;
			 
		 }
		 
             System.out.println("Detete 6");
              
              ll.delete(6);
              System.out.println("*********Print After deletion ******");
     		 
   		      temp=ll.gethead();
   		      
           while(temp!=null){
   			 
   			 System.out.print(temp.value+" ");
   			 
   			 
   			 
   			 temp=temp.next;
   			 
   		    }
           
           
         System.out.println("\n \nLenght = " +ll.getlength(ll.gethead()));
              
              
         
         System.out.println("Reverce No Recursive \n");
         
       //  ll.reverse();
         ll.recursiveReverce(ll.gethead(), null);
         
         
		      temp=ll.gethead();
		      
      while(temp!=null){
			 
			 System.out.print(temp.value+" ");
			 
			 
			 
			 temp=temp.next;
			 
		    }
	} */
	  
	  
	 }
	
}
