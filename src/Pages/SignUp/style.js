import styled from "styled-components";
import background from "../../assets/background.png";

  export const Container = styled.div`
    height: 100vh;

    align-items: stretch;
  `;

  export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 136px;

    > h1 {
        font-size: 48px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0 48px;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        text-align: center;

        margin-top: 42px;

        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
            margin-right: 8px;
        }
    }
`;

export const Background = styled.div`
    background: url(${background});
    background-size: cover;
    flex: 1;
`;