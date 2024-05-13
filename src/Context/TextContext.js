import { createContext, useContext } from "react";
import { holidayContext } from "./HolidayContext";
import { useText } from "../hooks/useText";
import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../const/const";


export const textContext = createContext({})

function TextContext({children}){
    const {holiday} = useContext(holidayContext)
    const textHoliday = useFetch(URI_API + 'text/' + holiday[0])
    return <textContext.Provider value={holiday ? textHoliday[0].text : 'Выберите повод для поздравления'}>
                {children}
            </textContext.Provider>
}
export {TextContext}