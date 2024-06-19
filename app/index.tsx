import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { PaperProvider, Button, Appbar } from 'react-native-paper';


const HomePage = () => {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'center',alignItems:'center', alignContent:'center'}}>
        <Button style={{width:150, height:150, justifyContent:'center'}} icon="human-queue" mode="contained" onPress={() => {
          console.log('Pressed Antrian')
          router.push({
            pathname:'/antrian'
          })
          }}>
          Antrian
        </Button>
        <Button style={{width:150, height:150, margin:20, justifyContent:'center'}} icon="shopping"  mode="contained" onPress={() => {
          console.log('Pressed Transaksi')
          router.push({
            pathname:'/transaksi'
          })
          }}>
          <Text>Transaksi</Text>
        </Button>
        <Button style={{width:150, height:150, justifyContent:'center'}} icon="camera" mode="contained" onPress={() => {
          console.log('Pressed Scan Barcode')
          router.push({
            pathname:'/scanBarcode'
          })
          }}>
          <Text>Scan Barcode</Text>
        </Button>
        <Button style={{width:150, height:150, margin:20, justifyContent:'center'}} icon="camera" mode="contained" onPress={() => {
          console.log('Pressed Edit Paket')
          router.push({
            pathname:'/paket'
          })
          }}>
          <Text>Paket</Text>
        </Button>
        <Button style={{width:150, height:150, justifyContent:'center'}} icon="camera" mode="contained" onPress={() =>{

          console.log('Pressed Transaksi')
          router.push({
            pathname:'/daftarTransaksi'
          })
        }
          }>
          <Text>Daftar</Text>
          <Text>Transaksi</Text>
        </Button>
        <Button style={{width:150, height:150, margin:20, justifyContent:'center'}} icon="account" mode="contained" onPress={() => {
          console.log('Pressed Settings')
          router.push({
            pathname:'/settings'
          })
          }}>
          <Text>Settings</Text>
        </Button>
      </View>
      {/* <Button icon="camera" mode="contained" onPress={() =>{

        console.log(`Button with ID: users/ Pressed!`)
        router.push({
          pathname:'users/[id]',
          params: {id:1},
        })
      }
      }></Button>
    <View>
      <Text className='font-bold'>Home Page</Text>
      <Button icon="camera" mode="contained" onPress={() =>{

        console.log(`Button with ID: users/ Pressed!`)
        router.push({
          pathname:'users/[id]',
          params: {id:1},
        })
      }
      }>

      <Link href="/users/1">
        Go To User 1
      </Link>
      </Button>
      <Pressable
        onPress={() =>
          router.push({
            pathname: 'users/[id]',
            params: { id: 2 },
          })
        }
        >
        <Text>Go To User 2</Text>
      </Pressable>
      <Text>TEST</Text>
    </View> */}
    
        </PaperProvider>
        
  )
}

export default HomePage;