import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

export const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
    background-color: black;
`;

export const Tipo = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;

export const NomeText = styled.Text`
    color: #222;
    font-size: 22px;
    font-weight: bold;
`;