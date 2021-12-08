// Всі функції повинні бути описані стрілочним типом!!!!

// 1- створити функцію яка обчислює та повертає площу прямокутника висотою

// S=a*b

let squareArea = (a, b) => {
    return a * b;
};
console.log(squareArea(2, 2));

console.log("*****");

// 2- створити функцію яка обчислює та повертає площу кола

// формула  Sкола= π*r2

let sRound = (r)=>{
    return 3.14 * Math.pow(r,2)
}
console.log(sRound(10));

console.log("*****");

// 3- створити функцію яка обчислює та повертає площу циліндру

// формула S = 2*π*R*h

let cylinder = (r,h)=>{
    return 2* 3.14 *r *h;
}
console.log(cylinder(10, 10));

console.log('*****');

// 4- створити функцію яка приймає масив та виводить кожен його елемент

let arr=[1,5,4,-7,'okten','school'];
let array=(arr)=> {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        document.write(arr[i]);
    }
}
array(arr);

document.write(`<hr>`);
console.log('*****');

// 5- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let textParagrafe = (text)=>{
    document.write(`<p>${text}</p>`);
}
textParagrafe('Okten is cool');

document.write(`<hr>`);

// 6- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    let creator = (text)=> {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}
creator('ofline');

document.write(`<hr>`);

// 7- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    let creator2 = (text,size)=> {
    document.write('<ul>');
    for (i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};
creator2('okten is cool',3);

document.write(`<hr>`);

// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrElement = [2,-4,0.32,'okten',true,false,'warsawa'];
let listItem = (arrElement)=> {
    document.write('<ul>');
    for (let item of arrElement) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>');
}
listItem(arrElement);

document.write(`<hr>`);

// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let newArr = [{id: 1, name: 'sasha', age: 40}, {id: 2, name:'masha', age:20}];
let createDoc = (newArr)=> {
    for (let item of newArr) {
        document.write(`<div>`);
        document.write(`<div>${item.id})-${item.name}-${item.age}</div>`);
        document.write(`</div>`);
    }
};
createDoc(newArr);
document.write('<hr>');

//////////////////////////////////////////////////////////////////////////////////////////