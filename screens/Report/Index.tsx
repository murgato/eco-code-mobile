import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Modal } from 'react-native'; // Adicionado o Modal
import { RNCamera } from 'react-native-camera';
import { ModalCamera } from "./moldals/Camera";
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './styles'
import { useState } from "react";
import { stylesGlobal } from "../styles";

export default function Report() {
  const [modal, setModal] = useState(false)

  return (
    <View style={stylesGlobal.container}>
      <View
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <View style={styles.containerButtomImage} >
        <Icon name="circle-with-plus" style={styles.buttom} onPress={() => { setModal(true) }} />
      </View>

      <ModalCamera isOpen={modal} close={() => setModal(false)} />

    </View> 
      );
}
