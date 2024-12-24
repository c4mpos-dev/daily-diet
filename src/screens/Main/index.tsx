import React, { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { Container, DateTitle, MealText } from './styles';
import { useTheme } from 'styled-components/native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';

import { Percentage } from '@components/Percentage';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Meal } from '@components/Meal';
import { EmptyList } from '@components/EmptyList';

import { dateFormat } from '@utils/dateFormat';
import { percentageFormat } from '@utils/percentageFormat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';

export type MealType= {
    id: string;
    title: string;
    date: number;
    description: string;
    isOnDiet: boolean;
};

export interface MealProps {
    title: string;
    data: MealType[];
};

export function Main(){
    const [meal, setMeal] = useState<MealProps[]>([]);
    const navigation = useNavigation();

    const meals = meal.map((meal) => meal.data).flat();

    const totalMealsInDiet = meals.filter((meal) => meal.isOnDiet).length;
    const totalMeals = meals.length;

    const formattedPercentageInDiet = percentageFormat(
        totalMealsInDiet,
        totalMeals
    );

    function handleGoToStatistics() {
        navigation.navigate('details');
    }

    function handleGoToNewMeal() {
        navigation.navigate('new');
    }

    function handleGoToMeal(meal: MealType) {
        navigation.navigate('meal', { meal });
    }

    useFocusEffect(
        useCallback(() => {
            async function fetchMeals() {
                try {
                    const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
                    const parsedData = storageData ? JSON.parse(storageData) : [];
            
                    const formattedData = parsedData.reverse();
                    setMeal(formattedData);

                } catch (error) {
                    console.log(error);
                    Alert.alert('Dados', 'Não foi possível recuperar os dados.');
                }
            }
            fetchMeals();
        }, [])
    );

    return(
        <Container>
            <Header/>

            <Percentage title={totalMeals > 0 ? formattedPercentageInDiet : '0,00%'}  detail onPress={handleGoToStatistics}/>

            <MealText>
                Refeições
            </MealText>

            <Button 
                onPress={handleGoToNewMeal}
                icon={<Plus size={18} color={useTheme().COLORS.WHITE} weight='bold'/>}
                title='Nova refeição'
            />

            <SectionList
                sections={meal}
                keyExtractor={(meal, index) => meal.title + index}
                renderItem={({ item: meal }) => (
                    <Meal
                        title={meal.title}
                        time={dateFormat(meal.date, 'time')}
                        status={meal.isOnDiet ? true : false}
                        onPress={() => handleGoToMeal(meal)}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <DateTitle>{title.replace(/\//g, ".")}</DateTitle>
                )}
                fadingEdgeLength={300}
                ListEmptyComponent={ <EmptyList /> }
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 10}}
            />

        </Container>
    )
}