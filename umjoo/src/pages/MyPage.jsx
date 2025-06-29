import { Link } from "react-router-dom";

function MyPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>마이페이지</h1>
      <p>여기에는 사용자 정보 또는 설정 등을 넣을 수 있습니다.</p>
      <Link to="/">← 메인으로 돌아가기</Link>
    </div>
  );
}

export default MyPage;
