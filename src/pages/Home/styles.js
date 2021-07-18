import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #f9f9f9;
  align-items: center;
  padding-top: 10%;
`;

export const CardContainer = styled.View`
  width: 80%;
  background: #f9f9f9;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CardLegendContainer = styled.View`
  width: 90%;
  background: #f9f9f9;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const Card = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #037;
  border: 1px solid #aaa;
  padding: 5px;
  border-radius: 5px;
  margin: 0;
`;

export const Hr = styled.View` 
  height: 2px;
  width: 100%;
  margin-top: 20px;
  border: 1px solid #aaa;
`;

export const Text = styled.Text`
  margin: 0px;
  text-align: center;
  font-weight: bold;
  color: black;
`;

export const TextCard = styled.Text`
  margin: 0px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 25px;
`;

export const TypeContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Type = styled.TouchableOpacity`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  marginBottom: 1px;
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Image = styled.Image`
  border-radius: 5px;
  width: 50px;
  height: 50px;
`;
