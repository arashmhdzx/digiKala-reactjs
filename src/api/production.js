export const AddProduct = (props) => {
    console.log(props);
    var localData = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))["token"]
    var findItem = localData["cart"].find(el => el.id === props.id)
    fetch(`http://localhost:8000/accounts/${token}/cart`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    // if (findItem === undefined) {
    //     localData["cart"].push(props);
    //     console.log(localData);
    //     localStorage.removeItem("user")
    //     localStorage.setItem("user", JSON.stringify(localData))
        
        
    // }

}