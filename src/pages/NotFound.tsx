import { Link } from "react-router-dom";
import styled from "styled-components";

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

const S = {
  NotFoundContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    span {
      margin-bottom: 10px;
    }
    a {
      text-decoration: underline;
    }
  `,

  NotFoundNumberContainer: styled.div`
    span {
      font-size: 200px;
      font-weight: 900;
      opacity: 0.3;
      color: #bebebe;
    }
  `,
};
