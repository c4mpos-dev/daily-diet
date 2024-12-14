import { Percentage } from '@components/Percentage';
import { HeaderStyleProps, Container, ContainerPercentage, ContainerStatistics, DetailHeader, DietContainer, DietDesciption, DietsInfoContainer, DietText, OffDietContainer, OffDietDesciption, OffDietText, RegisteredContainer, RegisteredDesciption, RegisteredText, SequenceContainer, SequenceDesciption, SequenceText, StatisticsText } from './styles';

export function Details(type : HeaderStyleProps){
    const diet = 32; 
    const offDiet = 77; 
    
    const total = diet + offDiet;
    const percentage = total > 0 ? (diet / total) * 100 : 0;

    if (percentage > 50) { type = 'PRIMARY' }
    else { type = 'SECONDARY' }

    return(
        <Container>
            <DetailHeader type={type}>
                <ContainerPercentage>      
                    <Percentage title={`${percentage.toFixed(2)}%`} back/> 
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