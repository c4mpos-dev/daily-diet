import { Percentage } from '@components/Percentage';
import { Header } from '@components/Header';
import { Container } from './styles';

export function Main(){
    return(
        <Container>
            <Header/>
            <Percentage title='40,10%' detail/>
        </Container>
    )
}