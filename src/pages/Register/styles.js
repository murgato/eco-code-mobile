import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  border-radius: 8px;
  height: 33px;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 80%;
  border: 1px solid #aaa;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background: #037;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
`;

export const BtnText = styled.Text`
  color: #fff;
`;


export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 25px;
`;
