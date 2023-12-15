Array.prototype.myMap = function(callback){
    const resultArr = [];

    for(let index = 0; index < this.length ; index ++){
        resultArr.push(callback(this[index] , index , this))
    }

    return resultArr;
}


[1,2,3,4].myMap((value , index , Array)=>{
    console.log(value)
})