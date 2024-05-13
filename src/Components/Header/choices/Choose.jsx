import { useContext, useEffect, useState } from "react";
import styles from "./choises.module.css";
import { holidayContext } from "../../../Context/HolidayContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchHolidays, setHoliday } from "../../../redux/HolidaySlice";
import { fetchText } from "../../../redux/TextSlice";


function Choose() {
  const [openList, setOpenList] = useState(false)
  const holidaysList = useSelector((state)=>state.holiday.holidays)
  const holiday = useSelector((state)=>state.holiday.holiday)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHolidays())
  },[])
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={()=>{
        setOpenList(!openList)
      }}>
      {holiday[1] || 'Выберите праздник'}
      </button>
        {openList && <ul className={styles.list}>
          {Object.entries(holidaysList).map((el)=>{
            return <li className={styles.item} key={el[0]} onClick={()=>{
              dispatch(setHoliday(el))
              dispatch(fetchText(el[0]))
              setOpenList(!openList)
            }}>
                {el[1]}
                </li>
              })}
        </ul>}
    </div>
  );
}
export { Choose };
