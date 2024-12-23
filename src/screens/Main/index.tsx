import { SectionList } from 'react-native';
import { Container, DateTitle, MealText } from './styles';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';

import { Percentage } from '@components/Percentage';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Meal } from '@components/Meal';

import { dateFormat } from 'src/Utils/dateFormat';
import React, { useState } from 'react';
import { EmptyList } from '@components/EmptyList';

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
    const { COLORS } = useTheme();

    function handleGoToStatistics() {
        navigation.navigate('details');
    }

    function handleGoToNewMeal() {
        navigation.navigate('new');
    }

    function handleGoToMeal(meal: MealType) {
        navigation.navigate('meal', { meal });
    }


    return(
        <Container>
            <Header/>

            <Percentage title='40,10%' detail onPress={handleGoToStatistics}/>

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
                fadingEdgeLength={200}
                ListEmptyComponent={ <EmptyList /> }
                showsVerticalScrollIndicator={false}
            />

        </Container>
    )
}