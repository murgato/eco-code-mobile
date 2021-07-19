import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #f9f9f9;
  justify-content: center;
  margin: 10px;
`;

export const Input = styled.TextInput`
  border-radius: 8px;
  height: 33px;
  padding-left: 10px;
  width: 80%;
  border: 1px solid #aaa;
  margin-bottom: 10px ;
`;

export const Text = styled.Text`
  font-weight: bold;
  margin: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background: #037;
  padding: 5px;
  border-radius: 8px;
  width: 40%;
`;

export const BtnText = styled.Text`
  color: #fff;
`;
