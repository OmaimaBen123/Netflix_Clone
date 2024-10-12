import React, { useRef, useEffect, useState } from "react"; // Added useState import
import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]); // State to store the fetched movie data

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWE2NjQ0NGQ4ZDgyY2YzNDJhZTVkNzE0Mjg1NGQ4YSIsIm5iZiI6MTcyODQ4NTkyMy4yMTU5MTQsInN1YiI6IjY3MDU2NGEzNWMwMGEyZDQ0ZWMwMjc1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.op_Dw14SJplQxfVkB_DaWYFHXGAAWQOgHPIk9opPTAM"
    }
  };

  // Function to handle horizontal scroll on wheel
  const handleWheel = event => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results)) // Store the API data in state
      .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);

    // Clean up the event listener when the component unmounts
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="titleCards">
      <h2>
        {title ? title : "Popular on Netflix"}
      </h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} // Display image
                alt={card.original_title}
              />
              <p>{card.original_title}</p> {/* Display title */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
