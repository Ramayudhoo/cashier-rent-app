import { ScrollView, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const transaksi = () => {
  return (
    <ScrollView>

    <Card>
    <Card.Content>
      <Text variant="titleLarge">Paket Rental</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Text variant='labelLarge'>motor Rp. 2.000</Text>
      <Button>Add</Button>
    </Card.Actions>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Text variant='labelLarge'>sepeda Rp. 5.000</Text>
      <Button>Add</Button>
    </Card.Actions>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Text variant='labelLarge'>odong-odong Rp. 20.000</Text>
      <Button>Add</Button>
    </Card.Actions>

    
  </Card>

    </ScrollView>
  
  )
}

export default transaksi