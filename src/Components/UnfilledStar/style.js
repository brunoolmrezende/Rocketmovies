import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    > svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;