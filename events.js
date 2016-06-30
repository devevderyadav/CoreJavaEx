/*document.getElementById("headId").style.color='red';

alert(document.getElementById("headId").nodeName);

alert(document.getElementById("headId").nodeType);
alert(document.getElementById("headId").nodeValue);

document.getElementById("headId").innerHTML="Updated Heading";
alert(document.getElementById("headId").firstChild);

alert(document.getElementById("headId").firstChild.nodeName);
alert(document.getElementById("headId").firstChild.nodeType);
alert(document.getElementById("headId").firstChild.nodeValue);
*/
/*document.getElementById("headId").firstChild.nodeValue="heloo Devender";

alert(document.getElementsByName("name")[0].value);

*/

/*document.getElementById("butten1").onclick= showAlert; ;

document.getElementById("butten1").addEventListener('click', displayMessage, true);

function showAlert(){
	
	var divElement= document.getElementById("div1");
	
	var stockName= document.createElement("input");
    
	stockName.setAttribute("value", "EnterStock Name");
	var refChild= document.getElementById("butten1");
    divElement.insertBefore(stockName,refChild);
	alert("clicked");
}


*/
/*document.getElementById("butten1").addEventListener('click', displayMessage, true);


function displayMessage(event){
	
	
	alert(event);
	alert(event.target);
	alert(event.target.id);  //event attributes
	alert(event.type);
}*/




/********Event  propagation Concept */




document.getElementById("butten1").addEventListener('click', buttenHandel, true);  //event handler does not affect child true/false it only affects parents 


document.getElementById("div1").addEventListener('click',  divHandel, true);// If true than event propagation  from top to child 
                                                                                //If False Event traverse  from Child to TOP


function  divHandel(event){
	
	
	alert("  Div  Is called ");
}

function  buttenHandel(event){
	
	
	alert("Butten Is called ");
	//event.stopPropagation();  ///
	
	//if Parents Is False than bcz it is bubbel approch event stopPropagation will work
	//if Parent is true than bcz propagation will be top down so soptpropagation will not work 
	//By default Browser have bubble propagation the go from child to top 
}