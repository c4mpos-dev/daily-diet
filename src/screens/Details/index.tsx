import { Percentage } from '@components/Percentage';
import { Container, ContainerPercentage, ContainerStatistics, DetailHeader, DietContainer, DietDesciption, DietsInfoContainer, DietText, OffDietContainer, OffDietDesciption, OffDietText, RegisteredContainer, RegisteredDesciption, RegisteredText, SequenceContainer, SequenceDesciption, SequenceText, StatisticsText } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Details(){
    const diet = 32; 
    const offDiet = 77; 
    
    const total = diet + offDiet;
    const percentage = total > 0 ? (diet / total) * 100 : 0;

    const calculatedType = percentage > 50 ? 'PRIMARY' : 'SECONDARY';

    const navigation = useNavigation();
    
    function handleGoToMain() {
        navigation.navigate('main');
    }

    return(
        <Container>
            <DetailHeader type={calculatedType}>
                <ContainerPercentage>      
                    <Percentage title={`${percentage.toFixed(2)}%`} back onPress={handleGoToMain}/> 
                </ContainerPercentage>
            </DetailHeader>
            <ContainerStatistics>
                <StatisticsText>
                    Estatísticas gerais
                </StatisticsText>
                <SequenceContainer>
                    <SequenceText>
                        4
                    </SequenceText>
                    <SequenceDesciption>
                        melhor sequência de pratos dentro da dieta
                    </SequenceDesciption>
                </SequenceContainer>
                <RegisteredContainer>
                    <RegisteredText>
                        109
                    </RegisteredText>
                    <RegisteredDesciption>
                        refeições registradas
                    </RegisteredDesciption>
                </RegisteredContainer>
                <DietsInfoContainer>
                    <DietContainer>
                        <DietText>
                            {diet}
                        </DietText>
                        <DietDesciption>
                            refeições dentro da dieta
                        </DietDesciption>
                    </DietContainer>
                    <OffDietContainer>
                        <OffDietText>
                            {offDiet}
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