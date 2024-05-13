import { useSelector } from "react-redux";

function Felicitation(props) {
  const text = useSelector((state) => state.text.text.text);
  return (
    <p className={props.className}>
      {text || "Выберите повод для поздравления"}
    </p>
  );
}
export { Felicitation };
