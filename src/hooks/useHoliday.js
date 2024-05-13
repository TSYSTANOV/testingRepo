import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

function useHoliday(){
    const [data, setData] = useState('')
    useEffect(()=>{
        fetch(URI_API)
        .then(data=>data.json())
        .then(data=>setData(data))
    },[])
    return [data]
}
export {useHoliday}