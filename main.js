menu_list_array = ["Veg Margherita Pizza","Cheese Pizza","Hawaian Pizza","Greek Pizza","Mexian Pizza","Meat Pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menu_list'>"
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++) {
    htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_toppings").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for (var i=0;i<menu_list_array.length;i++) {    
htmldata=htmldata+'div class="card"'
+'<img src="pizzaIMG.png"></img>'
+menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_added_menu").innerHTML = htmldata;
}

function show_items(){
//Complete the code
}