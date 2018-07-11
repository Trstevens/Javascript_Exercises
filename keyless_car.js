//Making a Keyless Car respond to a User

//FUNCTION DECLARATION//

//Function prompts user what their age is
function checkDriverAge(){
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge();

//FUNCTION EXPRESSION//
var checkDriverAge2 = function(){
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge2();


//BONUS Only use the return keyword

function checkDriverAge3(age){
	if (Number(age) < 18){
		alert("Sorry you are too young to drive this car. Powering off.");
	}else if (Number(age) > 18){
		alert("Powering on. Enjoy the ride!");
	}
	else if (Number(age) == 18){
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}

}