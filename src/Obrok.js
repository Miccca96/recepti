import React, { useState, useEffect } from "react";

export default function Obrok({ obrok }) {
  const [urlSlika, setUrlSlika] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${obrok.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setUrlSlika(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  },[obrok.id]);

  return (
    <article>
      <h1>{obrok.title}</h1>
      <img src={urlSlika} alt="Slika datog obroka" />
      <p>Obrok :{obrok.title} je namenjen za
       {obrok.servings} osoba i vreme pripreme je: 
       {obrok.readyInMinutes} minuta</p>

      <a href={obrok.sourceUrl}>Pogledaj Recept Detaljnije</a>
    </article>
  );
}