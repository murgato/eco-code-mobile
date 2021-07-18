import * as React from "react";
import { View, TextInput } from "react-native";
import { mCPF } from "../../util/mask";
import { stylesGlobal } from "../styles";
import { styles } from './styles';
import Button from 'react-native-button';
import DatePicker from 'react-native-datepicker';

export default function Login() {
    const [login, setLogin] = React.useState({ cpf: '', moherName: '', Birthdate: '' })
    const [statusCode, setStatusCode] = React.useState(false)
    const radomCampo = () => {

        const random = Math.floor(Math.random() * 10)

        if (random % 2 === 0) {
            return (<>
                <TextInput
                    style={styles.input}
                    placeholder={'Nome da Mae'}
                    value={mCPF(login.cpf)}
                    onChangeText={(text: string) => { setLogin({ ...login, cpf: text }) }}
                    maxLength={14}
                />
            </>)

        } else {
            return (<>  {/* <DatePicker
                    style={styles.datePickerStyle}
                date={login.Birthdate}  // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate="01-01-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                }}
                onDateChange={(date) => {
                    setLogin({ ...login, Birthdate: date});
                }}
            /> */}</>)
        }


    }
    return (

        <View style={stylesGlobal.container}>

            <TextInput
                style={styles.input}
                placeholder={'CPF'}
                value={mCPF(login.cpf)}
                onChangeText={(text: string) => { setLogin({ ...login, cpf: text }) }}
                maxLength={14}
            />

            {statusCode ?
                <>
                    {radomCampo()}
                    <Button
                        style={styles.button}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => { }}>
                        Verificar
                    </Button>
                </>
                :
                <>
                    <Button
                        style={styles.button}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => setStatusCode(true)}>
                        Verificar
                    </Button>
                    <Button
                        style={styles.buttonRegister}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => { }}>
                        Novo Cadastro
                    </Button>
                </>
            }



        </View>

    )

}