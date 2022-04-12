import React, { useRef, useState } from "react";
import { comments } from "../comments";

export default function Comment({ data, onClick, showComments }) {
  const [showInput, setShowInput] = useState(false);
  const newComment = useRef(null);
  console.log(data);

  return (
    <article
      style={{
        padding: "0.2rem 2rem",
        marginBottom: "0.5rem",
        borderTop: "1px solid #828e92",
      }}
    >
      <p
        style={{
          fontWeight: 600,
        }}
      >
        {data.name}
      </p>
      <p>{data.comment}</p>
      <div>
        <button onClick={() => setShowInput((prev) => !prev)}>reply</button>
        {showInput && (
          <div>
            <input
              placeholder="enter your commment here"
              onChange={(e) => (newComment.current = e.target.value)}
            />
            <button onClick={() => console.log("comments")}>submit</button>
          </div>
        )}
        {data.comments && data.comments.length > 0 && (
          <button style={{
            marginLeft: "1rem",
          }} onClick={onClick}>
            {showComments ? `hide` : `show`} comments
          </button>
        )}
      </div>
    </article>
  );
}
