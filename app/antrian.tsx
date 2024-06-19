import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { PaperProvider, Button, Appbar } from 'react-native-paper';
import AppbarBackAction from 'react-native-paper/lib/typescript/components/Appbar/AppbarBackAction';


const antrian = () => {
  return (
    <PaperProvider>
        <Appbar.Header>
            <Appbar.Content title="Home" />
            <Appbar.BackAction onPress={() => {}} />
        </Appbar.Header>
    <View style={styles.container}>
      <Text style={styles.square}>Bogey</Text>
      
      <Text style={styles.square}>Sepeda</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Tambah Antrian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Tambah Antrian</Text>
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
  button:{
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
  btnText:{
    color:'#ffff',
    fontWeight:'bold',
  }
})

export default antrian;
