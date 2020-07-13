import React from "react";
// map函數有2個參數. 1.array里所有的值(value),2.array的索引(index)
// 參數名字可以自取,一樣就好

let arr1= [1,2,3]
console.log(arr1.map((value, index) => value * 2))

let obj1= {
    arr1:[1,2,3]
}
console.log(obj1.arr1.map(x => x * 2))

const str1 = {
    name:'curry'
}
str1.name = 'eva'
console.log(str1)   // #eva

// let obj1 = {
//     arr1: [
//         {num: 1},
//         {num: 2},
//         {num: 3}
//     ]
// }

let btn1 = <button>Button1</button>
let arr2 = [
    <button key="1">Button1</button>,
    <button key="2">Button2</button>,
    <button key="3">Button3</button>,
    <button key="4">Button4</button>
]

let arr3 = ['Diana','Curry','Roger','Stan']
const renderBtnArr = () => {
    return arr3.map((value, index) => {
        return <button key={index} onClick={event => alert(value)}>{value}</button>
    })
}

export const ShowEx = () => {
    return (
        <div>
            {renderBtnArr()}
        </div>
    )
}