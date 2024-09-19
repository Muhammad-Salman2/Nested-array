let array1 = [
    [6, 2, 3],
    [5, 15, 6],
    [7, 8, 9]
]

let array2 = [
    [10, 12, 13],
    [4, 5, 6],
    [7, 85, 29]
]

let result = [];

for(let i = 0; i < array1.length; i++){
       let emtArry = [];
    for (let j = 0; j < array2.length; j++) {
        
        let plus = array1[i][j] + array2[i][j];
        emtArry.push(plus)
        
    }
    result.push(emtArry);
}
console.log(result);
