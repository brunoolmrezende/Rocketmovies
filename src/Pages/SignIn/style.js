import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;

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
    }
`;

export const Background = styled.div`
    background: url(${background});
    background-size: cover;
    flex: 1;
`;
