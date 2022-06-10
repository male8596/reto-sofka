import "../App.css";

export default function QA({
  level = 1,
  points = 50,
  acumulados = 0,
  question = "¿?",
  answers = []
}) {
  return (
    <div>
      <h1>Nivel # {level}</h1>
      <p>(Por {points} puntos)</p>
      <button className="qabutton">Continuar</button>
      <button className="qabutton">Salir</button>
      <p>Pregunta {question}</p>
      {answers.map((element) => {
        return (
          <>
            <input type="radio" value={element} />
            <label>{element}</label>
          </>
        );
      })}
      <p> Puntos acumulados {acumulados} </p>
      <button className="qabutton">Enviar</button>
      <button className="qabutton">Finalizar</button>
    </div>
  );
}
