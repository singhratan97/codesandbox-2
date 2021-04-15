import { useState } from "react";
export const Button = () => {
  const [like, setLike] = useState(0);

  return (
    <div>
      <p>{like}</p>
      <button onClick={() => setLike(like + 1)}>
        <span role="img" aria-label="like">
          &#128077;
        </span>
      </button>
      <button onClick={() => setLike(like - 1)}>
        <span role="img" aria-label="dislike">
          👎
        </span>
      </button>
      <button onClick={() => setLike(0)}>reset</button>
    </div>
  );
};
