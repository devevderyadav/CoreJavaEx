//Singalton design pattern

var obj1= {
	
		
		Name:"Hello"
};


var obj2 ={
		
	Name: "Hello"	
};


alert(obj1===obj2);


//*************<<<<<<<<<<<<<<Moduler Design Pattern >>>>>>>>>***********************
//Module Design pattern  A way by which you return  private data/values as an aPI 
// Also a way of returning multiple  values/Data

/*var userMgmtModule=(
		
	
function (){
			
			var role=["Admin","User"];
			
			
			
			
			
			var addRole= function(value){  /// One can't call this addRole function directly because  its local function
				
				role.push(value);
				
			};
			
			return{
				
				
				
				getRole: function(){
					
					alert(role);
					
				},
				
				setRole: function(value){
					
					addRole(value);
				},
				
			};
			
			
		}
		
		
)();// () is because it is an anonymous  function 



userMgmtModule.getRole();
userMgmtModule.setRole("Super Admin");
userMgmtModule.getRole();*/


//****************(((((((((((((*Closerstartrs))))))))))))))************************ 

/*function Employee(){
	
	var balance=10000;
	
	this.getBalance= function(){
		
		return balance;
	};
	
	this.setBalance= function(value){
		
		balance =value;
		
	};
	
}

var e1= new Employee();

var e2= new Employee();

e1.setBalance(50000);

alert(e1.getBalance());



alert("E2 = "+e2.getBalance());*/


// Closer A way to retain local variable value by using inner function  in the return of main function 

/*function  addCounter(){
	
	 var counter=0;
	 
	 function inner(){
		 
		 counter++;
		 alert(counter);
		// returns counter;
		 
	}
	
 return	inner;
	
}

var getCounter = addCounter();

getCounter();
getCounter();
getCounter();
getCounter();
*/



/***************************************/


//Inhertance and prototype chaining 

/*
function Parent(){
	
	this.address="B'lore";
	
}

Parent.prototype.getAddress= function (){
	
	
	return this.address;
	
};

function  child(){
	
	Parent.call(this);
	
}


child.prototype= new Parent();  /// this is called chaining  b/w child prototype and child prototype every thing form parents  constructor as well as parents prototype gets copied in child 

var e1= new child();
var e2= new child();

e1.address="pune";
alert(e1.getAddress());// parents. prototype properties will not get called bcz parent.call only give the properties  from the constructer of the parent function  

alert(e2.getAddress());
//User mix of constructor stelling  and Prototype chaining ....bcz if you use only  child. prototype chaining than prasent critical resource become sharable of child prototype 

//Why Problem is solved if u use mixed approach bcz WB seacrhed the proerty fist in function constructor than in prototyped  so once it finds it in constructer than it stoes look for it and will not use the shared resouce from the  prototyped one  



*/


/***************************/




//Way Browser searches the varable: latest update first , than function  construct  , than prototype Once it finds the property 
//in this sequence than it stops looking for it further.

/*
function Emp(){
	
	this.role= "Developer";
	
	
}


Emp.prototype.role="tester";


var e1= new Emp();
var e2= new Emp();

e1.role="lead";
alert("This is E1 "+e1.role );
alert("This is E2 "+e2.role );
*/


/**********************************************/

//Prototype object in javascript for shared  function 

/*
  function  Emp (r){
	this.role=r;
} 


Emp.prototype.getRole=  function(){
return this.role;
};


var e1= new Emp("Dev");
 
alert(e1.getRole());
*/

/*var Emp={};



Object.defineProperty(Emp,"name",{
	
	value:"Krishan",
	configurable:true
	
	
});

alert("Before deleting ");

alert(delete Emp.name);
alert("After deleting "+Emp.name);
*/


/*
sayHello("Devender", 26);
var newArray= new Array();

newArray[0]="Devender";

newArray.push("kumar");
//alert("JS calling ");


//alert(newArray.length);

//alert("Reverse Array is = "+newArray.reverse());

var a=32;
var b=45;
	
	alert(a+b);
	var c=prompt();
	confirm(arg);
	alert(c);
	
	function sayHello(name, age){
		
		alert("Name"+name+" "+ "age= " +age);
		
	}*/

/*function

function onClick(name){
	
	
//var math= Math.random();
 
 //var date= new Date();
	
	alert("welcome to java script"+name +math);
	
	return 2;
}

function loadData(){
	
	onClick(" Devender");
}*/