import React, {useState} from 'react';
import {Container, Input, Text, Button, BtnText, Content} from './styles';
import {useNavigation} from "@react-navigation/native";
import api from "../../config/axiosConfig";

export const Login = () => {
    const navigation = useNavigation();
    const [cpf, setCpf] = useState("");

    const handleOnContinue = async () => {
        const response = await api.get(`/login/valid?cpf=${cpf}`);
        if (response.status == 200) {
            navigation.navigate('SignUp', {
                screen: "SignUp",
                params: {cpf}
            })
        } else {
            try {
                response.status != 200
            } catch (error){
                console.log("CPF não cadastrado")
            }

              }
            // TODO tratamento de exception
        }
    
    return (
        <Container>
            <Text> Identificação </Text>
            <Input autoFocus={true} placeholder="Digite seu CPF" value={cpf} onChangeText={setCpf}/>
            <Button onPress={handleOnContinue}>
                <BtnText>Continuar</BtnText>
            </Button>
            <Text>ou</Text>
            <Button onPress={() => navigation.navigate('Register')}>
                <BtnText>Cadastre-se</BtnText>
            </Button>
        </Container>
    )
 }
