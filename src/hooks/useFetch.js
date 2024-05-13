import { useEffect, useState } from "react";


function useFetch(url){
    const [data, setData] = useState('')
    useEffect(()=>{
        fetch(url)
        .then(data=>data.json())
        .then(data=>setData(data))
    },[url])
    return [data]
}
export {useFetch}