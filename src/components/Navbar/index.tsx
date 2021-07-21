import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: sticky;
    top: 0;
    font-size: 1rem;
    z-index: 999;
    color: white;
`;
export const NavLogo = styled.a`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32;
    font-style: italic;
    text-decoration: none;
    cursor: pointer;
    padding-left: 1rem;
    color: white;
`;
export const NavMenu = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;
export const NavMenuLink = styled.a`
    padding: 16px 16px;
    height: 60px;
    text-decoration: none;
    color : white;
    cursor: pointer;
    &:hover {
        border-bottom: 4px solid #FEFEFE;
    }
`;