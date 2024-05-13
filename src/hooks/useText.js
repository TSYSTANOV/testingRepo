import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

function useText(holiday){
    let url = URI_API + 'text/' + holiday
    const [data, setData] = useState('')
    useEffect(()=>{
        if(holiday){
            fetch(url)
        .then(data=>data.json())
        .then(data=>setData(data))
        }
        
    },[holiday])
    return [data]
}
export {useText}