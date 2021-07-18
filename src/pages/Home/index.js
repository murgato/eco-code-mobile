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
    TextCard,
    Cards
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
                <Cards>
                <Title>
                    Selecione o tipo de ocorrência
                </Title>
                </Cards>
                <Hr/>
                <TypeContainer style={{backgroundColor: '#017'}}>
                    <Type onPress={() => navigation.navigate("Occurrence")}>
                        <TextCard>Abandono de animais</TextCard>
                        <Image source={require("../../assets/teste.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#027'}}>
                    <Type>
                        <TextCard>Maltrato de animais</TextCard>
                        <Image source={require("../../assets/2.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#037'}}>
                    <Type>
                        <TextCard>Desmatamento</TextCard>
                        <Image source={require("../../assets/desmatamento.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#047'}}>
                    <Type>
                        <TextCard>Descarte irregular de resíduos</TextCard>
                        <Image source={require("../../assets/lixo.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#057'}}>
                    <Type >
                        <TextCard>Loteamento irregular</TextCard>
                        <Image source={require("../../assets/home.png")}/>
                    </Type>
                </TypeContainer>
                <TypeContainer style={{backgroundColor: '#067'}}>
                    <Type>
                        <TextCard>Uso indevido de área pública</TextCard>
                        <Image source={require("../../assets/area-publica.png")}/>
                    </Type>
                </TypeContainer>
            </Container>
        </ScrollView>
    )
}
