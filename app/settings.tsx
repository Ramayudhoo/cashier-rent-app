import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider, Text } from 'react-native-paper';

const settings = () => {
  return (
    <View>
    <TouchableOpacity>
      <Text style={styles.text}>Account</Text>
    </TouchableOpacity>
    <Divider/>
    <Divider />
    <TouchableOpacity>
      <Text style={styles.text}>Password and Security</Text>
    </TouchableOpacity>
    <Divider/>
    <Divider/>
    <TouchableOpacity>
      <Text style={styles.text}>Personal Detail</Text>
    </TouchableOpacity>
    <Divider/>
    <TouchableOpacity>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
    <Divider />
  </View>
  )
}

export default settings

const styles = StyleSheet.create({
  text:{
    padding:5,
  }
})