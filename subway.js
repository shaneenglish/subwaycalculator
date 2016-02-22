var use;
var monthly;

function SubwayCard(){
	use = document.getElementById("subwayuse").value;
	monthly = use * 4;
	alert("You use the subway " + monthly + " times per month.");
	rideSubway();
}

function rideSubway(){
	if (monthly > 42) {
		alert("You should buy the 30-day unlimited card.");
	} else {
		alert("You should buy the pay per ride.");
	}
}