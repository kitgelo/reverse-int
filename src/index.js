module.exports = function reverse (n) {
    if (n > 0) {
        let str = String(n).split('').reverse().join('');
        return Number(str)
    } else {
        let str = String(n).slice(1).split('').reverse().join('');
        return Number(str);
    };
}
