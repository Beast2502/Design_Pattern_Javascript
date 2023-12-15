// Promises in Javascript 
// Synchronous Vs Asynhronous Code 

console.log('Start');


const sub =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const result = true;
        if(result) resolve('Subscribeb to Roadside Coder');
        else reject(new Error("Why arent you subsbribed"))
    },2000)
});


console.log(sub);

sub.then((res)=>{
    console.log(res)
}).catch((err)=>{console.error(err)})


console.log('End');