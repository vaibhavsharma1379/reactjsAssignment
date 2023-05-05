import React, { useState, useEffect } from "react";
import axios from "axios";
import "./show-details.css";
import { useParams } from "react-router-dom";

import BookShow from "./book-show";
function ShowSummary({ match }) {
  const [summary, setSummary] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDetails, setMovieDetails] = useState("");
  const [showImage, setShowImage] = useState("");
  const [language, setlanguage] = useState("");
  const [type, setType] = useState("");
  const [status, setstatus] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [rating, setRating] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setSummary(response.data.summary);
        setMovieName(response.data.name);
        setShowImage(response.data.image?.medium);
        setMovieDetails(response.data.genres.join(", "));
        setlanguage(response.data.language);
        setType(response.data.type);
        setstatus(response.data.status);
        setDate(response.data.premiered);
        setTime(response.data.schedule?.time);
        setRating(response.data.rating?.average);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);



  return (
    <body>
      <div className="show-details">
        <div className="showcontent">
          <h1>TV Show Summary</h1>
          <div className="details">
            <div>
              <img className="image" src={showImage} alt="image" />
              <p>{status}</p>
            </div>
            <div className="show-d">
              <h2>{movieName}</h2>
              <h3>rating: ({rating})</h3>

              <p>
                {movieDetails} ({language})
              </p>
              <p>{type}</p>
              <p>
                {date} {time}
              </p>
            </div>
          </div>
          <p>{summary}</p>

          {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="movieName">Movie Name:</label>
        <input type="text" id="movieName" name="movieName" value={movieName} readOnly />
        <br />
        <label htmlFor="movieDetails">Movie Details:</label>
        <input type="text" id="movieDetails" name="movieDetails" value={movieDetails} readOnly />
        <br />
        <button type="submit">Book Ticket</button>
      </form> */}
          <BookShow
            name={{
              movie: movieName,
              type: type,
              language: language,
              genres: movieDetails,
              
            }}
          />
        </div>
      </div>
    </body>
  );
}

export default ShowSummary;

// i have three react.js files one of which is app.js which includes the code " import './App.css'; import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; import ShowList from './components/show-list'; import ShowSummary from './components/Show-details'; function App() { return ( <div> <Router> <Routes> <Route path="/" element={<ShowList/>}/> <Route path="/show/:id" element={<ShowSummary/>} /> </Routes> </Router> </div> ); } export default App; " and second file is Showlist.js which includes the code "import React, { useState, useEffect } from "react"; import axios from "axios"; import { Link } from "react-router-dom"; function ShowList() { const [shows, setShows] = useState([]); useEffect(() => { axios .get("https://api.tvmaze.com/search/shows?q=all") .then((response) => { setShows(response.data); }) .catch((error) => { console.log(error); }); }, []); return ( <div> <h1>List of TV Shows</h1> {shows.map((show) => ( <div key={show.show.id}> <h2>{show.show.name}</h2> <p>{show.show.summary}</p> <Link to={`/show/${show.show.id}`}> </Link> </div> ))} </div> ); } export default ShowList; " and third file showsummray.js which includes the code "import React, { useState, useEffect } from "react"; import axios from "axios"; function ShowSummary({ match }) { const [summary, setSummary] = useState(""); const [movieName, setMovieName] = useState(""); const [movieDetails, setMovieDetails] = useState(""); useEffect(() => { axios .get(`https://api.tvmaze.com/shows/${match.params.id}`) .then((response) => { setSummary(response.data.summary); setMovieName(response.data.name);
// setMovieDetails(response.data.genres.join(", ")); }) .catch((error) => { console.log(error); })
// Sent message.
// ; }, [match.params.id]); const handleSubmit = (event) => { event.preventDefault(); const formData = new FormData(event.target); const data = { name: formData.get("name"), email: formData.get("email"), movieName, movieDetails, }; localStorage.setItem("bookingData", JSON.stringify(data)); }; return ( <div> <h1>TV Show Summary</h1> now it is showing error named Cannot read properties of undefined (reading 'params') TypeError: Cannot read properties of undefined (reading 'params') <p>{summary}</p> <form onSubmit={handleSubmit}> <label htmlFor="name">Name:</label> <input type="text" id="name" name="name" required /> <br /> <label htmlFor="email">Email:</label> <input type="email" id="email" name="email" required /> <br /> <label htmlFor="movieName">Movie Name:</label> <input type="text" id="movieName" name="movieName" value={movieName} readOnly /> <br /> <label htmlFor="movieDetails">Movie Details:</label> <input type="text" id="movieDetails" name="movieDetails" value={movieDetails} readOnly /> <br /> <button type="submit">Book Ticket</button> </form> </div> ); } export default ShowSummary;
