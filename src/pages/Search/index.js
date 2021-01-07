import React,  {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Container, AreaInput, Input, List} from './styles';

export default function Search(){

    const [input, setInput] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        if(input ==='' || input === undefined){
            setUsers([]);
            return;
        }

        

    }, [input]);
    
    return(
        <Container>
            <AreaInput>
                <Feather
                name="search"
                color="#e52246"
                size={20}
                />
                <Input
                placeholder="Buscar"
                placeholderTextColor="#353840"
                value={input}
                onChangeText={(text)=> setInput(text)}
                />
            </AreaInput>
        </Container>
    );
}