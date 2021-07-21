import { FunctionComponent } from 'react';
import { Nav, NavLogo, NavMenu, NavMenuLink } from './index';


export const Navbar: FunctionComponent = () => {
    return (
        <Nav>
            <NavLogo href='/'>
                Chuck Norris App
            </NavLogo>
            <NavMenu>
                <NavMenuLink href='/'>
                    Home
                </NavMenuLink>
                <NavMenuLink href='/#'>
                    Page1
                </NavMenuLink>
                <NavMenuLink href='/#'>
                    Page2
                </NavMenuLink>
                <NavMenuLink href='/#'>
                    Page3
                </NavMenuLink>
            </NavMenu>
        </Nav>
    );
};


