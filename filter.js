
const mynums = [1, 2,  3, 4, 5 , 6, 7, 8 , 9]

const newnum = mynums.filter( (num) => num > 4)

console.log(newnum);

const num = [1, 2,  3, 4, 5 , 6, 7, 8 , 9]

const newnums = mynums.filter( (num) => {
    return num > 4
})

console.log(newnum);