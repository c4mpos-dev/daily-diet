import { View, ViewProps } from 'react-native';
import { Percentage } from '@components/Percentage';
import { Header } from '@components/Header';
import { Container } from './styles';

type HeaderStyleProps = ViewProps & {
    isBackButtonVisible?: boolean;
    isLogoVisible?: boolean;
    isAvatarVisible?: boolean;
    
}

export function Details(){
    return(
        <Container>
            <Percentage title='40,10%' back/>
        </Container>
    )
}