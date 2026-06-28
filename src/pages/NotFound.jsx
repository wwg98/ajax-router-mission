import { Link } from "react-router";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>404 - 페이지를 찾을 수 없습니다.</h2>
      <p>요청하신 페이지가 사라졌거나, 잘못된 경로를 입력하셨습니다.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </div>
  );
}
