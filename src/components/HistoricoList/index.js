import React from 'react';
import {View, Text} from 'react-native';

import {Container, Plano, PlanoText, NomeText, Valor, ValorText, Obs, ObsText} from './styles';

export default function HistoricoList({data}){
    return(
        <Container>
            
            <NomeText>
                {data.nome}
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
    );
}