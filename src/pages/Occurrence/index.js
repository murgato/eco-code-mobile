import React from 'react';
import {Container, Button, BtnText} from './styles';
import {useNavigation} from "@react-navigation/native";

export const Occurrence = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Button onPress={() => {
                navigation.navigate("Cam")
            }}>
                <BtnText>
                    teste
                </BtnText>
            </Button>
        </Container>
    )
}
