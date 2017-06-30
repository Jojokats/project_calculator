// calculator

//Global vars

var num1 = "";
var num2 = "";
var operator;
var flag = 0; // false
var display = document.getElementById("display");
var equalTo = 0;

//function setNumber(value)
//<button class="num-button" id="button" onclick="setValue(7)">7</button>

function setValue(number){
  if(equalTo === 1) {
    clearButton();
  }

  if(flag === 0) {
    num1+= number;
    //alert(num1);
    display.innerHTML+= number;
  }
  else {
    //if an operator button has been clicked, flag === true;
    num2+= number;
    display.innerHTML+= number;
  }
  //We will limit the amount of digits being displayed
  if(num1.length > 10 || num2.length > 10) {
    display.innerHTML= "Max limit of digits reached";
  }

}// end of function

// function oppClick(numericCode)

function oppClick(numericCode) {

  operator = numericCode;
  var oppString = "";
  flag = 1;

    if(operator === 4) {
      display.innerHTML+= "/";
      oppString = "/";

    }else if(operator === 3) {
      display.innerHTML+= "*";
      oppString = "*";

    }else if(operator === 2) {
      display.innerHTML+= "-";
      oppString = "-";

    }else {
      display.innerHTML+= "+";
      oppString = "+";

    }//end of else

    if(flag === 1) { //if an operator button has been clicked, flag === true;
      display.innerHTML = num1 + oppString;
    }// end of if

    if(flag === 1 && num1 === "") {
      clearButton();
    }// end of if

    if(equalTo === 1) {
      clearButton();
    }// end of if

}// end of function
