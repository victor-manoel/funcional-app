import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    background-color: #FFF;
    width: 344px;
    height: 110px;
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 8px;
    flex-direction: row;
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