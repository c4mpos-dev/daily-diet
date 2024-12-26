import { Container, Label, DateTimeContent, OptionContainer, OptionContent, NewMealHeader, BackIcon, ContainerNewMealHeader, Title, ContainerNewMealInfo, ContainerDateTime, ContainerName, ContainerDescription } from './styles';
  
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation, useRoute } from "@react-navigation/native";
import { SelectButton } from '@components/SelectButton';
import { MealType } from '@screens/Main';
import { useState } from 'react';
import { dateFormat } from '@utils/dateFormat';
import { Alert } from 'react-native';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { editMeal } from '@storage/meal/mealEdit';

type RouteParams = {
    meal: MealType
}

export function EditMeal() {
    const route = useRoute()
    const { meal } = route.params as RouteParams;

    const [mealName, setMealName] = useState(meal.title);
    const [mealDescription, setMealDescription] = useState(meal.description);
    const [isMealOnDiet, setIsMealOnDiet] = useState(meal.isOnDiet);
    const [date, setDate] = useState<number>(meal.date);

    const navigation = useNavigation()

    function onChange(event: DateTimePickerEvent, selectedDate?: Date) {
        const formatedDate = selectedDate!.getTime();
        setDate(formatedDate);
    }

    function openDateTimePicker(mode: 'date' | 'time') {
        DateTimePickerAndroid.open({
            value: new Date(date!),
            onChange,
            mode,
            is24Hour: true,
            display: "default",
        });
    }

    async function handleEditMeal() {
        if (mealName.trim().length === 0 || mealDescription.trim().length === 0) {
            return Alert.alert('Edição de Refeição', 'Preencha o nome e a descrição.');
        }

        const updatedMeal = {
            id: meal.id,
            title: mealName,
            description: mealDescription,
            date: date,
            isOnDiet: isMealOnDiet ? true : false,
        };

        try {
            editMeal(meal.id, meal.date, updatedMeal);
            navigation.navigate('meal', { meal: updatedMeal });
        } catch (error) {
            Alert.alert('Editar', 'Não foi possível editar a refeição.');
        }
    }

    function handleGoToMeal(){
        navigation.navigate('meal', { meal: meal });
    }

    return (
        <Container>
            <NewMealHeader onPress={handleGoToMeal}>
                <ContainerNewMealHeader>
                    <BackIcon />
                    <Title>Editar Refeição</Title>
                </ContainerNewMealHeader>
            </NewMealHeader>

            <ContainerNewMealInfo>
                <ContainerName>
                    <Label>Nome</Label>
                    <Input 
                        onChangeText={setMealName}
                        value={mealName}
                    />
                </ContainerName>

                <ContainerDescription>
                    <Label>Descrição</Label>
                    <Input 
                        multiline 
                        textAlignVertical="top" 
                        style={{ height: 140 }}
                        maxLength={220}
                        onChangeText={setMealDescription}
                        value={mealDescription}
                    />
                </ContainerDescription>

                <ContainerDateTime>
                    {/* Campo de DATA */}
                    <DateTimeContent>
                        <Label>Data</Label>
                        <Input
                            showSoftInputOnFocus={false} // Impede abertura do teclado
                            defaultValue={dateFormat(date, 'date')}
                            readOnly
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                        />
                    </DateTimeContent>

                    {/* Campo de HORA */}
                    <DateTimeContent>
                        <Label>Hora</Label>
                        <Input
                            showSoftInputOnFocus={false} // Impede abertura do teclado
                            defaultValue={dateFormat(date, 'time')}
                            onPressIn={() => openDateTimePicker('time')}
                            caretHidden={true} // Deixa a animação de digitação invisível
                        />
                    </DateTimeContent>
                </ContainerDateTime>

                <OptionContainer>
                    <Label>Está dentro da dieta?</Label>
                    <OptionContent>
                        <SelectButton 
                            title='Sim' 
                            type='PRIMARY'
                            onPress={() => setIsMealOnDiet(true)}
                            isActive={isMealOnDiet === true}
                        />

                        <SelectButton 
                            title='Não' 
                            type='SECONDARY'
                            onPress={() => setIsMealOnDiet(false)}
                            isActive={isMealOnDiet === false}
                        />
                    </OptionContent>

                    <Button
                        style={{marginBottom: 40}}
                        title='Salvar alterações'
                        onPress={handleEditMeal}
                    />
                </OptionContainer>
            </ContainerNewMealInfo>
        </Container>
    );
}