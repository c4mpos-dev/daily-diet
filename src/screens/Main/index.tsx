import { View, ViewProps } from 'react-native';
import { Percentage } from '@components/Percentage';
import { Header } from '@components/Header';

type HeaderStyleProps = ViewProps & {
    isBackButtonVisible?: boolean;
    isLogoVisible?: boolean;
    isAvatarVisible?: boolean;
    
}

export function Main(){
    return(
        <View>
            <Header/>
            <Percentage title='90,86%'/>
        </View>
    )
}