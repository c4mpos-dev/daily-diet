import { Container, MealTitle, Title, MealContainer, MealDescription,DateTimeTitle,Tag,TagStatus,TagText, MealHeader, BackIcon, ContainerMealHeader } from './styles';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilLine, Trash } from 'phosphor-react-native';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { MealType } from '@screens/Home';
import { dateFormat } from '@utils/dateFormat';

type RouteParams = {
    meal: MealType
}
  
export function Meal() {
    const [isModalVisible, setModalVisible] = useState(false);

    const { COLORS } = useTheme();
    const route = useRoute()

    const navigation = useNavigation()

    const { meal } = route.params as RouteParams;

    function handleGoToEditMeal() {
        navigation.navigate('edit', { meal });
    }

    function handleGoToMain() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <MealHeader inDiet={meal.isOnDiet ? true : false} onPress={handleGoToMain}>
                <ContainerMealHeader>
                    <BackIcon />
                    <Title>Refeição</Title>
                </ContainerMealHeader>
            </MealHeader>

            <MealContainer>
            <MealTitle>{meal.title}</MealTitle>

            <MealDescription>
                {meal.description}
            </MealDescription>
            
            <DateTimeTitle>Data e hora</DateTimeTitle>

            <MealDescription>
                {dateFormat(meal.date, 'date')} 
                {''} às {''}
                {dateFormat(meal.date,'time')}
            </MealDescription>

            <Tag>
                <TagStatus inDiet={meal.isOnDiet ? true : false }/>
                <TagText>
                    {meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
                </TagText>
            </Tag>

            <Modal 
                isModalVisible={isModalVisible} 
                setModalVisible={setModalVisible} 
                id={meal.id}
                date={meal.date}
            />      

            <Button 
                title='Editar refeição' 
                icon={<PencilLine size={24} color={COLORS.WHITE}/>}
                style={{ marginTop: 'auto' }}
                onPress={handleGoToEditMeal}
            />

            <Button 
                title='Excluir refeição' 
                icon={<Trash size={24}/>}
                variant='SECONDARY'
                style={{marginBottom: 28, borderColor: useTheme().COLORS.GRAY_100}}
                onPress={() => setModalVisible(true)}
            />
            </MealContainer>
        </Container>
    );
}