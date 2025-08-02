const mergeSortedArrays = (arr1, arr2) => {
    const relust = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            relust.push(arr1[i]);
            i++;
        } else {
            relust.push(arr2[j]);
            j++;
        }


    }
    while (i < arr1.length) {
        relust.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        relust.push(arr2[j]);
        j++;
    }
    return relust;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));