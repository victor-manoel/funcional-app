import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';

export default function Picker({ onChange, plano }){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                width:'100%'
            }}
            selectedValue={plano}
            onValueChange={ (plano) => onChange(plano) }
            >
              <RNPickerSelect.Item label="plano" value="zero" />  
              <RNPickerSelect.Item label="1 mes" value="um" />  
              <RNPickerSelect.Item label="2 meses" value="dois" />  
              <RNPickerSelect.Item label="3 meses" value="tres" /> 
              <RNPickerSelect.Item label="4 meses" value="quatro" /> 
              <RNPickerSelect.Item label="5 meses" value="cinco" /> 
              <RNPickerSelect.Item label="6 meses" value="seis" /> 
              <RNPickerSelect.Item label="7 meses" value="sete" /> 
              <RNPickerSelect.Item label="8 meses" value="oito" /> 
              <RNPickerSelect.Item label="9 meses" value="nove" /> 
              <RNPickerSelect.Item label="10 meses" value="dez" /> 
              <RNPickerSelect.Item label="11 meses" value="onze" /> 
              <RNPickerSelect.Item label="12 meses" value="doze" /> 
            </RNPickerSelect>
        </PickerView>
    )
}