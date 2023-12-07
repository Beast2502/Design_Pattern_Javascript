let arr = [3,2,4]
let target = 6;

let newResult = []
function getTheValue (arr) {
    for(let i =0 ;i<arr.length;i++){
        for(let j = i+1 ; j<arr.length; j++){
             if(arr[i] + arr[j] === target){
            newResult.push(i);
            newResult.push(j);
        }
        }
    }
}

getTheValue(arr)

console.log(newResult)