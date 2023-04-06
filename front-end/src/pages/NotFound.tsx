import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <span>잘못된 주소입니다!</span>
      <Link to="/">홈으로 이동하기</Link>
    </div>
  );
}
