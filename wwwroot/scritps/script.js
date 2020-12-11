//Showing and hiding menu items------------------------------------->

//Varibalse---------------->
var pizzaV;
var sandwichesV;
var appetizersV;
var saladsV;
var burgersV;


//Event Listeners---------->
document.getElementById("onClickPizza").addEventListener("click", showPizzas);
document.getElementById("onClickSandwiches").addEventListener("click", showSandwiches);
document.getElementById("onClickAppetizers").addEventListener("click", showAppetizers);
document.getElementById("onClickSalads").addEventListener("click", showSalads);
document.getElementById("onClickBurgers").addEventListener("click", showBurgers);



//Functions for menu------>
function showPizzas(e) {
    document.getElementById("@item.FoodCategoryId").style.display = "grid";
    document.getElementById("sandwichesMenu").style.display = "none";
    document.getElementById("appetizersMenu").style.display = "none";
    document.getElementById("saladsMenu").style.display = "none";
    document.getElementById("burgersMenu").style.display = "none";
};
console.log(pizzaV)


function showSandwiches(e) {
    document.getElementById("pizzasMenu").style.display = "none";
    document.getElementById("sandwichesMenu").style.display = "grid";
    document.getElementById("appetizersMenu").style.display = "none";
    document.getElementById("saladsMenu").style.display = "none";
    document.getElementById("burgersMenu").style.display = "none";

};
console.log(sandwichesV)



function showAppetizers(e) {
    document.getElementById("pizzasMenu").style.display = "none";
    document.getElementById("sandwichesMenu").style.display = "none";
    document.getElementById("appetizersMenu").style.display = "grid";
    document.getElementById("saladsMenu").style.display = "none";
    document.getElementById("burgersMenu").style.display = "none";

};
console.log(appetizersV)

function showSalads(e) {

    document.getElementById("pizzasMenu").style.display = "none";
    document.getElementById("sandwichesMenu").style.display = "none";
    document.getElementById("appetizersMenu").style.display = "none";
    document.getElementById("saladsMenu").style.display = "grid";
    document.getElementById("burgersMenu").style.display = "none";

};
console.log(saladsV)

function showBurgers(e) {

    document.getElementById("pizzasMenu").style.display = "none";
    document.getElementById("sandwichesMenu").style.display = "none";
    document.getElementById("appetizersMenu").style.display = "none";
    document.getElementById("saladsMenu").style.display = "none";
    document.getElementById("burgersMenu").style.display = "grid";

};
console.log(burgersV)



//pizza items----------------------------------->
//Varibles------------>

var pizzaItem1V;
var pizzaItem2V;
var pizzaItem3V;
var pizzaItem4V;
var pizzaItem5V;
var pizzaItem6V;
var pizzaItem7V;
var pizzaItem8V;
var pizzaItem9V;


//event listeners------>
document.getElementById("pizzaItem1").addEventListener("click", showPizzaItem1);
document.getElementById("pizzaItem2").addEventListener("click", showPizzaItem2);
document.getElementById("pizzaItem3").addEventListener("click", showPizzaItem3);
document.getElementById("pizzaItem4").addEventListener("click", showPizzaItem4);
document.getElementById("pizzaItem5").addEventListener("click", showPizzaItem5);
document.getElementById("pizzaItem6").addEventListener("click", showPizzaItem6);
document.getElementById("pizzaItem7").addEventListener("click", showPizzaItem7);
document.getElementById("pizzaItem8").addEventListener("click", showPizzaItem8);
document.getElementById("pizzaItem9").addEventListener("click", showPizzaItem9);



//Functions------------>

function showPizzaItem1(e) {
    document.getElementById("pizzaItem1Info").style.display = "block";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";

}
console.log(pizzaItem1V)

function showPizzaItem2(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "block";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem2V)

function showPizzaItem3(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "block";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem3V)

function showPizzaItem4(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "block";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem4V)

function showPizzaItem5(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "block";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem5V)

function showPizzaItem6(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "block";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem6V)

function showPizzaItem7(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "block";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem7V)

function showPizzaItem8(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "block";
    document.getElementById("pizzaItem9Info").style.display = "none";
}

console.log(pizzaItem8V)

function showPizzaItem9(e) {
    document.getElementById("pizzaItem1Info").style.display = "none";
    document.getElementById("pizzaItem2Info").style.display = "none";
    document.getElementById("pizzaItem3Info").style.display = "none";
    document.getElementById("pizzaItem4Info").style.display = "none";
    document.getElementById("pizzaItem5Info").style.display = "none";
    document.getElementById("pizzaItem6Info").style.display = "none";
    document.getElementById("pizzaItem7Info").style.display = "none";
    document.getElementById("pizzaItem8Info").style.display = "none";
    document.getElementById("pizzaItem9Info").style.display = "block";
}

console.log(pizzaItem9V)


//Sandwiches items----------------------------------------------------->
var sandwichItem1V;
var sandwichItem2V;
var sandwichItem3V;
var sandwichItem4V;
var sandwichItem5V;
var sandwichItem6V;
var sandwichItem7V;







//event listeners------>
document.getElementById("sandwichItem1").addEventListener("click", showSandwichItem1);
document.getElementById("sandwichItem2").addEventListener("click", showSandwichItem2);
document.getElementById("sandwichItem3").addEventListener("click", showSandwichItem3);
document.getElementById("sandwichItem4").addEventListener("click", showSandwichItem4);
document.getElementById("sandwichItem5").addEventListener("click", showSandwichItem5);
document.getElementById("sandwichItem6").addEventListener("click", showSandwichItem6);
document.getElementById("sandwichItem7").addEventListener("click", showSandwichItem7);






//Functions------------>

function showSandwichItem1(e) {
    document.getElementById("sandwichItem1Info").style.display = "block";
    document.getElementById("sandwichItem2Info").style.display = "none";
    document.getElementById("sandwichItem3Info").style.display = "none";
    document.getElementById("sandwichItem4Info").style.display = "none";
    document.getElementById("sandwichItem5Info").style.display = "none";
    document.getElementById("sandwichItem6Info").style.display = "none";
    document.getElementById("sandwichItem7Info").style.display = "none";



}
console.log(sandwichItem1V)

function showSandwichItem2(e) {
    document.getElementById("sandwichItem1Info").style.display = "none";
    document.getElementById("sandwichItem2Info").style.display = "block";
    document.getElementById("sandwichItem3Info").style.display = "none";
    document.getElementById("sandwichItem4Info").style.display = "none";
    document.getElementById("sandwichItem5Info").style.display = "none";
    document.getElementById("sandwichItem6Info").style.display = "none";
    document.getElementById("sandwichItem7Info").style.display = "none";


}
console.log(sandwichItem2V)

function showSandwichItem3(e) {
    document.getElementById("sandwichItem1Info").style.display = "none";
    document.getElementById("sandwichItem2Info").style.display = "none";
    document.getElementById("sandwichItem3Info").style.display = "block";
    document.getElementById("sandwichItem4Info").style.display = "none";
    document.getElementById("sandwichItem5Info").style.display = "none";
    document.getElementById("sandwichItem6Info").style.display = "none";
    document.getElementById("sandwichItem7Info").style.display = "none";



}




function showSandwichItem4(e) {
    document.getElementById("sandwichItem1Info").style.display = "none";
    document.getElementById("sandwichItem2Info").style.display = "none";
    document.getElementById("sandwichItem3Info").style.display = "none";
    document.getElementById("sandwichItem4Info").style.display = "block";
    document.getElementById("sandwichItem5Info").style.display = "none";
    document.getElementById("sandwichItem6Info").style.display = "none";
    document.getElementById("sandwichItem7Info").style.display = "none";



}


function showSandwichItem5(e) {
    document.getElementById("sandwichItem1Info").style.display = "none";
    document.getElementById("sandwichItem2Info").style.display = "none";
    document.getElementById("sandwichItem3Info").style.display = "none";
    document.getElementById("sandwichItem4Info").style.display = "none";
    document.getElementById("sandwichItem5Info").style.display = "block";
    document.getElementById("sandwichItem6Info").style.display = "none";
    document.getElementById("sandwichItem7Info").style.display = "none";
}


function showSandwichItem6(e) {
    document.getElementById("sandwichItem1Info").style.display = "none";
    document.getElementById("sandwichItem2Info").style.display = "none";
    document.getElementById("sandwichItem3Info").style.display = "none";
    document.getElementById("sandwichItem4Info").style.display = "none";
    document.getElementById("sandwichItem5Info").style.display = "none";
    document.getElementById("sandwichItem6Info").style.display = "block";
    document.getElementById("sandwichItem7Info").style.display = "none";
}


function showSandwichItem7(e) {
    document.getElementById("sandwichItem1Info").style.display = "none";
    document.getElementById("sandwichItem2Info").style.display = "none";
    document.getElementById("sandwichItem3Info").style.display = "none";
    document.getElementById("sandwichItem4Info").style.display = "none";
    document.getElementById("sandwichItem5Info").style.display = "none";
    document.getElementById("sandwichItem6Info").style.display = "none";
    document.getElementById("sandwichItem7Info").style.display = "block";
}



//Salads Items------------------------------------------------------->

var saladsIemt1V;
var saladsIemt2V;
var saladsIemt3V;
var saladsIemt4V;

//event listeners------>
document.getElementById("saladItem1").addEventListener("click", showSaladItem1);
document.getElementById("saladItem2").addEventListener("click", showSaladItem2);
document.getElementById("saladItem3").addEventListener("click", showSaladItem3);
document.getElementById("saladItem4").addEventListener("click", showSaladItem4);

//Functions------------>

function showSaladItem1(e) {
    document.getElementById("saladItem1Info").style.display = "block";
    document.getElementById("saladItem2Info").style.display = "none";
    document.getElementById("saladItem3Info").style.display = "none";
    document.getElementById("saladItem4Info").style.display = "none";

}

function showSaladItem2(e) {
    document.getElementById("saladItem1Info").style.display = "none";
    document.getElementById("saladItem2Info").style.display = "block";
    document.getElementById("saladItem3Info").style.display = "none";
    document.getElementById("saladItem4Info").style.display = "none";

}

function showSaladItem3(e) {
    document.getElementById("saladItem1Info").style.display = "none";
    document.getElementById("saladItem2Info").style.display = "none";
    document.getElementById("saladItem3Info").style.display = "block";
    document.getElementById("saladItem4Info").style.display = "none";

}

function showSaladItem4(e) {
    document.getElementById("saladItem1Info").style.display = "none";
    document.getElementById("saladItem2Info").style.display = "none";
    document.getElementById("saladItem3Info").style.display = "none";
    document.getElementById("saladItem4Info").style.display = "block";

}

//burger items------------------------------------------------->

var burgerIemt1V;
var burgerIemt2V;
var burgerIemt3V;
var burgerIemt4V;


//event listeners------>
document.getElementById("burgerItem1").addEventListener("click", showburgerItem1);
document.getElementById("burgerItem2").addEventListener("click", showburgerItem2);
document.getElementById("burgerItem3").addEventListener("click", showburgerItem3);
document.getElementById("burgerItem4").addEventListener("click", showburgerItem4);

//Functions------------>

function showburgerItem1(e) {
    document.getElementById("burgerItem1Info").style.display = "block";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "none";

}

function showburgerItem2(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "block";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "none";
}

function showburgerItem3(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "block";
    document.getElementById("burgerItem4Info").style.display = "none";
}

function showburgerItem4(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "block";
}



//burgers items---------------------------------------------------->
var appetizerItem1V;
var appetizerItem2V;
var appetizerItem3V;
var appetizerItem4V;
var appetizerItem5V;
var appetizerItem6V;
var appetizerItem7V;
var appetizerItem8V;
var appetizerItem9V;
var appetizerItem10V;
var appetizerItem11V;
var appetizerItem12V;
var appetizerItem13V;
var appetizerItem14V;
var appetizerItem15V;



//event listeners------>
document.getElementById("appetizerItem1").addEventListener("click", showAppetizerItem1);
document.getElementById("appetizerItem2").addEventListener("click", showAppetizerItem2);
document.getElementById("appetizerItem3").addEventListener("click", showAppetizerItem3);
document.getElementById("appetizerItem4").addEventListener("click", showAppetizerItem4);
document.getElementById("appetizerItem5").addEventListener("click", showAppetizerItem5);
document.getElementById("appetizerItem6").addEventListener("click", showAppetizerItem6);
document.getElementById("appetizerItem7").addEventListener("click", showAppetizerItem7);
document.getElementById("appetizerItem8").addEventListener("click", showAppetizerItem8);
document.getElementById("appetizerItem9").addEventListener("click", showAppetizerItem9);
document.getElementById("appetizerItem10").addEventListener("click", showAppetizerItem10);
document.getElementById("appetizerItem11").addEventListener("click", showAppetizerItem11);
document.getElementById("appetizerItem12").addEventListener("click", showAppetizerItem12);
document.getElementById("appetizerItem13").addEventListener("click", showAppetizerItem13);
document.getElementById("appetizerItem14").addEventListener("click", showAppetizerItem14);
document.getElementById("appetizerItem15").addEventListener("click", showAppetizerItem15);





//Functions------------>

function showAppetizerItem1(e) {
    document.getElementById("appetizerItem1Info").style.display = "block";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";

}


function showAppetizerItem2(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "block";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem3(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "block";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}


function showAppetizerItem4(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "block";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem5(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "block";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem6(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "block";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem7(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "block";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem8(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "block";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem9(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "block";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem10(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "block";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem11(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "block";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}


function showAppetizerItem12(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "block";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}


function showAppetizerItem13(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "block";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem14(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "block";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem15(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "block";
}