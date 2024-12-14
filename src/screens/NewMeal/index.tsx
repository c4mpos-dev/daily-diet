import { Container, ContainerNewMealHeader, ContainerNewMealInfo, NewMealHeader } from './styles';
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
                        
                </ContainerNewMealHeader>
            </NewMealHeader>
            <ContainerNewMealInfo>

            </ContainerNewMealInfo>
        </Container>
    )
}