import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function PostEdit({ posts, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <p>해당 항목이 존재하지않습니다.</p>;
  }

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmitUpdate = e => {
    e.preventDefault();

    const updatedPost = {
      ...post,
      title: title,
      content: content,
    };

    onUpdate(updatedPost);

    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <h2>글 수정하기</h2>
      <form onSubmit={handleSubmitUpdate}>
        <div style={{ marginBottom: "10px" }}>
          <label>제목: </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>내용: </label>
          <textarea value={content} onChange={e => setContent(e.target.value)} required />
        </div>
        <button type="submit">수정 완료</button>
        <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: "10px" }}>
          취소
        </button>
      </form>
    </div>
  );
}
