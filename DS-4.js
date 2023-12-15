let arr = [10, 20, 20, 10, 10, 20, 5, 20];
let n = arr.length;
countFreq(arr, n);

function countFreq(arr, n) {
    let count = 1;
    let result = [];

    let unique = Array.from(new Set(arr));
    console.log(unique)
    for (let i = 0; i < unique.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (unique[i] == arr[j]) {
                count++;
            }


        }

        console.log(unique[i], count);
    }


}

