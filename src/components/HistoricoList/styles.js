import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    background-color: gray;
    width: 344px; 
    margin-bottom: 1px;
    border-radius: 1px;
    padding: 16px 32px;
    display: flex;
`;

export const Plano = styled.View`
    justify-content: space-between;
`;

export const PlanoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    text-align: left;
`;

export const NomeText = styled.Text`
    text-align: left;
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    
`;

export const ValorText = styled.Text`
    color: #FFF;
    font-size: 16px;
    justify-content: space-between;
    text-align: left;
`;

export const ObsText = styled.Text`
    color: #8b0000;
    font-size: 16px;
    font-style: italic;
    justify-content: space-between;
    
    
`;