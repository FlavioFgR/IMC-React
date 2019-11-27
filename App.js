/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
import{
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';



type Props = {};
export default class App extends Component<Props>{

constructor(props){
  super(props)
  this.state = {altura:0, peso:0, resultado:0, resultadoText:""}
  this.calcular = this.calcular.bind(this)
}

calcular(){

  let imc = this.state.peso/ (this.state.altura * this.state.altura)
  let s = this.state
  s.resultado = imc
  this.setState(s)

  if(s.resultado <16){
    s.resultadoText = "Magreza Grave"
  }else if(s.resultado <17){
    s.resultadoText = "Magreza Moderada"
  }else if(s.resultado <18.5){
    s.resultadoText = "Magreza Leve"
  }else if(s.resultado <25){
    s.resultadoText = "Saudável"
  }else if(s.resultado <30){
    s.resultadoText = "Sobrepeso"
  }else if(s.resultado <35){
    s.resultadoText = "Obesidade Grau I"
  }else if(s.resultado <40){
    s.resultadoText = "Obesidade Grau II"
  }else {
    s.resultadoText = "Obesidade Grau III"
  }
}


  render() {
    return(
      <View style={styles.container}>
      <View style={styles.entradas}>
         <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}} />
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso)=>{this.setState({peso})}} />
      </View>  
    
      <TouchableOpacity onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
      <Text style={styles.resultado}>{this.state.resultadoText}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input:{
    height:80,
    alignSelf: 'center',
    textAlign:"center",
    fontSize:45,
    marginTop:24,
  },
  button:{
    backgroundColor:"#89ffa5"
  },
  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 35,
    color: "#6dc4a4",
    fontWeight: 'bold',
  },
  resultado:{
    alignSelf:"center",
    color:"lightpink",
    fontSize:40,
    padding:15
  }
})

