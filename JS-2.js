let result = [{name : 'A' , age: 20 } , {name : 'B' , age:30}].map((val)=>{
    if(val.name === 'A'){
        val.name = 'Abbb';
    }
    return val;
})


console.log(result)



