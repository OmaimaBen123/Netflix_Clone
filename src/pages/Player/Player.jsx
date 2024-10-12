import React, { useState,useEffect} from 'react'
import './Player.css';
import back_icon from '../../assets/back-icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type:""
 })
  const options = { method: "GET", headers: { accept: "application/json", Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWE2NjQ0NGQ4ZDgyY2YzNDJhZTVkNzE0Mjg1NGQ4YSIsIm5iZiI6MTcyODQ4NTkyMy4yMTU5MTQsInN1YiI6IjY3MDU2NGEzNWMwMGEyZDQ0ZWMwMjc1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.op_Dw14SJplQxfVkB_DaWYFHXGAAWQOgHPIk9opPTAM" } };


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  },[])
  
  return <div className="player">
      <img src={back_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameborder="0" allowFullScreen />
      <div className="player-info">
        <p>
          {apiData.published_at.slice(0, 10)}  </p>
        <p>
          {apiData.name}
        </p>
        <p>
          {apiData.type}
        </p>
      </div>
    </div>;
}

export default Player
