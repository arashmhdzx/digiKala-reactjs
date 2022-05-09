function moneyFormat(n) {
    return n.toFixed(2).replace(',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
        return '.' + s
    })
}
export default moneyFormat