import React, {useContext, useEffect, useState} from 'react';
import {BtnText, Button, Container, Text} from './styles';
import {useNavigation} from "@react-navigation/native";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from "../Home/styles";
import api from "../../config/axiosConfig";
import {login} from "../../services/auth";
import ReactDOM from "react-dom";




export const SignUp = ({route}) => {
    const navigation = useNavigation();
    const cpf = route.params.params.cpf;
    const [optionsMother, setOptionsMother] = useState([]);
    const [optionsDate, setOptionsDate] = useState([]);
    const [checkMother, setCheckMother] = useState(0);
    const [checkDate, setCheckDate] = useState(0);


    useEffect(() => {
        const getData = async () => {
            const response = await api.get(`/login/valid?cpf=${cpf}`);
            setOptionsMother(response.data.content_auth.mother);
            setOptionsDate(response.data.content_auth.birthdate);
        }
        try {
            getData();
        } catch (err) {
            console.log(err);
        }
    }, [])

    const handleSignIn = async () => {
        try {
            let bodyFormData = new FormData();
            bodyFormData.append("cpf", cpf);
            bodyFormData.append("mother_name", optionsMother[checkMother]);
            bodyFormData.append("birthdate", optionsDate[checkDate]);
            const response = await api.post('/login/access', bodyFormData, {
                headers: {"Content-Type": "multipart/form-data"},
            });
            if (response.status == 200) {
                await login(response.data);
                navigation.navigate("Home");
            } else {
                console.log(response)
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Container>
            <Text>Selecione o nome da sua mãe</Text>
            {optionsMother.map((data, key) => {
                return (
                    <View key={key}>
                        {checkMother === key ?
                            <TouchableOpacity style={styles.btn}>
                                <Image style={styles.img} source={require("../../assets/rb_selected.png")}/>
                                <Text>{data}</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => {
                                setCheckMother(key)
                            }} style={styles.btn}>
                                <Image style={styles.img} source={require("../../assets/rb_unselected.png")}/>
                                <Text>{data}</Text>
                            </TouchableOpacity>
                        }
                    </View>
                )
            })}
            <Text>Selecione sua data de nascimento</Text>
            {optionsDate.map((data1, key1) => {
                return (
                    <View key={key1}>
                        {checkDate === key1 ?
                            <TouchableOpacity style={styles.btn}>
                                <Image style={styles.img} source={require("../../assets/rb_selected.png")}/>
                                <Text>{data1}</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => {
                                setCheckDate(key1)
                            }} style={styles.btn}>
                                <Image style={styles.img} source={require("../../assets/rb_unselected.png")}/>
                                <Text>{data1}</Text>
                            </TouchableOpacity>
                        }
                    </View>
                )
            })}
            <Button onPress={handleSignIn}>
                <BtnText>Validar</BtnText>
            </Button>
        </Container>
    )
}


