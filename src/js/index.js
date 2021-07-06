console.log('------------- #4')
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);

console.log('------------- #5')
let str = 'my-short-string'
console.log(str.split('-'))

console.log('------------- #6')
let customArr = ['JavaScript', 2015]
console.log(customArr.join(' '))

console.log('------------- #7')
let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
console.log(users.filter(user => user.age < 20))

console.log('------------- #8')
let getNames = (arr) => {
    let res = []
    arr.forEach(el => res.push(el.name))
    return res
}
let names = getNames(users)
console.log(names)

console.log('------------- #9')
let filterRangeInPlace = (arr, a, b) => arr.filter(el => a <= el && el <= b)

let arr = [5, 3, 8, 1];
arr = filterRangeInPlace(arr, 1, 4);
console.log( arr );

console.log('------------- #10')

let strToArray = (str, separator = ' ') => str.split(separator)

console.log(strToArray('hello world'))
console.log(strToArray('hello-world','-'))

console.log('------------- #11')
let testArr = [5, 3, 8, 1];
let slArray = (arr, startIndex, endIndex) => arr.slice(startIndex, endIndex)
let range = slArray(testArr,1,3)
console.log(range)
console.log(testArr)

console.log('------------- #12')
let sum = (...arg) => arg.reduce((acc, el) => acc + el, 0)
console.log( sum(3,4))
