import styled from "styled-components";

export const Container = styled.span`
    padding: 5px 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 12px;

    border-radius: 8px;
`;