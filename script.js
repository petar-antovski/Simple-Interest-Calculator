//Function that checks that proper value is entered in the principal field, computes the interest and returns the result
function compute()
{
    //Obtain the values inputted for the principal, interest rate and number of years
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Check if principal field is empty or negative or zero
    var check_principal_is_positive = document.getElementById("principal");
    if(check_principal_is_positive.value <= 0)
    {
        alert("Enter a positive number");
        check_principal_is_positive.focus();
        return false;
    }
    else
    {
        //Calculate interest
        var interest = principal * years * rate /100;

        //Convert the 'No of Years' into the actual year in the future
        var current_year = new Date()
        var year = current_year.getFullYear() + parseInt(years);

        //Return the result with highlighted numbers
        document.getElementById("result").innerHTML= 'If you deposit <span class="highlight">' +principal+ ',</span> <br>at an interest rate of <span class="highlight">' +rate+ '%,</span><br>You will receive an amount of <span class="highlight">' +interest+ ',</span> <br>in the year <span class="highlight">' +year+ '</span><br>';
    }
}

function updateRate() 
{
    //Show the interest rest value chosen using the slider and update it on change
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}

function checkprincipal_is_positive()
{
    //Obtain the value inputted for the principal
    var principal_is_positive = document.getElementById("principal");
    
    //Check if principal is positive and greater than zero
    if(principal_is_positive.value <= 0 && principal_is_positive.value!="")
    {
        alert("Enter a positive number");
        principal_is_positive.focus();
        return false;
    }
}