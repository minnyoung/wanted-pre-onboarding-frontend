import { Link } from "react-router-dom";
import { notFoundStyle as S } from "../styles/notFoundStyle";

export default function NotFound() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundNumberContainer>
        <span>404</span>
      </S.NotFoundNumberContainer>
      <span>잘못된 주소입니다!</span>
      <Link to="/">홈으로 이동하기</Link>
    </S.NotFoundContainer>
  );
}
