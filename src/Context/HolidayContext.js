import { createContext, useState } from "react";
import { useHoliday } from "../hooks/useHoliday";
import { URI_API } from "../const/const";
import { useFetch } from "../hooks/useFetch";


export const holidayContext = createContext({})

function HolidayContext({children}){
    const [holiday, setHoliday] = useState('')
    const [holidays] = useFetch(URI_API)
    return <holidayContext.Provider value={{holiday, setHoliday, holidays}}>
        {children}
    </holidayContext.Provider>
}
export {HolidayContext}