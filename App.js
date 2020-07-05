import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput,  ScrollView} from 'react-native';


export default function App() {

  const [contacts, setContacts] = useState ([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


useEffect(() => {
   console.log(contacts);
}, [contacts]);

 // getName
 const capturaName = (name) => {
   setName(name)
 };
 
 // getPhone
 const capturaPhone = (phone) => {
  setPhone(phone)
 };

 // setName and setPhone in Contacts[]
 const addContact = () => {
    setName(name) //Contato identificado pelo nome (n tem id)
    setContacts (contacts => [...contacts, name] )
    setContactsd (contacts => [...contacts, phone] )
    console.log(contacts);
 };


  return (
    <View style={{padding:50}}>
      <View style={{borderBottomColor:'black', borderBottomWidth:1, marginBottom:4, padding:2}}>
      <TextInput placeholder="Name: " style={{borderBottomColor:'black', borderBottomWidth:1, marginBottom:4, padding:2}}/>
          onChangeText={capturaName} value={name}/>
        <TextInput placeholder="Phone: " style={{borderBottomColor:'black', borderBottomWidth:1, marginBottom:4, padding:2}}/>
          onChangeText={capturaPhone} value={phone}/>
        <Button title="+" onPress={addContact} />
      </View>
        <View>{
          contacts.map((contacts) =><View><Text key={contacts}>{contacts}</Text></View>)
        }
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
  padding: 50
  },
  contactView: {
  // Definir aqui os valores se conseguir instalar o plugin
},
  contatoInputText: {
  // Definir aqui os valores se conseguir instalar o plugin
  }     
  });