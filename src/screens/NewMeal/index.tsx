import { StatusBar } from 'react-native';
import { BackIcon, Container, ContainerName, ContainerNewMealHeader, ContainerNewMealInfo, NewMealHeader, TextName, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

export function NewMeal(){
    const navigation = useNavigation();

    function handleGoToMain() {
        navigation.navigate('main');
    }

    return(
        
        <Container>
            <NewMealHeader>
                <ContainerNewMealHeader>
                    <BackIcon/>
                    <Title>
                        Nova Refeição
                    </Title>
                </ContainerNewMealHeader>
            </NewMealHeader>
            <ContainerNewMealInfo>
                <ContainerName>
                    <TextName>
                        Nome
                    </TextName>
                </ContainerName>
            </ContainerNewMealInfo>
        </Container>
    )
}