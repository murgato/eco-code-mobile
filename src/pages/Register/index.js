import React from 'react';
import {Container, Input, Button, BtnText, Title, RegisterText} from './styles';
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native";


export const Register = () => {
    const navigation = useNavigation();
    const handleOnRegister = () => {
        navigation.navigate("Home");
    }
    return (
        <ScrollView>
            <Container>
                <RegisterText>
                    <Title>Registro</Title>
                </RegisterText>
                <Input autoFocus={true} placeholder="Digite seu nome completo"/>
                <Input placeholder="Digite seu CPF"/>
                <Input placeholder="Digite seu telefone"/>
                <Input placeholder="Digite seu email"/>
                <Input placeholder="Nome da mãe"/>
                <Input placeholder="Data de nascimento"/>
                <Button onPress={handleOnRegister}>
                    <BtnText>Cadastrar</BtnText>
                </Button>
            </Container>
        </ScrollView>

    )
}
