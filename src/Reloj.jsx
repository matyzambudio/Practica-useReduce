import React from "react";
import "./App.css";
import { useReducer, useState } from "react";

const año = new Date().getFullYear();
const mes = new Date().getMonth();
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const inicial = { a: año, m: mes };

const redu = (stado, action) => {
  let newmes = stado.m;
  let newano = stado.a;

  switch (action.type) {
    case "restarM":
    newmes = newmes == 0 ? 11 : newmes - action.value
      break;
    case "sumarM":
      newmes = newmes == 11 ? 0 : newmes + action.value
      break;
    case "restarA":
      newano = newano == 0 ? newano : newano - action.value
      break;
    case "sumarA":
      newano = newano + action.value
      break;
  }
  return { m: newmes, a: newano };
};

export default function Reloj() {
  const [stado, dispatch] = useReducer(redu, inicial);
  const [zero,setZero] = useState(0)


  const valor = (e) => {
           const nuevovalor = parseInt(e.target.value);
           setZero(nuevovalor)
  }

  
  return (
    <div style={{ fontSize: "25px" }}>
      <div>
        <input  type="number" value={zero}  onChange={valor} /> 
      </div>
      <div className="caja">
        <h1 className={((stado.m <= mes && stado.a <= 2024 ||
         stado.a < 2024 ? "green" : "red"))}>
          
          {meses[stado.m]}</h1>

        <button onClick={() => dispatch({ type: "restarM" , value:zero })}> -</button>

        <button onClick={() => dispatch({ type: "sumarM" , value:zero })}> +</button>
      </div>

      <div className="caja">
        <h1 className={((stado.a > 2024 ? "red" : "green "))}>{stado.a}</h1>

        <button onClick={() => dispatch({ type: "restarA" , value:zero})}>-</button>

        <button onClick={() => dispatch({ type: "sumarA" ,value:zero})}>+</button>
      </div>
    </div>
  );
}


