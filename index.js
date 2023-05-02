//Task 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2

const animals = ['monkey','dog','cat'];
console.log(animals[animals.length-1]);

//Task 3

const numbers = [5, 43, 63, 23, 90];

let firstLength = numbers.length;
for(let i = 0; i < firstLength; i++){
    numbers.pop();
    console.log(numbers);
}
/* Variant 2
for(let i = 0; i< firstLength; i++){
    numbers.shift();
    console.log(numbers);
}
*/ 

//Task 4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

//Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

for(let i =0; i < cats.length; i++){
    console.log(cats[i]);
}
for(let k of cats){
    console.log(k);
}

//Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = [];

for(let i = 0; i < oddNumbers.length; i++){
    allNumbers.push(oddNumbers[i]);
    allNumbers.push(evenNumbers[i]);
}
console.log(allNumbers);

for(let i = 0; i < allNumbers.length; i++){
    if(allNumbers[i]===8){
        console.log('index: '+ i);
        break;
    }
}


//Task 7

const binary = [0, 0, 0, 0];
let nol_Odin_Nol_Odin=[];
let counter = 0;

for(let i of binary){
    
    nol_Odin_Nol_Odin.push(i);
        
    if(counter<binary.length-1){     
        nol_Odin_Nol_Odin.push(1);
        counter++;
    }
}
nol_Odin_Nol_Odin = nol_Odin_Nol_Odin.toString();
console.log(nol_Odin_Nol_Odin);








//Task 1

let phrase = prompt('Введите слово для проверки на палиндром: ');

function palindromChecking(array){
    let isPalindrom = true;

    if(array.length>1){
        for(let  i = 0; i < array.length; ){
            for(let  k = array.length-1; k > i; k--){
                if(array[i] !== array[k]){
                    isPalindrom = false;
                }
            i++;
        }
        break;
        }
        alert('Результат: '+ isPalindrom);
    }
    else{
        alert('Длина слова слишком маленькая ');
    }
}
if(phrase!==null){
    palindromChecking(phrase);
}

//Task 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let sum = 0;
let elementsNum = 0;

for(let i of  matrix){
    for(let k of i ){
        sum+=k;
        elementsNum++;
    }
    // console.log(elementsNum);
}
//console.log(sum);
console.log('Среднее значение: '+ (sum/elementsNum));

//Task 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positiveNums = [];
const negativeNums = [];

for(let i of mixedNumbers){
    if(i<0){
        negativeNums.push(i);
    }
    else{
        positiveNums.push(i);
    }
}
console.log(positiveNums);
console.log(negativeNums);

//Task 4

const randArray = [];
const arrayElemInCube = [];

for(let i = 0; i < 5; i++){
    let x = prompt('Введите число для массива : ');
    x = Number(x);
    randArray.push(x);
}
for( let i = 0; i < randArray.length; i++){
    let x = 1;

    for(let degree = 1; degree <= 3; degree++){
        x=x*randArray[i];
    }
    arrayElemInCube.push(x);
}

alert(randArray);
alert(arrayElemInCube);