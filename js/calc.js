var $inputDisplay = document.getElementById('display');
var $clear = document.getElementById('clearButton');
var $numButtons = document.getElementsByClassName('numButton');
var $operator = document.getElementsByClassName('operator');
var $equals = document.getElementById('equalsButton');

var numOne = 'x';
var opOp = 'y';
var numTwo = 'z';
var answer = 'a';
var eqCom = false;



//Clear function
function clearIt(){
    $inputDisplay.value = '';
    numOne = 'x';
    opOp = 'y'
    numTwo = 'z';
    answer = 'a';
    eqCom = false;
}

//Number display function
function logIt(){
    if (eqCom === true){
        clearIt();
        /*$inputDisplay.value = '';
        numOne = 'x';
        eqCom = false;*/
    }
    $inputDisplay.value += this.value;
}

function operateIt(){
    /*if (numOne != 'x' && numTwo != 'z') {
        answer = eval(numOne + opOp + numTwo);
        $inputDisplay.value = answer;
        numOne = answer;
        answer = 'a';
        numTwo = 'z';
    } if (numOne != 'x' && numTwo === 'z') {
        numTwo = $inputDisplay.value;
        opOp = this.value;
        answer = eval(numOne + opOp + numTwo)
        $inputDisplay.value = answer;
        numOne = answer;
        answer = 'a';
        numTwo = 'z';
        eqCom = true;
    }*/
    if (numOne != 'x'  && eqCom === true) {
        opOp = this.value;
        $inputDisplay.value = '';
        eqCom == false;
    } if (numOne != 'x' && eqCom === false) {
        //opOp = this.value;
        numTwo = $inputDisplay.value;
        answer = eval(numOne + opOp + numTwo);
        opOp = this.value;
        $inputDisplay.value = answer;
        numOne = answer;
        numTwo = 'z';
        answer = 'a';
        //opOp = 'y';
        eqCom = true;
    }if (numOne === 'x') {
        numOne = $inputDisplay.value;
        opOp = this.value;
        $inputDisplay.value = '';
    } 
}

function equalIt(){
    if (numOne != 'x' && numTwo != 'z') {
        answer = eval(numOne + opOp + numTwo);
        $inputDisplay.value = answer;
        numOne = answer;
        answer = 'a';
        eqCom = true;
    } if (numOne != 'x' && numTwo == 'z') {
        numTwo = $inputDisplay.value;
        answer = eval(numOne + opOp + numTwo)
        $inputDisplay.value = answer;
        numOne = answer;
        answer = 'a';
        numTwo = 'z';
        eqCom = true;
    }
}

function clickClass(x,y){
	for(i = 0; i < x.length; i ++){
		x[i].addEventListener('click', y);
	}
}

//Clear event listener
$clear.addEventListener('click', clearIt);

//Number buttons event listner
clickClass($numButtons, logIt);

//Operator event listener
clickClass($operator, operateIt);

//Equals event listener
$equals.addEventListener('click', equalIt);

