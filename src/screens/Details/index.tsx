import { Percentage } from '@components/Percentage';
import { Container, ContainerPercentage, ContainerStatistics, DetailHeader, DietContainer, DietDesciption, DietsInfoContainer, DietText, OffDietContainer, OffDietDesciption, OffDietText, RegisteredContainer, RegisteredDesciption, RegisteredText, SequenceContainer, SequenceDesciption, SequenceText, StatisticsText } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { MealProps } from '@screens/Main';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { bestStreak } from 'src/Utils/bestStreak';
import { percentageFormat } from 'src/Utils/percentageFormat';

export function Details(){
    const [data, setData] = useState<MealProps[]>([]);

    const navigation = useNavigation();
    
    function handleGoToMain() {
        navigation.navigate('main');
    }

    async function fetchDetails() {
        try {
            const fetchData = await mealsGetAll();
            setData(fetchData);
        }
        catch(error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchDetails();
    }, []))
  
    const meals = data.map((meal) => meal.data).flat();
  
    const bestStreakOnDiet = bestStreak(meals);
  
    const totalMeals = meals.length;
    const totalMealsOnDiet = meals.filter((meal) => meal.isOnDiet).length;
    const totalMealsOutDiet = meals.length - totalMealsOnDiet;
  
    const formattedPercentageInDiet = percentageFormat(
        totalMealsOnDiet,
        totalMeals
    );

    var type = '';

    if(parseFloat(totalMeals > 0 ? formattedPercentageInDiet : '0,00%') <= parseFloat('50,00')) {
        type="SECONDARY";
    } else {
        type="PRIMARY";
    }

    return(
        <Container>
            <DetailHeader type={type}>
                <ContainerPercentage>      
                    <Percentage title={formattedPercentageInDiet} back onPress={handleGoToMain}/> 
                </ContainerPercentage>
            </DetailHeader>
            <ContainerStatistics>
                <StatisticsText>
                    Estatísticas gerais
                </StatisticsText>
                <SequenceContainer>
                    <SequenceText>
                        {bestStreakOnDiet}
                    </SequenceText>
                    <SequenceDesciption>
                        melhor sequência de pratos dentro da dieta
                    </SequenceDesciption>
                </SequenceContainer>
                <RegisteredContainer>
                    <RegisteredText>
                        {totalMeals}
                    </RegisteredText>
                    <RegisteredDesciption>
                        refeições registradas
                    </RegisteredDesciption>
                </RegisteredContainer>
                <DietsInfoContainer>
                    <DietContainer>
                        <DietText>
                            {totalMealsOnDiet}
                        </DietText>
                        <DietDesciption>
                            refeições dentro da dieta
                        </DietDesciption>
                    </DietContainer>
                    <OffDietContainer>
                        <OffDietText>
                            {totalMealsOutDiet}
                        </OffDietText>
                        <OffDietDesciption>
                            refeições fora da dieta
                        </OffDietDesciption>
                    </OffDietContainer>
                </DietsInfoContainer>
            </ContainerStatistics>
        </Container>
    )
}