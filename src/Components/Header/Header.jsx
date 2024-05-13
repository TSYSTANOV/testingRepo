import styles from "./header.module.css";
import { Container } from "../Container/Container";
import { Choose } from "./choices/Choose";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../redux/imageSlice";
import { fetchText } from "../../redux/TextSlice";

function Header() {
  const { holiday } = useSelector((state) => state.holiday);
  const loadingText = useSelector((state) => state.text.loading);
  const loadingImage = useSelector((state) => state.image.loading);
  console.log(loadingImage);
  console.log(loadingText);
  const dispath = useDispatch();
  function handleChangeImg() {
    dispath(fetchImages(holiday[0]));
  }
  function handleChangeText() {
    dispath(fetchText(holiday[0]));
  }
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={handleChangeText}
              disabled={!holiday}
            >
              {loadingText !== "loading" ? "Поменять поздравление" : "Загрузка"}
            </button>
            <button
              className={styles.button}
              onClick={handleChangeImg}
              disabled={!holiday}
            >
              {loadingImage !== "loading" ? "Поменять фон" : "Загрузка"}
            </button>
            <Choose />
          </div>
        </div>
      </Container>
    </header>
  );
}
export { Header };
