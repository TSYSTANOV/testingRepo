import { useContext } from "react";
import { textContext } from "../../../Context/TextContext";
import { useSelector } from "react-redux";

function Felicitation(props) {
  const text =  useSelector((state)=>state.text.text.text)
  console.log(text)
  return (
    <p className={props.className}>
      {text || 'Выберите повод для поздравления'}
    </p>
  );
}
export { Felicitation };
