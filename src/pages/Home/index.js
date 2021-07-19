import React from 'react';
import {
    Container,
    CardContainer,
    Card,
    Hr,
    Text,
    CardLegendContainer,
    Title,
    TypeContainer,
    Type,
    Image,
    TextCard
} from './styles';
import {useNavigation} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from "react-native";


export const Home = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <Container>
                <CardContainer>
                    <Card>
                        <Icon name="history" size={30} color="#f9f9f9"/>
                    </Card>
                    <Card>
                        <Icon name="user" size={30} color="#f9f9f9"/>
                    </Card>
                </CardContainer>
                <CardLegendContainer>
                    <Text>Acessar historico</Text>
                    <Text>Dados pessoais</Text>
                </CardLegendContainer>
                <Title>
                    Selecione o tipo de ocorrência
                </Title>
                <Hr/>
                <TypeContainer style={{backgroundColor: '#017'}}>
                    <Type onPress={() => navigation.navigate("Occurrence", {
                        screen: "Occurrence",
                        params: {type: "Abandono de animais", id: '6'}
                    })}>
                        <TextCard>Abandono de animais</TextCard>
                        <Image source={require("../../assets/teste.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#027'}}>
                    <Type onPress={() => navigation.navigate("Occurrence", {
                        screen: "Occurrence",
                        params: {type: "Maltrato de animais", id: '1'}
                    })}>
                        <TextCard>Maltrato de animais</TextCard>
                        <Image source={require("../../assets/2.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#037'}}>
                    <Type onPress={() => navigation.navigate("Occurrence", {
                        screen: "Occurrence",
                        params: {type: "Desmatamento", id: '2'}
                    })}>
                        <TextCard>Desmatamento</TextCard>
                        <Image source={require("../../assets/desmatamento.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#047'}}>
                    <Type onPress={() => navigation.navigate("Occurrence", {
                        screen: "Occurrence",
                        params: {type: "Descarte irregular de resíduos", id: '1'}
                    })}>
                        <TextCard>Descarte irregular de resíduos</TextCard>
                        <Image source={require("../../assets/lixo.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#057'}}>
                    <Type onPress={() => navigation.navigate("Occurrence", {
                        screen: "Occurrence",
                        params: {type: "Loteamento irregular", id: '3'}
                    })}>
                        <TextCard>Loteamento irregular</TextCard>
                        <Image source={require("../../assets/home.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#067'}}>
                    <Type onPress={() => navigation.navigate("Occurrence", {
                        screen: "Occurrence",
                        params: {type: "Uso indevido de área pública", id: '4'}
                    })}>
                        <TextCard>Uso indevido de área pública</TextCard>
                        <Image source={require("../../assets/area-publica.png")}/>
                    </Type>
                </TypeContainer>
            </Container>
        </ScrollView>
    )
}
