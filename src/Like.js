import React from "react"

import { useEffect, useState } from "react";



const Like = () => {

const data=()=>{
  const ok=JSON.parse(localStorage.getItem('like'))
if (ok) {
  return ok
} else {
  return []
}
}
  
  const [items, setItems] = useState(data());

useEffect(()=>{
setItems(data())

},[items])


  const click = (e) => {
 localStorage.removeItem('like')    
   setItems( data())
// const items = JSON.parse(localStorage.getItem('items'));
// const filtered = items.filter(item => item.id !== 3);
// localStorage.setItem('items', JSON.stringify(filtered));
  };

  return (
    <div>
      <h1>
        {items.map((e, i) => {
          return (
            <div>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={e.image} alt="Unliked All" />
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
              <button onClick={()=>click(e)} type="button" class="btn btn-primary">
                unlike
              </button>
            </div>
          );
        })}
      </h1>
      {/* <h1>{items}</h1>
      <button onClick={click}>unlikee</button> */}
    </div>
  );
};
export default Like;
