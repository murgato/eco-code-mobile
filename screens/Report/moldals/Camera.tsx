import React from "react";
import { Modal, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import { RNCamera } from 'react-native-camera';
import { useState } from "react";

interface Props {
  isOpen: boolean;
  close?: any;
}

export const ModalCamera = ({ isOpen, close }: Props) => {


  return (
    <Modal
      visible={isOpen}
      transparent={false}
      animationType="slide"
    >
      <View>

        <Icon name="close"
          style={styles.buttomClosed}
          onPress={close} />

      </View>

      <RNCamera
        /*         ref={camera => {
                  let thisCamera = camera;
                }} */
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={
          "We need your permission to use your camera phone"
        }

      />

      <Text>Teste</Text>
    </Modal>
  )
}