function compute()
{
	document.getElementById("result").innerHTML = "";
    var principal = document.getElementById("principal").value;
    //Checks if principal is negative then alert and focus on principal
    if (! principal){
    	window.alert("Enter a positive number");
    	document.getElementById("principal").focus();

    }

    else if (parseFloat(principal)<=0){
    	window.alert("Enter a positive number");
    	document.getElementById("principal").focus();

    }
    else
    {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(interest);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at \
    an interest rate of <mark>"+rate+"</mark>%\<br\>You will \
    receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark> "+year+"</mark>\<br\>";
	}
}

// function to update rate when range is slided
function updateRate(val) 
{
    var rateval = val;
    document.getElementById("rate").value=rateval;
    document.getElementById("rate_val").innerText=rateval;
}


