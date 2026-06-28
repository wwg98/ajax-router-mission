import { useState } from "react";
import { useNavigate } from "react-router";

export default function PostNew({ onCreate }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitCreate = e => {
    e.preventDefault();

    const newId = Date.now();
    const today = new Date().toLocaleDateString();

    const newPost = {
      id: newId,
      title: title,
      content: content,
      createdAt: today,
    };

    onCreate(newPost);

    navigate("/posts");
  };

  return (
    <div>
      <h2>새 글 쓰기</h2>
      <form onSubmit={handleSubmitCreate}>
        <div style={{ marginBottom: "10px" }}>
          <label>제목: </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>내용: </label>
          <textarea value={content} onChange={e => setContent(e.target.value)} required />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
