import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    background-color: #FFF;
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 8px;
    flex-direction: row;
`;

export const Avatar = styled.Image`
    margin-top: 1%;
    background-color: gray;
    width: 88px;
    height: 88px;
    border-radius: 90px;
    justify-content: center;
    z-index: 5;
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