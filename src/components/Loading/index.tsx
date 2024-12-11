import { Container, LoadIndicator } from './styles'
import { StatusBar } from 'react-native';

export function Loading() {
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
            />
            <LoadIndicator/>
        </Container>
    )
}