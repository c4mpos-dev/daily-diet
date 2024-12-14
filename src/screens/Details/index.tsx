import { Percentage } from '@components/Percentage';
import { Container, ContainerPercentage, ContainerStatistics, DetailHeader, DietContainer, DietDesciption, DietsInfoContainer, DietText, OffDietContainer, OffDietDesciption, OffDietText, RegisteredContainer, RegisteredDesciption, RegisteredText, SequenceContainer, SequenceDesciption, SequenceText, StatisticsText } from './styles';

export function Details(){
    return(
        <Container>
            <DetailHeader>
                <ContainerPercentage>      
                    <Percentage title='30,21%' back/> 
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
                            32
                        </DietText>
                        <DietDesciption>
                            refeições dentro da dieta
                        </DietDesciption>
                    </DietContainer>
                    <OffDietContainer>
                        <OffDietText>
                            77
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