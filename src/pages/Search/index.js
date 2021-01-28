import React,  {useState, useEffect, useContext} from 'react';
import SearchList from '../../components/SearchList';
import {View, Text} from 'react-native';
import firebase from '../../services/firebaseConnection';
import Feather from 'react-native-vector-icons/Feather';
import {Container, AreaInput, Input, List} from './styles';
import {AuthContext} from '../../contexts/auth';

export default function Search(){
    const [input, setInput] = useState('');
    const [users, setUsers] = useState([]);
    const {user:usuario} = useContext(AuthContext);

     useEffect(()=>{
        let uid = usuario.uid;
                
        if(input ==='' || input === undefined){
            setUsers([]);
            return;
        }
        
        let subscriber = firebase.database().ref('historico').child(uid).child(uid)
        .orderByChild("nome")
        .limitToFirst(5)
        .on("value", function(snapshot) {
            const listsUsers = [];

            snapshot.forEach( doc => {
              listsUsers.push({
               id: doc.id                                       
            });
        });
        setUsers(listsUsers);
        console.log(listsUsers);
    })

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

            <List
                showsVerticalScrollIndicator={false}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <SearchList data={item}/>}
            />
        </Container>
    );
}