// const data = "937317761";
// console.log("0"+data);

// let pass = [{address: [],
// cart: [],
// email: "arash.mehdiizadeh@gmail.com",
// fName: "آرش",
// id: "9372317761",
// lName: "مهدیزاده",
// password: "abc123",
// recentWatched: [],
// wishlist: []}]

// console.log( pass[0].password)

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

console.log(guid());

let text = "  "
console.log(text.trim().length>0);