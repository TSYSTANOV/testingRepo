import { useEffect, useState } from "react";
import styles from "./choises.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchHolidays, setHoliday } from "../../../redux/HolidaySlice";
import { fetchText } from "../../../redux/TextSlice";
import { fetchImages } from "../../../redux/imageSlice";

function Choose() {
  const [openList, setOpenList] = useState(false);
  const { holiday, holidays } = useSelector((state) => state.holiday);
  const loadingText = useSelector((state) => state.holiday.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHolidays());
  }, []);
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setOpenList(!openList);
        }}
        disabled={!loadingText}
      >
        {loadingText && loadingText !== "success"
          ? "Загрузка"
          : holiday[1] || "Выберите праздник"}
      </button>
      {openList && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((el) => {
            return (
              <li
                className={styles.item}
                key={el[0]}
                onClick={() => {
                  dispatch(setHoliday(el));
                  dispatch(fetchText(el[0]));
                  dispatch(fetchImages(el[0]));
                  setOpenList(!openList);
                }}
              >
                {el[1]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export { Choose };
