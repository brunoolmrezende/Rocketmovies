import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 100%;
    padding: 32px;
    overflow: hidden;

    background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};

    border: 1px solid black;
    border-radius: 16px;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        text-align: justify;

        margin: 15px 0;
    }

    > footer {
        display: flex;
        gap: 8px;

        margin-top: 15px;
    }
`;

export const Stars = styled.div`
    display: flex;
    gap: 6px;

    margin-top: 8px;
`;