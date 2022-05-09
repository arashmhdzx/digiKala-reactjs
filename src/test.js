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

// let guid = () => {
//     let s4 = () => {
//         return Math.floor((1 + Math.random()) * 0x10000)
//             .toString(16)
//             .substring(1);
//     }
//     //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }

// // console.log(guid());

// let text = "  "
// // console.log(text.trim().length>0);
// var myArray = [
//     {id:1, name:"bob"},
//     {id:2, name:"dan"},
//     {id:3, name:"barb"},
//    ]
   
//    // grab the Array item which matchs the id "2"
//    const data = {
//     token:guid(),
//     fName:"",
//     lName:"",
//     email: "",
//     cart: [],
//     wishlist: [],
//     address: [],
//     recentWatched: [],
//     orders: {
//         progress:[],
//         delivered:[],
//         returned:[],
//         canceled:[]
//     },
//     birthDate: "",
//     idNumber: "",
//     moneyReturnID: "",
//     password: "password",
//     phoneNumber: "localDataUserName"
// }

// console.log(Object.fromEntries(Object.entries(data).filter(([key]) => (!key.includes('email') 
// && !key.includes("password") && !key.includes("phoneNumber") && !key.includes("cart")))));

// const addresses = [
//     { id: 1, name: "test1" },
//     { id: 2, name: "test2" },
//     { id: 2, name: "test3" },
//     { id: 3, name: "test4" },
//     { id: 4, name: "test5" },
//     { id: 5, name: "test6" },
//     { id: 5, name: "test7" },
//     { id: 6, name: "test8" }
// ] // Some array I got from async call

// console.log(Array.from(new Set(addresses.map(a => a.id)))
//  .map(id => {
//    return addresses.find(a => a.id === id)
//  }))

console.log(Math.floor(10000 + Math.random() * 900000))

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(getRandomNumberBetween(6000,20000));