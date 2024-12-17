import { BackIcon, Container, ContainerDescription, ContainerName, ContainerNewMealHeader, ContainerNewMealInfo, Label, NewMealHeader, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input';

export function NewMeal(){
    const navigation = useNavigation();

    function handleGoToMain() {
        navigation.navigate('main');
    }

    return(
        
        <Container>
            <NewMealHeader>
                <ContainerNewMealHeader>
                    <BackIcon/>
                    <Title>
                        Nova Refeição
                    </Title>
                </ContainerNewMealHeader>
            </NewMealHeader>
            <ContainerNewMealInfo>
                <ContainerName>
                    <Label>Nome</Label>
                    <Input 
                        
                    />
                </ContainerName>
                <ContainerDescription>
                    <Label>Descrição</Label>
                    <Input
                        multiline={true}
                        textAlignVertical={'top'}
                    />
                </ContainerDescription>

            </ContainerNewMealInfo>
        </Container>
    )
}