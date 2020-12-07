import styled from 'styled-components/native';

export const Background = styled.View`
flex:1;
background-color: #131313;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
height: 50px;
width: 90%;
background-color: rgba(255,255,255, 0.9);
margin-top: 30px;
font-size: 17px;
`;

export const SubmitButton = styled.TouchableOpacity`
height: 50px;
width: 90%;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color: #00b94a;
`;
export const SubmitText = styled.Text`
font-size: 21px;
font-weight: bold;
color: #FFF;
`;

export const UploadButton = styled.TouchableOpacity`
margin-top: 5%;
background-color: #fff;
width: 88px;
height: 88px;
border-radius: 90px;
justify-content: center;
align-items: center;
z-index: 5;
`;

export const UploadText = styled.Text`
z-index: 9;
position: absolute;
font-size: 25px;
color: #e52246;
opacity: 0.4;
`;


