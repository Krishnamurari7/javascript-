const coding = ["js", "c", "java","html","python"]


const values = coding.forEach((item) => {
    console.log(item);
    return item
})

console.log(values);

const mynums = [1, 2,  3, 4, 5 , 6, 7, 8 , 9]

const newNum = []

mynums.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})

console.log(newNum);