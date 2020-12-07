import React from 'react';
import {View, Text} from 'react-native';

import {Avatar, Container, Tipo, TipoText, NomeText} from './styles';

export default function HistoricoList({data}){
    return(
        <Container>
            <Tipo>
                <TipoText>
                   {data.plano} 
                </TipoText>
            </Tipo>
            <NomeText>
                {data.nome}
            </NomeText>
        </Container>
    );
}