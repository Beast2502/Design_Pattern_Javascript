// sort an array of even numbers in ascending order, but keep the odd numbers at their position? without using any inbuilt function.
// question:['88','7','21','28','1','2','3']
// expected output: ['2','7','21','28','1','88','3']

let arr = [88,7,21,28,1,2,3]

let temp;
for(let i =0;i<arr.length ; i++){
   for(let j= i + 1 ; j<arr.length;j ++){
       if(arr[i]>arr[j] && arr[i]%2 === 0 && arr[j]%2 === 0){
           temp =arr[i]
           arr[i] = arr[j];
           arr[j]  = temp;
       }
   }
    }
    
    console.log(arr)
