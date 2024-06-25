import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const data = [
  {
    id: 1,
    title: 'Motor',
    price: 2000,
    imageUrl: 'https://picsum.photos/700',
  },
  {
    id: 2,
    title: 'Sepeda',
    price: 5000,
    imageUrl: 'https://picsum.photos/700',
  },
  {
    id: 3,
    title: 'Odong-odong',
    price: 20000,
    imageUrl: 'https://picsum.photos/700',
  },
];

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Transaksi = () => {
  const [totalPackages, setTotalPackages] = useState(0);
  const [pricePackages, setPricePackages] = useState(0);

  const addPackage = (price) => {
    setTotalPackages(totalPackages + 1);
    setPricePackages(pricePackages + price);
  };

  const deletePackage = (price) => {
    setTotalPackages(Math.max(0, totalPackages - 1));
    setPricePackages(Math.max(0, pricePackages - price));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(item => (
          <Card key={item.id}>
            <Card.Content>
              <Text variant="titleLarge">{item.title}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: item.imageUrl }} />
            <Card.Actions>
              <Text variant='labelLarge'>{item.title} Rp. {item.price.toLocaleString()}</Text>
              <Button onPress={() => deletePackage(item.price)}>Remove</Button>
              <Button onPress={() => addPackage(item.price)}>Add</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <Text style={styles.totalText}>Total Paket: {totalPackages}</Text>
        <Text style={styles.totalText}>Total Harga: Rp. {pricePackages.toLocaleString()}</Text>
        <Button mode="contained" onPress={() => { /* Handle payment action */ }}>
          Pembayaran
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 14,
  },
});

export default Transaksi;
