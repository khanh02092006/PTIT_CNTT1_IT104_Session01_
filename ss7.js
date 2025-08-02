const tinhtongcacmang = (...arrays) => {
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        let sum = 0;
        if (Array.isArray(array)) {
            for (let j = 0; j < array.length; j++) {
                sum += array[j];
            }
        }
        result.push(sum);
    }
    return result;
}
const arr1 = [1, 2];
const arr2 = [6, 7, 8];
const arr3 = [12, 8];
const tong = tinhtongcacmang(arr1, arr2, arr3);
console.log(tong); 