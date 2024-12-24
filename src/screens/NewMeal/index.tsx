import React, { useId, useState } from 'react';
import { DateTimePickerEvent, DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { BackIcon, Container, ContainerDateTime, ContainerDescription, ContainerName, ContainerNewMealHeader, ContainerNewMealInfo, DateTimeContent, Label, NewMealHeader, OptionContainer, OptionContent, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input';
import { dateFormat } from '@utils/dateFormat';
import { SelectButton } from '@components/SelectButton';
import { Button } from '@components/Button';
import { Alert } from 'react-native';
import { mealCreate } from '@storage/meal/mealCreate';

export function NewMeal() {
    const [date, setDate] = useState<number>(new Date().getTime());
    const [isMealOnDiet, setIsMealOnDiet] = useState<boolean | null>(null);
    const [mealDescription, setMealDescription] = useState('');
    const [mealName, setMealName] = useState('');

    const mealId = useId();
    const navigation = useNavigation();

    function handleGoToMain() {
        navigation.navigate('main');
    }

    function onChange(evt: DateTimePickerEvent, selectedDate?: Date) {
        const formatedDate = selectedDate!.getTime();
        setDate(formatedDate);
    }

    function openDateTimePicker(mode: 'date' | 'time') {
        DateTimePickerAndroid.open({
            value: new Date(date),
            onChange,
            mode,
            is24Hour: true,
            display: "default"
        });
    }

    async function handleCreateNewMeal() {
        if (mealName.trim().length === 0 || mealDescription.trim().length === 0) {
          return Alert.alert('Nova Refeição', 'Preencha o nome e a descrição.');
        }
    
        if (isMealOnDiet == null) {
          return Alert.alert(
            'Nova Refeição',
            'Selecione se está dentro ou fora da dieta.'
          );
        }
    
        const newMeal = {
            id: mealId,
            title: mealName,
            description: mealDescription,
            date: date,
            isOnDiet: isMealOnDiet ? true : false,
        };
    
        try {
            await mealCreate(newMeal);
            navigation.navigate('main');
        } catch (error) {
            console.log(error);
            Alert.alert('Criar refeição', 'Não foi possível criar a refeição.');
        }
    
        navigation.navigate('feedback', { isOnDiet: isMealOnDiet ? true : false });
      }

    return (
        <Container>
            <NewMealHeader onPress={handleGoToMain}>
                <ContainerNewMealHeader>
                    <BackIcon />
                    <Title>Nova Refeição</Title>
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
                            onPressIn={() => openDateTimePicker('date')}
                            caretHidden={true} // Deixa a animação de digitação invisível
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
                        title='Cadastrar refeição'
                        onPress={handleCreateNewMeal}
                    />
                </OptionContainer>
            </ContainerNewMealInfo>
        </Container>
    );
}
