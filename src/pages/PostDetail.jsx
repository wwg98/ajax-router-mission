import { useParams, useNavigate } from "react-router";

export default function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <p>해당 항목이 존재하지않습니다.</p>;
  }

  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요?")) {
      onDelete(Number(id));
      navigate("/posts");
    }
  };

  const handleEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleEdit}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}
