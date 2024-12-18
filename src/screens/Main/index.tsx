import { Percentage } from '@components/Percentage';
import { Header } from '@components/Header';
import { Container, MealText, NewMealButton, NewMealIcon, NewMealText } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Main(){
    const navigation = useNavigation();

    function handleGoToStatistics() {
        navigation.navigate('details');
    }

    function handleGoToNewMeal() {
        navigation.navigate('new');
    }


    return(
        <Container>
            <Header/>
            <Percentage title='40,10%' detail onPress={handleGoToStatistics}/>
            <MealText>
                Refeições
            </MealText>
            <NewMealButton onPress={handleGoToNewMeal}>
                <NewMealIcon size={18}/>
                <NewMealText>
                    Nova Refeição
                </NewMealText>
            </NewMealButton>
        </Container>
    )
}