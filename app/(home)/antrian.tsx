import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { PaperProvider, Button, Appbar } from 'react-native-paper';
import AppbarBackAction from 'react-native-paper/lib/typescript/components/Appbar/AppbarBackAction';


const antrian = () => {

  const [bogeyCount, setBogeyCount] = useState(0);
  const [sepedaCount, setSepedaCount] = useState(0);

  const incrementBogey = () => {
    setBogeyCount(bogeyCount + 1);
    console.log(`Tambah Data Antrian Bogey : ${bogeyCount + 1}`)
  };

  const incrementSepeda = () => {
    setSepedaCount(sepedaCount + 1);
    console.log(`Hapus Data Antrian Sepeda : ${sepedaCount + 1}`)
  };

  const decrementBogey = () => {
    setBogeyCount(Math.max(0, bogeyCount - 1));
    console.log(`Hapus Data Antrian Bogey : ${bogeyCount - 1}`)
  };

  const decrementSepeda = () => {
    setSepedaCount(Math.max(0, sepedaCount - 1));
    console.log(`Hapus Data Antrian Sepeda : ${sepedaCount - 1}`)
  };
  

  return (
    <PaperProvider>
        <Appbar.Header>
            <Appbar.Content title="Home" />
            <Appbar.BackAction onPress={() => {}} />
        </Appbar.Header>
    <View style={styles.container}>
      <Text style={styles.square}>Bogey</Text>
      
      <Text style={styles.square}>Sepeda</Text>

      <Text style={styles.square}>{bogeyCount}</Text>
      
      <Text style={styles.square}>{sepedaCount}</Text>
      
      <TouchableOpacity style={styles.buttonRed} onPress={incrementBogey}>
        <Text style={styles.btnText}>Tambah Antrian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRed} onPress={incrementSepeda}>
        <Text style={styles.btnText}>Tambah Antrian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGreen} onPress={decrementBogey}>
        <Text style={styles.btnText}>hapus Antrian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGreen} onPress={decrementSepeda}>
        <Text style={styles.btnText}>hapus Antrian</Text>
      </TouchableOpacity>
    </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent:'center',
    alignItems:'center', 
    alignContent:'center'
  },
  square:{
    width:150,
    height:120,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  buttonRed:{
    width:150,
    height:120,
    backgroundColor:"#FF6969",
    borderRadius:8,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    margin:5,
  },
  buttonGreen:{
    width:150,
    height:120,
    backgroundColor:"#9BEC00",
    borderRadius:8,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    margin:5,
  },
  btnText:{
    color:'#ffff',
    fontWeight:'bold',
  }
})

export default antrian;
