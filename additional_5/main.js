// 1- Дано натуральное число n. Выведите все числа от 1 до n.
let n = 20;
let i = 0;

function iterator(i) {
    i++;
    console.log(i);
    if (i >= n) {
        return;
    }
    iterator(i);
}

iterator(i);

console.log('*****');

// 2- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let iterator2 = (A,B)=> {
    if (A<B){
        for (let i=A; i<=B;i++){
            console.log(i);
        }
    }else if (A>B){
        for (let i=A;i>=B;i--){
            console.log(i);
        }
    }else{
        console.log(0);
    }
}
iterator2(1,10);
console.log('***');
iterator2(10,1);
console.log('***');
iterator2(5,5);

console.log('*****');


// 3-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let change=(array, i)=>{
    let index=array[i];
    array[i]=array[i+1];
    array[i+1]=index;
    return array;
};
console.log(change([9, 8, 0, 4], 0));
console.log(change([9, 8, 0, 4], 1));
console.log(change([9, 8, 0, 4], 2));

console.log('*****');


// 4- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

newArr=[];
let transfer=(arr)=>{
    for (let i = 0; i < arr.length; i++) {

        if(arr[i]){
            newArr.push(arr[i])
        }
    }

    let newArrLength = newArr.length;

    let length = arr.length-newArr.length;

    for (let k = 0; k < length; k++, newArrLength++ ) {
        newArr[newArrLength]=0;
    }
    return newArr;
}

let array1=[1,0,6,0,3,0,5,0,0,0,7,8,9,6,0,1];
console.log(transfer(array1));




