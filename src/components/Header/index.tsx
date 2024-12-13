import { Container, Logo, Avatar, AvatarContainer } from './styles'
import logoImg from '@assets/logo.png';
import avatarImg from '@assets/icons/avatar.png'
import { View } from 'react-native';

export function Header(){
    return(
        <View>
            <Container>
                <Logo source={logoImg}/>
                <AvatarContainer>
                    <Avatar source={avatarImg}/>
                </AvatarContainer>
            </Container>
        </View>
    )
}