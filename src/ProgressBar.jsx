import { useEffect, useState } from "react";

const PostgressBar = ({ pogress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedProgress(pogress), 200);
  }, [pogress]);

  return (
    <>
      <div className="rounded ml-5 mt-5">
        <div
          style={{ width: `${animatedProgress}%` }}
          className="bg-green-400 rounded-lg transition-all duration-500 ease-in-out text-center text-white"
        >
          {pogress}%
        </div>
      </div>
    </>
  );
};

export default PostgressBar;
