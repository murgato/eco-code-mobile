import styled from 'styled-components/native'

import {Dimensions} from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const AnnotationContainer = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: #fc6663;
  borderRadius: 5;
  padding: 5px;
`;

const AnnotationText = styled.Text`
  fontSize: 14px;
  color: #fff;
`;

const NewButtonContainer = styled.TouchableHighlight`
  position: absolute;
  bottom: 54px;
  left: 20px;
  right: 20px;
  alignSelf: center;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #fc6663;
`;

const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 54px;
  left: 20px;
  right: 20px;
`;

const CancelButtonContainer = styled.TouchableHighlight`
  alignSelf: stretch;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #555;
  marginTop: 20px;
`;

const SelectButtonContainer = styled.TouchableHighlight`
  alignSelf: stretch;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #fc6663;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontSize: 16px;
  textAlign: center;
  fontWeight: bold;
`;

const Marker = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  alignSelf: center;
  top: ${(Dimensions.get('window').height / 2) - 60};
`;

const ModalContainer = styled.View`
  flex: 1;
  backgroundColor: #FFF;
`;

const ModalImagesListContainer = styled.View``;

const ModalImagesList = styled.ScrollView`
  paddingHorizontal: 10px;
  paddingTop: 10px;
`;

const ModalImageItem = styled.Image`
  height: 100px;
  width: 100px;
  marginRight: 10px;
`;

const ModalButtons = styled.View`
  paddingHorizontal: 10px;
  paddingVertical: 5px;
  flexDirection: row;
  justifyContent: space-between;
`;

const CameraButtonContainer = styled.TouchableHighlight`
  paddingVertical: 20px;
  paddingHorizontal: 40px;
`;

const CancelButtonText = styled.Text`
  color: #333;
  fontSize: 18px;
  fontWeight: bold;
`;

const ContinueButtonText = styled.Text`
  color: #fc6663;
  fontSize: 18px;
  fontWeight: bold;
`;

const TakePictureButtonContainer = styled.TouchableHighlight`
  position: absolute;
  alignSelf: center;
  bottom: 20px;
  width: 60px;
  height: 60px;
  backgroundColor: #FFF;
  borderRadius: 30px;
  alignItems: center;
  justifyContent: center;
`;

const TakePictureButtonLabel = styled.View`
  width: 52px;
  height: 52px;
  borderRadius: 26px;
  backgroundColor: #fc6663;
`;

const Attention = styled.Text`
  color: red;
  font-weight: bold;
`;

const Input = styled.TextInput`
  border-radius: 8px;
  height: 33px;
  padding-left: 10px;
  width: 80%;
  border: 1px solid #aaa;
  margin-bottom: 10px;
`;


const Button = styled.TouchableOpacity`
  align-items: center;
  background: #037;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
  margin-bottom: 30px;
`;

const BtnText = styled.Text`
  color: #fff;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
  width: 90%;
  margin-bottom: 10px;
`;


export const Hr = styled.View` 
  height: 2px;
  width: 100%;
  margin: 20px;
  border: 1px solid #aaa;
`;

export {
    Container,
    AnnotationContainer,
    AnnotationText,
    NewButtonContainer,
    ButtonsWrapper,
    CancelButtonContainer,
    SelectButtonContainer,
    ButtonText,
    Marker,
    ModalContainer,
    ModalImagesListContainer,
    ModalImagesList,
    ModalImageItem,
    ModalButtons,
    CameraButtonContainer,
    CancelButtonText,
    ContinueButtonText,
    TakePictureButtonContainer,
    TakePictureButtonLabel,
    Attention,
    Input,
    Button,
    BtnText,
    Text
};
