let arr = [1,4,2,-2,-9,10,2,12,2,-4,-4,-4,-4,2,6,7]

let peak = arr[0];
let output = []
index = 0;

for(let i =1 ; i < arr.length ; i++){
    if(arr[i] * arr[i-1] > 0){
        if(peak <0 && arr[i] < peak){
            peak = arr[i];
            index = i

            console.log(peak ,"PEAK 1")
        }
        if( peak >=0 && arr[i] > peak){
            peak = arr[i];
            index = i;

            console.log(peak , "PEAK 2")
        }

    }
    else{
        // console.log(index, peak)
        output.push({index,peak});
        peak = arr[i];
        index =i
    }
}


console.log(output)
