import React, { useState } from "react";
import "./movies.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const Movies = () => {
  const [noOfElement, setnoOfElement] = useState(9);
  const { movie, isError, isLoading } = useGlobalContext();
  const slice = movie.slice(0, noOfElement);
  if (isLoading) {
    return (
      <>
        <div className="loading">...Loading</div>
      </>
    );
  }
  if (isError.show && isError.msg) {
    return (
      <>
        <div className="loading">...{isError.msg}</div>
      </>
    );
  }
  const Loadmore = () => {
    if (noOfElement > 9) {
      setnoOfElement(9);
    } else {
      setnoOfElement(noOfElement + noOfElement);
    }
  };
  return (
    <>
      <div className="maincard">
        {slice.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          return (
            <>
              <div key={imdbID}>
                <Link to={`movie/${imdbID}`} className="card">
                  <img src={Poster} alt={imdbID} height="200px" width="350px" />
                  <p>{Title}</p>
                  <p>Play now</p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <div className="cardbtn">
        {noOfElement > 9 ? (
          <button onClick={() => Loadmore()}>Show less</button>
        ) : (
          <button onClick={() => Loadmore()}>Show more</button>
        )}
      </div>
    </>
  );
};

export default Movies;
