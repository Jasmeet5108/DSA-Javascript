function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        let tempVar = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = tempVar
    }
    return arr;
}

const arr = [23, 43, 22, 20, 33, 14, 19, 65, 62, 34, 35, 9, 54];
const sortedArr = selectionSort(arr);
console.log(sortedArr);