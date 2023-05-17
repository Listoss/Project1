let inputStr = document.getElementById('showResultPanel');

let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

let btnPlus = document.getElementById('btnPlus');
let btnMin = document.getElementById('btnMin');
let btnDivide = document.getElementById('btnDivide');
let btnMultiply = document.getElementById('btnMultiply');

let btnDel = document.getElementById('btnDel');
let showResBtn = document.getElementById('showResBtn');

function findFirstNum(mathExpression, i) {
    let firstNum='';
    for(let k = i-1; k>= 0; k--){
        if(Number(mathExpression[k]) || mathExpression[k]=='0'){               
            firstNum=firstNum +mathExpression[k];
        }
        else if(mathExpression[k]==='+'||mathExpression[k]==='-'||mathExpression[k]==='×'||mathExpression[k]===':')
            break;
    }
    firstNum = firstNum.split('').reverse().join('');
    return firstNum;
}

function findSecondNum(mathExpression, i){
    let secNum='';
    for(let k = i+1; k< mathExpression.length; k++){
        if(Number(mathExpression[k]) || mathExpression[k]=='0'){               
            secNum=secNum + mathExpression[k];
        }
        else if(mathExpression[k]==='+'||mathExpression[k]==='-'||mathExpression[k]==='×'||mathExpression[k]===':')
            break;
    } 
    return secNum;
}


function countAndShowResult() {
    let mathExpression = inputStr.value;
    let res = 0;

    for(let i = 0; i< mathExpression.length; i++){
        if(mathExpression[i] === ':'){
            let firstNum = findFirstNum(mathExpression, i);
            let secNum= findSecondNum(mathExpression, i); 
            res += firstNum/ secNum;     
        }
        else if(mathExpression[i] === '×'){
            let firstNum = findFirstNum(mathExpression, i);
            let secNum= findSecondNum(mathExpression, i); 
            res += firstNum * secNum;               
        } 
        else if(mathExpression[i] === '-'){
            let firstNum = findFirstNum(mathExpression, i);
            let secNum= findSecondNum(mathExpression, i); 
            res += firstNum - secNum;                        
        }   
        else if(mathExpression[i] === '+'){
            let firstNum = findFirstNum(mathExpression, i);
            let secNum= findSecondNum(mathExpression, i); 
            res += Number(firstNum) + Number(secNum);                       
        }  
    }
    let resWithTabulation=' ';
    for(let num of res.toString().split('')){
        resWithTabulation+=num + ' ';
    }
    resWithTabulation =  resWithTabulation.slice(0, resWithTabulation.length-1);
    inputStr.value = resWithTabulation;
}


btn0.addEventListener('click', () => inputStr.value+=' 0');
btn1.addEventListener('click', () => inputStr.value+=' 1');
btn2.addEventListener('click', () => inputStr.value+=' 2');
btn3.addEventListener('click', () => inputStr.value+=' 3');
btn4.addEventListener('click', () => inputStr.value+=' 4');
btn5.addEventListener('click', () => inputStr.value+=' 5');
btn6.addEventListener('click', () => inputStr.value+=' 6');
btn7.addEventListener('click', () => inputStr.value+=' 7');
btn8.addEventListener('click', () => inputStr.value+=' 8');
btn9.addEventListener('click', () => inputStr.value+=' 9');

btnPlus.addEventListener('click', () => inputStr.value+=' +');
btnMin.addEventListener('click', () => inputStr.value+=' -');
btnDivide.addEventListener('click', () => inputStr.value+=' :');
btnMultiply.addEventListener('click', () => inputStr.value+=' ×');

showResBtn.addEventListener('click', countAndShowResult);

btnDel.addEventListener('click', ()=>{ 
    let newInputStr = inputStr.value.slice(0, inputStr.value.length -2);
    inputStr.value = newInputStr;
    });

