import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;

    width: 100%;
    height: 56px;

    margin-top: 16px;
    padding: 16px 0;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    border-radius: 10px;
    border: 0;

    &:disabled {
        opacity: 0.5;
    }
`;