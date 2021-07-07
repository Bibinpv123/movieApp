import "./App.css";
import Header from "./Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Component1 from "./Component1.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Film from "./Film.js";

const url = "https://wookie.codesubmit.io/movies";

function App() {
  const [movie, setMovie] = useState([]);
  const [genres, SetGenres] = useState([]);
  var Arr = [];
  var Arr2 = [];

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer Wookie2019",
    },
  };

  const getData = async () => {
    // const response = await fetch(url, requestOptions);
    // const movie = await response.json();
    // setMovie(movie);
    // console.log(movie.movies[0].genres);
    fetch(url, requestOptions)
      .then((resp) => {
        return resp.json();
      })
      .then((movie) => {
        console.log(JSON.stringify(movie));
        setMovie(movie.movies);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const getGenres = (movie) => {
    movie.map((data) => {
      // data.map((data) => {
      //   Arr.push(data.genres);
      //   return Arr;
      // console.log(data);
      // for (var element.value in data.genres) {
      //   Arr.push(element.value);
      //   console.log("ele", element.value);
      // }
      for (let value of Object.values(data.genres)) {
        Arr.push(value);
      }
      // });
      // Arr.push(data.genres);

      // return Arr;
    });
    console.log(Arr);

    Arr = [...new Set(Arr)];
    console.log("daata", Arr);

    // for (var j; j < Arr.length; j++) {
    //   Arr.push(Arr[j]);
    // }
    // Object.keys(Arr).forEach((key) => {
    //   Arr2.push(Arr[key]);
    // });
    // console.log("genre", Arr2);
    // SetGenres(Arr.va);

    // SetGenres(Arr);

    //   SetGenres(Arr);
    //   console.log(genres);
    // console.log("gen", genres);
    // };
  };

  getGenres(movie);

  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              {Arr.map((value, key) => (
                <div key={key}>
                  <Component1 movie={movie} value={value} />
                </div>
              ))}
            </Route>
            <Route path="/film">
              <Film />
            </Route>
          </Switch>
        </Router>

        {/* {genres.map((data) => {
          return (
            // <>
            //   <Component1 movie={movie} genre={genres} />
            // </>
            console.log(data)
          );
        })} */}
      </div>
    </>
  );
}

export default App;
