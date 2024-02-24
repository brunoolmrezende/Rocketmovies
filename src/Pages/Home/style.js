import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const NewMovie = styled(Link)`
    max-width: 207px;
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    
    padding: 13.5px 32px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > svg {
        margin-right: 2.5px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 48px 123px 38px;

    > h1 {
        font-size: 32px;
        font-weight: 400;
    }
`;

export const Content = styled.div`
    width: 100%;
    
    padding: 0 123px 58px;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    > main {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;
  
