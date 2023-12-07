//  Bubble Sort


function bubbleSort(arr, n) {
    let i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]

                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

var arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr, arr.length);
console.log("Sorted arr");
console.log(arr)
