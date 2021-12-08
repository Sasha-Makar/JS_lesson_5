// Всі функції повинні бути описані стрілочним типом!!!!

// 1- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (n1,n2,n3)=> {
    if (n1<n2 && n1<n3){
        console.log(n1);
    }else if (n2<n1 && n2<n3){
        console.log(n2);
    }else {
        console.log(n3);
    }
}
minNum(300,150,250);

console.log('*****');

// 2- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum2=(n1,n2,n3)=> {
    if (n1>n2 && n1>n3){
        console.log(n1);
    }else if (n2>n1 && n2>n3){
        console.log(n2);
    }else {
        console.log(n3);
    }
}
maxNum2(300,150,250);

console.log('*****');

// 3- створити функцію яка повертає найбільше число з масиву
let arrayOfNum = [23,45,780,1,6,89];

let maxNumOfArr = (array)=>{
    let max = array[0];
    for (let element of array) {
        if (element>max){
            max = element;
        }
    }
    return max;
}
console.log(maxNumOfArr(arrayOfNum));

console.log('*****');

// 4- створити функцію яка повертає найменьше число з масиву
arrayOfNum = [23,45,780,1,6,89];

let minNumOfArr = (array)=> {
    let min = array[0];
    for (let element of array) {
        if (element<min){
            min = element;
        }
    }
    return min;
}
console.log(minNumOfArr(arrayOfNum));

console.log('*****');

// 5- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrSum=[1,2,3,4];     //// 10 /////

let sumNum = (arr)=> {
    let result = 0;
    for (nums of arr){
        // result = result + nums; ///  OR
        result+= nums;
    }
    return result;
}
console.log(sumNum(arrSum));

console.log('*****');

// 6- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let middleNum = [2,4,6];   ///// 4 ///

let middleArf = (arr)=> {
    let result = 0;
    for (let arrElement of arr) {
        result+=arrElement;
    }
    return result/arr.length;
}
console.log(middleArf(middleNum));

console.log('*****');

// 7- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let numberArr = [12,2,5,100,123];

let minMaxNum = (numberArr)=> {
    let min = numberArr[0];
    let max = numberArr[0];
    for ( const num of numberArr) {
        if (num>max){
            max=num;
        }
        if (num<min){
            min=num;
        }
    }
    console.log(max);
    return min;

}
document.write(`min number--${minMaxNum(numberArr)}`);

console.log('*****');

// 8- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomizer = (length)=> {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.round(Math.random()*100));
    }
    return emptyArr;
};
console.log(randomizer(5));

console.log('*****');

// 9- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomizer2 = (length,limit)=> {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.round(Math.random()*limit));
    }
    return emptyArr;
}
console.log(randomizer2(10,1000));

console.log('*****');

// 10- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let newArray = [1,2,3];

let reverse = (newArray)=> {
    let reversArr = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        reversArr.push(newArray[i]);
    }
    return reversArr
}

console.log(reverse(newArray));

console.log("*****");