import React from "react";
import Obrok from "./Obrok";

export default function jelovnik({ obrokInfo }) {
  const hranMat = obrokInfo.nutrients;

  return (
    <main>
      <section className="korisneInfo">
        <h1>Preporučeni recepti:</h1>
        <table id="TabelaHranMat">
          <tr>
            <th>Kalorije</th>
            <th>Ugljeni Hidrati</th>
            <th>Masti</th>
            <th>Proteini</th>
          </tr>
          <tr>
            <td>{hranMat.calories.toFixed(0)}</td>
            <td>{hranMat.carbohydrates.toFixed(0)}</td>
            <td>{hranMat.fat.toFixed(0)}</td>
            <td>{hranMat.protein.toFixed(0)}</td>

          </tr>
        </table>
      </section>

      <section className="Obroci">
        {obrokInfo.meals.map((obrok) => {
          return <Obrok key={obrok.id} obrok={obrok} />;
        })}
      </section>
    </main>
  );
}