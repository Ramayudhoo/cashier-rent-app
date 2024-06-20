import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, DataTable, Modal, Portal, TextInput, Provider as PaperProvider } from 'react-native-paper';

const Paket = () => {
  const [visible, setVisible] = useState(false);
  const [namaPaket, setNamaPaket] = useState('');
  const [harga, setHarga] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const [items, setItems] = useState([
    {
      key: 1,
      id: 1,
      namaPaket: "Mobil 1 jam",
      price: 5000,
      imageUrl: 'https://picsum.photos/700',
      timeCreated: new Date().toLocaleString(),
      timeUpdated: new Date().toLocaleString(),
    },
    {
      key: 2,
      id: 2,
      namaPaket: "Motor 1 jam",
      price: 10000,
      imageUrl: 'https://picsum.photos/700',
      timeCreated: new Date().toLocaleString(),
      timeUpdated: new Date().toLocaleString(),
    },
    {
      key: 3,
      id: 3,
      namaPaket: "Kapal 1 jam",
      price: 15000,
      imageUrl: 'https://picsum.photos/700',
      timeCreated: new Date().toLocaleString(),
      timeUpdated: new Date().toLocaleString(),
    },
    {
      key: 4,
      id: 4,
      namaPaket: "Sepeda 1 jam",
      price: 20000,
      imageUrl: 'https://picsum.photos/700',
      timeCreated: new Date().toLocaleString(),
      timeUpdated: new Date().toLocaleString(),
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  const handleTambahPaket = () => {
    const newId = items.length + 1;
    const newItem = {
      key: newId,
      id: newId,
      namaPaket: namaPaket,
      price: parseInt(harga),
      imageUrl: 'https://picsum.photos/700',
      timeCreated: new Date().toLocaleString(),
      timeUpdated: new Date().toLocaleString(),
    };
    setItems([...items, newItem]);
    setVisible(false);
    setNamaPaket('');
    setHarga('');
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Nama Paket</Text>
          <TextInput
            label="Nama Paket"
            value={namaPaket}
            onChangeText={text => setNamaPaket(text)}
            style={styles.input}
          />
          <Text>Harga</Text>
          <TextInput
            label="Harga"
            value={harga}
            onChangeText={text => setHarga(text)}
            style={styles.input}
          />
          <Button mode='contained' onPress={handleTambahPaket}>Tambah</Button>
        </Modal>
      </Portal>
      <Portal>
        <Button style={styles.addButton} onPress={showModal}>Add</Button>
      </Portal>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nama Paket</DataTable.Title>
          <DataTable.Title>Total</DataTable.Title>
          <DataTable.Title numeric>Action</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.namaPaket}</DataTable.Cell>
            <DataTable.Cell numeric>Rp. {item.price.toLocaleString()},00</DataTable.Cell>
            <DataTable.Cell numeric>
              <Button>Edit</Button>
              <Button>Hapus</Button>
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} dari ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={value => setItemsPerPage(value)}
          showFastPaginationControls
          selectPageDropdownLabel={'Baris per halaman'}
        />
      </DataTable>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  addButton: {
    marginTop: 30,
  },
});

export default Paket;
