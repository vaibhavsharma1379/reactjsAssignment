import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./show-list.css";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="showlist">
      <h1>List of TV Shows</h1>
      <div className="shows">
        {shows.map((show) => (
          <div className="show">
            <div key={show.show.id}>
              <div>
                <div>
                  <img
                    className="image"
                    src={show.show.image?.medium}
                    alt="image"
                  />
                </div>
                <div className="showdetails">
                  <p>
                    <Link
                      to={`/show/${show.show.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p className="p"> {show.show.name}  ({show.show.language}) {show.show.premiered}</p>
                      <p className="p">{show.show.type} {show.show.genres.join(", ")}</p>

                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
