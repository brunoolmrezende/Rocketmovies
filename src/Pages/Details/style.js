import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 38px 123px 24px;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
    }
`;

export const Content = styled.div`
    padding: 0px 123px;

    width: 100%;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    > .title {
        display: flex;
        align-items: center;
        gap: 19px;

        > h2 {
            font-size: 36px;
            font-weight: 500;
            margin: 0;
        }

        > .stars {
            display: flex;
            gap: 10px;
            padding-top: 5px;
        }
    }

    > .moviePost {
        display: flex;
        align-items: center;
        gap: 8px;

        margin-top: 24px;

        > img {
            width: 16px;
            height: 16px;
            border-radius: 50%;

            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    .tags {
        margin-top: 40px;

        display: flex;
        gap: 8px;

        > span {
            padding: 8px 16px;
        }
    }

    > p {
        text-align: justify; 
        margin-top: 40px;

        padding-bottom: 156px;
    }
`;
