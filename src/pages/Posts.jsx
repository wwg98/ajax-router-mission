import { Link } from "react-router";

export default function Posts({ posts }) {
  return (
    <>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
