let string = 'PYnative29@#8496';

let str = string.split('')
console.log(str)

let total = 0;
let countOfval = 0;

str.map((val)=>{
    // console.log(val, typeof(val) , parseInt(val))
    
    if(parseInt(val)){
        total = total + parseInt(val);
        countOfval = countOfval + 1;
    }
})

let avg = total/countOfval;


console.log(total , countOfval , avg , avg.toFixed(3) )








