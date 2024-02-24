import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding-right: 16px;
    border-radius: 10px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

    > input {
        height: 56px;
        width: 100%;

        padding: 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.GRAY_300};
        }
    }
    
    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
