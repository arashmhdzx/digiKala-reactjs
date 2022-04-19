import React,{ useState } from 'react'

const DataEditor = () => {
    const [data, setData] = useState([])
    React.useEffect(()=>{

        fetch("http://localhost:8000/products").then(
            res => (res.json()
        )).then(
            data => setData(data)
        )
    },[]);

    data && data.map(el => {
        el.id = Math.floor(100000 + Math.random() * 900000);
        el.sold = Math.floor(Math.random()*(20000-6000+1)+6000);
        el.seen = Math.floor(Math.random()*(1200000-100000+1)+100000);
    })

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(data)

    const postData = () =>{
         fetch('http://localhost:8000/newProducts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
    }
    // console.log(data);
    

  return (
    <div onClick={()=>{postData()}}>dataEditor</div>
  )
}

export default DataEditor