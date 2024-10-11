import React, { useRef,useEffect } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/cards_data";

const TitleCards = ({title,category}) => {
    const cardsRef = useRef();
    const handleWheel = event => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    };
    useEffect(() => {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }, []);
  return <div className="titleCards">
      <h2>
        {title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
              <img src={card.image} alt={card.title} />
              <p>
                {card.title}
              </p>
            </div>;
        })}
      </div>
    </div>;
};

export default TitleCards;
