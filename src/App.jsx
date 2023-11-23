import React, { lazy, Suspense } from "react";
import FavColor from "./components/FavColor";



const Counting = lazy(() => import("./components/Counting"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<loading />}>
        <FavColor />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Counting />
      </Suspense>
      
    </div> 
  );
};

export default App;
