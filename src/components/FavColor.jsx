import React, { useState } from "react";
import { useEffect } from "react";

export default function FavColor() {
  const [color, setColor] = useState("red");

  //   function buat ganti warna
    const click = color => {
        setColor(color)
    }
    useEffect(() =>{
        document.body.style.backgroundColor = color
    }, [color])

  return (
    <div className=" p-10 m-5 border-4 bg-white border-black ">
      <h1 className={`fw-bold border-4 bg-slate-300 p-5 `}>
        {" "}
        My Favorite Color is <span className="font-bold">{color}</span>
      </h1>
      <button
        className={`m-2 bg-blue-500 px-10 hover:bg-blue-400 
        text-white font-bold py-2 px-4 border-b-4 
        border-blue-700 hover:border-blue-500 rounded `}
        onClick={() => click("Blue")} 
        
      >
        Blue
      </button>
      <button
        className={`m-2 bg-green-500 px-10 hover:bg-green-400 
        text-white font-bold py-2 px-4 border-b-4 
        border-green-700 hover:border-green-500 rounded`}
        type="button"
        onClick={() => click("Green")}
      >
        Green
      </button>
      <button
        className={`m-2 bg-purple-500 px-10 hover:bg-purple-400 
        text-white font-bold py-2 px-4 border-b-4 
        border-purple-700 hover:border-purple-500 rounded`}
        type="button"
        onClick={() => click("Purple")}
      >
        Purple
      </button>
      <button
        className={`m-2 bg-yellow-500 px-10 hover:bg-yellow-400 
        text-white font-bold py-2 px-4 border-b-4 
        border-yellow-700 hover:border-yellow-500 rounded`}
        type="button"
        onClick={() => click("Yellow")}
      >
        Yellow
      </button>
      <button
        className={` m-2 bg-red-500 px-10 hover:bg-red-400 
        text-white font-bold py-2 px-4 border-b-4 
        border-red-700 hover:border-red-500 rounded`}
        type="button"
        onClick={() => click("Red")}
      >
        Red
      </button>
    </div>
  );
}
