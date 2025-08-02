const chenmang = (arr1, arr2, vitri) => {
    if (vitri < 0 || vitri > arr1.length) {
        return "Vị trí không hợp lệ";
    }
    const ketqua = [
        ...arr1.slice(0, vitri),
        ...arr2,
        ...arr1.slice(vitri)

    ]
    return ketqua;

}
console.log(chenmang([1, 2, 3, 7, 8], [4, 5, 6], 3));