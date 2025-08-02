const kiemtrasochan = (x) => {
    if (typeof x !== 'number' || isNaN(x)) {
        return console.log('Vui lòng nhập một số hợp lệ');
    }
    if (x % 2 === 0) {
        return console.log(`${x} là số chẵn`);
    } else {
        return console.log(`${x} là số lẻ`);
    }

}
console.log(kiemtrasochan(4));
console.log(kiemtrasochan(5));
console.log(kiemtrasochan('a'));
console.log(kiemtrasochan(NaN)); 