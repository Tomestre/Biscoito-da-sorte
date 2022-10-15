import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from './styles';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));

  return (
    <View style={Styles.container}>
      <Image source={img} style={Styles.img} />

      <Text style={Styles.textoFrase}>Teste de frase</Text>

      <TouchableOpacity style={Styles.botao}>
        <View style={Styles.btnArea}>
          <Text style={Styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Styles.botao, {marginTop: 15, borderColor: '#121212'}]}>
        <View style={Styles.btnArea}>
          <Text style={[Styles.btnTexto, {color: '#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default App;
