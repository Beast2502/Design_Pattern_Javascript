let arr =  [1,8,6,2,5,4,8,3,7,7];

// Bubble sort

for(let i =0 ;i< arr.length ; i++){
    for(let j= i+1; j<arr.length ; j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// count and largest
// if count is less than 2 remove the element
let finalArr = [];
let count = 0 ;

for(let i = 0 ;i<arr.length ; i++){
     for(let j = i; j<arr.length ; j++){
        if(arr[i] === arr[j]){
            console.log(arr[i] , arr[j])
        }
     }
}


console.log(arr)
