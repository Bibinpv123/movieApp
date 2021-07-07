import React, { useState, useEffect } from "react";
import "./Component.css";
import { Link } from "react-router-dom";

// const url = "https://wookie.codesubmit.io/movies";
export const DataContext = React.createContext(null);
function Component1(movie) {
  var genres = movie.value;
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
    <DataContext.Provider value={movie}>
      <div className="movie_collection">
        <div className="header">
          <h1>{movie.value}</h1>
        </div>
        <div className="action_cont">
          {movie.movie.map((movie) => {
            if (movie.genres.includes(genres)) {
              return (
                <>
                  <div className="action_movie">
                    <Link to="/film">
                      <img
                        src={movie.backdrop}
                        style={{ width: "300px", float: "left" }}
                        alt=""
                      />
                    </Link>
                  </div>
                </>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default Component1;
