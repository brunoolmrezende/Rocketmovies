import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border-radius: 10px;
    margin-bottom: 8px;

    > input {
        height: 56px;
        width: 100%;

        padding: 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;