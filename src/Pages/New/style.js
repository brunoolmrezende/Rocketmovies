import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    > a {
        padding: 40px 123px 24px;
        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        gap: 8px;
    }

    > main {
        padding: 0px 123px 85px;

        display: flex;
        flex-direction: column;

        overflow-y: auto;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;

    > h1 {
        font-size: 36px;
        font-weight: 500;
    }

    > div {
        display: flex;
        gap: 40px;
    }

    > input:nth-child(3) {
        height: 274px;
    }

    > .markup {
        display: flex;
        flex-direction: column;
        gap: 24px;

        > h2 {
            font-size: 20px;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }

        > .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 24PX;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

            padding: 16px;
            border-radius: 8px;
        }
    }

    > .buttons {
        display: flex;

        > button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        > button:nth-child(2) {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        }
    }
    

`;