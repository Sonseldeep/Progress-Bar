import { useEffect, useState } from "react";
import PostgressBar from "./ProgressBar";

const App = () => {
  const data = [40, 20, 60, 50, 55, 100, 78];
  return (
    <div>
      <div className="flex justify-center bg-red-400 rounded-lg mt-5 ml-5 p-4">
        <h1 className="font-semibold text-white">Progress Bar</h1>
      </div>

      {data.map((value, index) => (
        <PostgressBar key={index} pogress={value} />
      ))}
    </div>
  );
};

export default App;
