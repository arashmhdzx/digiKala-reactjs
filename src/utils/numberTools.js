
const EngTofaNum = (data) => {

    const mainFunc = (num) => {
        const e2p = (s) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
        return e2p(num) ;
    }

    if (typeof data === "number"){
        const validInput = data.toString();
        return mainFunc(validInput) ;
    }
    else{
        return mainFunc(data);
    }
    
}

const NumberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return parts.join(",");
    }

export { EngTofaNum , NumberWithCommas };