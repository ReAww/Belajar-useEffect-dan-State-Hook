import React, { useState } from "react";
import "../index.css";
import { useEffect } from "react";

export default function Counting() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ini akan mengubah title
    document.title = `klik ${count} kali`;
  });

  return (
    <div className=" p-10 m-5 border-4 border-black bg-white ">
      <h1 className=" border p-4 border-4 border bg-slate-300">Ditekan sebanyak : {count}</h1>
      <button className="bg-red-500 px-5 hover:bg-red-700 border-b-4 border-red-600 m-2 rounded-md" onClick={() => setCount(count + 1)}>+</button>
      <button className="bg-green-500 px-5 hover:bg-green-700 border-b-4 border-green-600 m-2 rounded-md"  onClick={() => setCount(count - 1)}>-</button>
      <button className="bg-blue-500 px-5 hover:bg-blue-700 border-b-4 border-blue-600 m-2 rounded-md"  onClick={() => setCount(count - count)}>Reset</button>
    </div>
  );
}
