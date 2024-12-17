import React, { useState } from 'react';
import { Platform, Pressable } from 'react-native';
import DateTimePicker, { DateTimePickerEvent, DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { BackIcon, Container, ContainerDateTime, ContainerDescription, ContainerName, ContainerNewMealHeader, ContainerNewMealInfo, DateTimeContent, Label, NewMealHeader, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input';
import { dateFormat } from 'src/Utils/dateFormat';

export function NewMeal() {
    const [date, setDate] = useState(new Date());
    const [showIOSPicker, setShowIOSPicker] = useState(false); // Apenas para iOS
    const [mode, setMode] = useState<'date' | 'time'>('date'); // Controle de modo
    const navigation = useNavigation();

    function handleGoToMain() {
        navigation.navigate('main');
    }

    function handleChange(event: DateTimePickerEvent, selectedDate?: Date) {
        if (selectedDate) {
            setDate(selectedDate);
        }
        setShowIOSPicker(false); // Fecha o picker no iOS
    }

    function openDateTimePicker(currentMode: 'date' | 'time') {
        setMode(currentMode);

        if (Platform.OS === 'android') {
            // Exibe o picker para Android
            DateTimePickerAndroid.open({
                value: date,
                mode: currentMode,
                is24Hour: true,
                onChange: (_, selectedDate) => {
                    if (selectedDate) setDate(selectedDate);
                },
            });
        } else {
            // Mostra o picker para iOS
            setShowIOSPicker(true);
        }
    }

    return (
        <Container>
            <NewMealHeader>
                <ContainerNewMealHeader>
                    <BackIcon />
                    <Title>Nova Refeição</Title>
                </ContainerNewMealHeader>
            </NewMealHeader>

            <ContainerNewMealInfo>
                <ContainerName>
                    <Label>Nome</Label>
                    <Input />
                </ContainerName>

                <ContainerDescription>
                    <Label>Descrição</Label>
                    <Input multiline textAlignVertical="top" style={{ height: 140 }} />
                </ContainerDescription>

                <ContainerDateTime>
                    {/* Campo de DATA */}
                    <DateTimeContent>
                        <Label>Data</Label>
                        <Input
                            showSoftInputOnFocus={false} // Impede abertura do teclado
                            value={dateFormat(date.getTime(), 'date')}
                            onPressIn={() => openDateTimePicker('date')}
                            caretHidden={true}
                        />
                    </DateTimeContent>

                    {/* Campo de HORA */}
                    <DateTimeContent>
                        <Label>Hora</Label>
                        <Input
                            showSoftInputOnFocus={false} // Impede abertura do teclado
                            value={dateFormat(date.getTime(), 'time')}
                            onPressIn={() => openDateTimePicker('time')}
                            caretHidden={true}
                        />
                    </DateTimeContent>
                </ContainerDateTime>

                {/* Picker para iOS */}
                {showIOSPicker && Platform.OS === 'ios' && (
                    <DateTimePicker
                        value={date}
                        mode={mode}
                        display="spinner"
                        onChange={handleChange}
                    />
                )}
            </ContainerNewMealInfo>
        </Container>
    );
}
