var add = () =>{
var dc = document.getElementById("dc");
console.log("Form Opened");
dc.style.display="block";
var res = document.getElementById("response");
res.value = "form opened"+"\n"+"Input form runing\n"+"Note: for you to use clear-form you clear this field first first then type the word: clear-form";

}

var send = () =>{
	"use strict";
var dc = document.getElementById("dc");
dc.style.display="none";

	var geToday = new Date();
	var mins = geToday.getMinutes();
	var hrs = geToday.getHours();
	var sec = geToday.getSeconds() 


var name = document.getElementById("name").value;
var mark = document.getElementById("mark").value;



console.log("saved to mysql");
console.log("time saved: "+hrs, mins, sec);

var listsz = $("#listz").click(function hatData(){
	if(name){
console.log("Showing List from reuslt")
console.log("Name :"+name+"\n");
console.log("Mark :"+mark+"\n");
console.log("time saved: "+hrs, mins, sec);
var res = document.getElementById("response");
res.value = "Showing List from result"+"\n"+"Showing data list\n"+"Name :"+name+"\n"+"Mark: "+mark+"\n"+"Time: "+hrs+mins+sec+"\n";

}else if(name == null || name == "" || name == undefined ||mark == null || mark == "" || mark == undefined){
console.log("Error you need to fill it all and try again");
}

var modify = $("#modify").click(function(){

console.log("Modify form")
var dc = document.getElementById("dc");
dc.style.display="block"; 
})		

var del = $("#delete").click(function(){

console.log("removing temporary data\n");
console.log("add temporary backup data");

alert("done refreshing");
window.location.href="file:///home/weet/Desktop/resultApp/index.html";



})

});



}


var openCommand = () =>{
	var res = document.getElementById("response");
	var typedCommand = res.value;
	if(typedCommand == "open-form"){
		res.onclick = add();
		res.value = "form opened\n"+ "to close form type: close-form\n"+"Note: to use clear-form please clear this field first";
	}

else if(typedCommand == "help"){
	res.value = "Welcome to instructions menu\n"+">> open-form : Allows you to open form field\n"+">> show-list : Allows you to show data once stored\n"+">> delete : "+"Allows you to delete or record \n"; 
}
else if(typedCommand == "delete"){
res.value = $("#delete").click(function deleteData(){
res.value = "deleting.........................[100%]\n"+"data deleted"
alert("refreshing");
window.location.href="file:///home/weet/Desktop/resultApp/index.html";


})
}
else if(typedCommand == "clear-form"){
	var dc = document.getElementById("dc");
	dc.style.display="none"
	res.value="Closed";
}
else if(typedCommand == "show-list"){
		res.onclick = $("#listz").click(function hatData(){
	if(name){

}else if(name == null || name == "" || name == undefined ||mark == null || mark == "" || mark == undefined){
console.log("Error you need to fill it all and try again");
}




})








		
	}

}


console.log("Welcome to Result App \n");
console.log("Keep the console open before you run\n");
