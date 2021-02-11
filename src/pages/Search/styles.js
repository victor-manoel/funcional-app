import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
  padding: 0 10px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin: 0 10px 10px;
  background-color: #f1f1f1;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #f1f1f1;
  height: 40px;
  padding-left: 8px;
  font-size: 17px;
  color: #121212;
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const InfoLabel = styled.Text`
  color: white;
`;

export const Info = styled.Text`
  color: white;
  font-weight: bold;
`;
