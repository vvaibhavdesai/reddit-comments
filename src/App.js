import "./App.css";
import Comment from "./components/Comment";
import { comments } from "./comments";
import { useState } from "react";

function App() {
  function CommentVisualizer({ data }) {
    const [showComments, setShowComments] = useState(false);
    if (data.hasNestedComment) {
      return (
        <>
          <Comment
            showComments={showComments}
            data={data}
            onClick={() => setShowComments((prev) => !prev)}
          />
          <div
            style={{
              display: showComments ? "block" : "none",
              paddingLeft: "20px",
            }}
          >
            {data.comments.map((comment, idx) => (
              <CommentVisualizer key={idx} data={comment} />
            ))}
          </div>
        </>
      );
    } else {
      return <Comment showComments={showComments} data={data} />;
    }
  }

  return (
    <div className="App">
      <CommentVisualizer data={comments} />
    </div>
  );
}

export default App;
