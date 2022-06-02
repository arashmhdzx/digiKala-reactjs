import axios from "axios"

const client = axios.create({
    baseURL:"http://localhost:8000"
})

const getSlideProduct = async (e) => {
    const { data } = await client.get(`/products?category=${e}`)
    return data
}


const fetchData = async () =>{
        const { data } = await client.get("https://my-json-server.typicode.com/arash-mehdizadeh/digiKala-reactjs/db")
        console.log(data)
}

const getProduct = async (e) => {
    const { data } = await client.get(`/products/${e}`)
    return data
}

const getSortedProducts = async (e) => {
    const { data } = await client.get(`/products?_sort=${e}`)
    return data
}

const getAllresult = async(e) => {
    const { data } = await client.get(`/products?q=${e}`)
    return data
}

export {
    getSlideProduct,
    getProduct,
    getSortedProducts,
    getAllresult
}