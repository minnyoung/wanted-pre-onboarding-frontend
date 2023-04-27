import styled from "styled-components";

export const notFoundStyle = {
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
