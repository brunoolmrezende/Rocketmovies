import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 64px;

    align-items: center;
    justify-content: space-between;

    padding: 24px 123px;

    width: 100%;
    height: 116px;

    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 630px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 9px;

    > div {
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: end;

        > strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > a {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};

        }
    }

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;
