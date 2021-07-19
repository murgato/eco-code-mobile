import React, { Component } from "react";

import { Modal, ScrollView } from "react-native";

import { RNCamera } from "react-native-camera";

import {
  Attention,
  BtnText,
  Button,
  CameraButtonContainer,
  CancelButtonText,
  Container,
  ContinueButtonText,
  ModalButtons,
  ModalContainer,
  ModalImageItem,
  ModalImagesList,
  ModalImagesListContainer,
  Input,
  TakePictureButtonContainer,
  TakePictureButtonLabel,
  Text,
  Hr,
} from "./styles";

import { Title } from "../Home/styles";
import api from "../../config/axiosConfig";

export class Occurrence extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    occurrence: {
      id: null,
      denunciations_type_id: "",
      neighborhood_id: 1,
      address_content: {
        zipcode: "",
        point_reference: "",
        neighborhood: "",
        street: "",
        number_house: "",
      },
      description: "",
      phone: "",
      files: [],
    },
    cameraModalOpened: false,
    dataModalOpened: false,
    camera: null,
  };

  handleCameraModalClose = () =>
    this.setState({ cameraModalOpened: !this.state.cameraModalOpened });

  handleDataModalClose = () =>
    this.setState({
      dataModalOpened: !this.state.dataModalOpened,
      cameraModalOpened: false,
    });

  handleTakePicture = async () => {
    if (this.state.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };
      const data = await this.state.camera.takePictureAsync(options);
      const { occurrence } = this.state;
      this.setState({
        occurrence: {
          ...occurrence,
          files: occurrence.files.append(data),
        },
      });
    }
  };

  renderImagesList = () =>
    this.state.occurrence.files.length !== 0 ? (
      <ModalImagesListContainer>
        <ModalImagesList horizontal>
          {this.state.occurrence.files.map((image) => (
            <ModalImageItem
              source={{ uri: image.uri }}
              key={image.uri}
              resizeMode="stretch"
            />
          ))}
        </ModalImagesList>
      </ModalImagesListContainer>
    ) : (
      <Attention>Anexe pelo menos uma foto para continuar</Attention>
    );

  renderCameraModal = () => (
    <Modal
      visible={this.state.cameraModalOpened}
      transparent={false}
      animationType="slide"
      onRequestClose={this.handleCameraModalClose}
    >
      <ModalContainer>
        <ModalContainer>
          <RNCamera
            style={{ flex: 1 }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "We need your permission to use your camera",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
            androidRecordAudioPermissionOptions={{
              title: "Permission to use audio recording",
              message: "We need your permission to use your audio",
              buttonPositive: "Ok",
              buttonNegative: "Cancel",
            }}
          />
          <TakePictureButtonContainer onPress={this.handleTakePicture}>
            <TakePictureButtonLabel />
          </TakePictureButtonContainer>
        </ModalContainer>
        {this.renderImagesList()}
        <ModalButtons>
          <CameraButtonContainer onPress={this.handleCameraModalClose}>
            <CancelButtonText>Cancelar</CancelButtonText>
          </CameraButtonContainer>
          <CameraButtonContainer onPress={this.handleDataModalClose}>
            <ContinueButtonText>Continuar</ContinueButtonText>
          </CameraButtonContainer>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  );

  handleOnSave = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("denunciations_type_id", this.state.occurrence.id);
    bodyFormData.append("neighborhood_id", 1);
    bodyFormData.append(
      "address_content",
      JSON.stringify(this.state.occurrence.address_content)
    );
    bodyFormData.append("description", this.state.occurrence.description);
    bodyFormData.append("phone", this.state.occurrence.phone);
    bodyFormData.append("files", this.state.occurrence.files);
    const response = await api.post("/denunciations/register", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response === 200) {
      console.log("Ok");
    } else {
      console.log(response);
    }
  };

  render() {
    const { id, type } = this.props.route.params.params;
    return (
      <ScrollView>
        <Container>
          <Title>Registro de ocorrência</Title>
          <Text>{type}</Text>
          <Input
            placeholder="Descrição"
            value={this.state.occurrence.description}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: { ...this.state.occurrence, description: e },
              })
            }
          />
          <Input
            placeholder="Phone"
            value={this.state.occurrence.phone}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: { ...this.state.occurrence, phone: e },
              })
            }
          />
          <Hr />
          <Text>Endereço</Text>
          <Input
            placeholder="CEP"
            value={this.state.occurrence.address_content.zipcode}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: {
                  ...this.state.occurrence,
                  address_content: {
                    ...this.state.occurrence.address_content,
                    zipcode: e,
                  },
                },
              })
            }
          />
          <Input
            placeholder="Rua"
            value={this.state.occurrence.address_content.street}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: {
                  ...this.state.occurrence,
                  address_content: {
                    ...this.state.occurrence.address_content,
                    street: e,
                  },
                },
              })
            }
          />
          <Input
            placeholder="Nº"
            value={this.state.occurrence.address_content.number_house}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: {
                  ...this.state.occurrence,
                  address_content: {
                    ...this.state.occurrence.address_content,
                    number_house: e,
                  },
                },
              })
            }
          />
          <Input
            placeholder="Bairro"
            value={this.state.occurrence.address_content.neighborhood}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: {
                  ...this.state.occurrence,
                  address_content: {
                    ...this.state.occurrence.address_content,
                    neighborhood: e,
                  },
                },
              })
            }
          />
          <Input
            placeholder="Ponto de referencia"
            value={this.state.occurrence.address_content.point_reference}
            onChangeText={(e) =>
              this.setState({
                ...this.state,
                occurrence: {
                  ...this.state.occurrence,
                  address_content: {
                    ...this.state.occurrence.address_content,
                    point_reference: e,
                  },
                },
              })
            }
          />
          <Button
            onPress={this.handleOnSave}
            style={
              this.state.occurrence.files.length > 0
                ? {}
                : { backgroundColor: "#c3c3c3" }
            }
          >
            <BtnText>Enviar</BtnText>
          </Button>
          <Button onPress={() => this.setState({ cameraModalOpened: true })}>
            <BtnText>Adicionar foto</BtnText>
          </Button>
          {this.renderCameraModal()}
          {this.renderImagesList()}
        </Container>
      </ScrollView>
    );
  }
}
