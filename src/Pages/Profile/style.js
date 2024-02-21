import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100%;
`;

export const Header = styled.div`
    height: 144px;
    width: 100%;

    padding: 64px 144px 59px;

    background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};

    outline: 1px solid;
    outline-color: black;

    > div {
        display: flex;
        align-items: center;
        gap: 8px;

        width: auto;

        > a, svg {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100%;
    max-width: 340px;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    > button {
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    display: flex;
    position: relative;

    margin: -104px 0 64px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        right: 7px;
        bottom: 7px;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 48px;
        height: 48px;
        
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PINK};

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 20px;
            height: 20px;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        }

    }
`;

   

    

