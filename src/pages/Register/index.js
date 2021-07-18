import React from 'react';
import {Container, Input, Button, BtnText, Title} from './styles';
import {useNavigation} from "@react-navigation/native";

export const Register = () => {
    const navigation = useNavigation();
    const handleOnRegister = () => {
        navigation.navigate("Home");
    }
    return (
        <Container>
            <Title>Registro</Title>
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
    )
}
