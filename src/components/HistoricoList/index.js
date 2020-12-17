import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {Container, Plano, PlanoText, NomeText, Valor, ValorText, Obs, ObsText} from './styles';

export default function HistoricoList({data, deleteItem}){
    return(
        <TouchableWithoutFeedback onLongPress={()=>deleteItem(data)}>
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
        </TouchableWithoutFeedback>
    );
}