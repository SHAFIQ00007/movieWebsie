import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../SingleMoviepage/singlemovie.css";
import Search from "../Navbar/Navbar";

const SingleMovie = () => {
  const { id } = useParams();
  const { movie } = useGlobalContext();
  const sliceSecond = movie.slice(0, 4);
  const singlemovie = movie.filter((curMovie) => curMovie.imdbID === id);
  console.log(singlemovie);
  return (
    <>
      <Search />
      <div>
        {singlemovie.map((curMOvie) => {
          const { imdbID, Title, Poster, Year } = curMOvie;
          return (
            <>
              <div className="singlepagemain">
                <div className="imagetittle" key={imdbID}>
                  <div className="imagesize">
                    <img
                      src={Poster}
                      alt={imdbID}
                      height="200px"
                      width="350px"
                    />
                  </div>
                  <div className="singletitle">
                    <div>
                      <h4>{Title}</h4>
                      <p>Action</p>
                      <p>Duration : 1.50 hr</p> <br />
                      <br />
                      <br />
                    </div>
                    <div className="singlebtn">
                      <button className="btn1">Watch now</button>
                      <button className="btn2">Watch Later</button>
                    </div>
                  </div>
                </div>
                <div className="paragraphs">
                  <p>
                    {Title} ipsum dolor sit amet {Year}, adipisicing elit. Dolor
                    est aliquam illo qui in quis facere nemo omnis fuga. Ullam?
                  </p>
                  <p>
                    {Title} ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus voluptatem sed voluptate dolor sit amet
                    {imdbID} adipisicing elit. Deleniti, accusamus {Title}
                    ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                    minima nisi inventore velit, in ea voluptat fuga
                    {Title} laudantium.
                  </p>
                  <p>
                    {Title} ipsum dolor sit amet {Year}, adipisicing elit. Dolor
                    est aliquam illo qui in quis facere nemo omnis fuga. Ullam?
                  </p>
                  <p>
                    {Title} ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus voluptatem sed voluptate deserunt adipisicing
                    elit. Deleniti, accusamus {Title} ipsum dolor, sit amet
                    consectetur adipisicing elit. Rerum minima nisi inventore
                    velit, in ea voluptates quas fuga {Title} laudantium.
                  </p>
                  <p>
                    {Title} ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor est aliquam illo qui in quis facere nemo omnis fuga.
                    Ullam?
                  </p>
                  <p>
                    {Title} ipsum dolor sit amet consectetur {imdbID} elit.
                    Accusamus voluptatem sed voluptate deserunt est consectetur
                    adipisicing elit. Rerum minima nisi inventore velit, in ea
                    voluptates quas fuga {Title} laudantium.
                  </p>
                </div>
              </div>
              <div className="similar">Similar Movies</div>
              <div className="fourcards">
                {sliceSecond.map((curMOvie) => {
                  const { imdbID, Title, Poster } = curMOvie;

                  return (
                    <>
                      <Link className="singlemoviecard">
                        <img
                          src={Poster}
                          alt={imdbID}
                          height="200px"
                          width="350px"
                        />
                        <h4>{Title}</h4>
                        <p>Play now</p>
                      </Link>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleMovie;
