import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('Matheus');
  const [idade, setIdade] = useState('20');

  function entrar(name, idade) {
    setIdade(idade);
    setNome(name);
  }

  return (
    <View>
      <Button title="mudar nome" onPress={() => entrar('lucas', 12)} />
      <Text>
        {nome}
        {idade}
      </Text>
    </View>
  );
}

export default App;
