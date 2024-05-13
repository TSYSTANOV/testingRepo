import { createContext, useContext } from "react";
import { holidayContext } from "./HolidayContext";
import { useImage } from "../hooks/useImage";
import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";


export const imageContext = createContext({})

function ImageContext({children}){
    const {holiday} = useContext(holidayContext)
    const [image] = useFetch(URI_API+'image/'+holiday[0])
    return <imageContext.Provider value={holiday ? image.urlImg : ''}>
        {children}
    </imageContext.Provider>
}
export {ImageContext}