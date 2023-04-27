import styled from "styled-components";

export const mainPageStyle = {
  TodoSpanContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  TodoSpan: styled.span`
    font-size: 45px;
    font-weight: 800;
  `,

  TodoDescSpan: styled.span`
    color: gray;
    font-size: 13px;
  `,

  MainButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 50px;
    width: 150px;
  `,

  MainLink: styled.a`
    :hover {
      font-weight: 600;
    }
  `,
};
