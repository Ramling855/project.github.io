import axios, { Axios } from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Like from "./Like";
const Final = ({but}) => {
  const [data, setData] = useState([]);
  const [like, setLike] = useState([]);

  useEffect(()=>{
  },[like])


  useEffect(() => {
   axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      setData(res.data.results);
    });
  }, []);
  const click = (e) => {
    let char = localStorage.getItem("like");
    if (char) {
      const item = JSON.parse(char);
      item.push(e);
      localStorage.setItem("like", JSON.stringify(item));
      alert("data added");
      return;
    }
    localStorage.setItem("like", JSON.stringify([e]));
  };
  return (
    <div>
      
      <h1>
        {data.map((e, i) => {
          return (
            <div>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={e.image} alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <h1>{e.title}</h1>
                    <p>{e.name}</p>
                    <p>{e.status}</p>
                    <p>{e.species}</p>
                    <p>{e.type}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => click(e)} class="btn btn-primary">
                like
              </button>
            </div>
          );
        })}
      </h1>
    </div>
  );
};
export default Final;
