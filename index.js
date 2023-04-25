//Task 1

let man = {
    name: 'John',
    age: 30
};

delete man.name;
delete  man.age;


//Task 2

let person = {
    name: 'Logan',
    age: 19
};

console.log('age' in person);

//Task 3

const student ={
    name: 'John',
    age: 19,
    isHappy: true
};

for(let key in student){
    console.log(key);
}
for(let key in student){
    console.log(student[key]);
}

//Task 4

const colors ={
    'ru pum pu ru rum':{
        red:'красный',
        green:'зеленый',
        blue:'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//Task 5

let salaries ={
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexey: 664,
    alexandra: 199
};

let srZP = 0;
let employeesNum = 0;

for(let key in salaries){
    srZP += salaries[key];
    employeesNum++;
}

srZP=srZP/employeesNum;
console.log('Средняя зарплата: '+srZP);

//Task 6

    var user = {
	name: 'Petya',
	age: 20,
	isMarried: true,
	family: undefined,
	address: null,
	friend: {
		name: 'Misha'
	}
    };

    var cloneUserObject = { writable: false,};

    for(let key in user){
        if((typeof user[key]) === 'object'){          
            continue;
        }
        cloneUserObject[key] = user[key];
        //cloneUserObject[key].writable = false;
    }    
    //alert('friend' in cloneUserObject);

