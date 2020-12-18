import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Container, Plano, PlanoText, NomeText, Valor, ValorText, Obs, ObsText} from './styles';

export default function HistoricoList({data, removeItem}){
    return(
        <TouchableOpacity onLongPress={ ()=> removeItem(data)}>
        <Container>
            <NomeText>
                {data.nome} - {data.date}
            </NomeText>
            <Plano>
                <PlanoText>
                   Plano: {data.plano} mes(es)
                </PlanoText>
            </Plano>
            <ValorText>
                Valor Pago: {data.valor} reais
            </ValorText>
            <ObsText>
                Observação: {data.obs}
            </ObsText>
            
        </Container>
        </TouchableOpacity>
    );
}