import React, { useState, useEffect } from "react";
import { DataContext } from "./Component1.js";

// const url = "https://wookie.codesubmit.io/movies";

function Film() {
  const state = React.useContext(DataContext);
  //   const [movie, setMovie] = useState([]);

  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer Wookie2019",
  //     },
  //   };

  //   const getData = async () => {
  //     const response = await fetch(url, requestOptions);
  //     const movie = await response.json();
  //     setMovie(movie);
  //     console.log(movie.movies[0].genres);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div className="movie_collection">
      <h1>reached</h1>
      {console.log(state)}
    </div>
  );
}

export default Film;
