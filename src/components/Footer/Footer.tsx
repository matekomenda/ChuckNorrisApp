import { FunctionComponent } from 'react';
import {
    Container,
    HeaderContainer,
    Header3,
    LinkContainer,
    FooterLink
} from './index';

export const Footer: FunctionComponent = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header3>
                    Chuck Norris Application
                </Header3>
            </HeaderContainer>
            <LinkContainer>
                <FooterLink>
                    Home
                </FooterLink>
                <FooterLink>
                    Jokes
                </FooterLink>
            </LinkContainer>
        </Container>
    );
};


