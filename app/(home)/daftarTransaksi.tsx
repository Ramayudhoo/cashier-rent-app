import { View, Text } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';

const daftarTransaksi = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     inv:"INV/1111",
     total:5000,
     time:new Date().toLocaleString(),
   },
   {
     key: 2,
     inv:"INV/2222",
     total:2000,
     time:new Date().toLocaleString(),
   },
   {
     key: 3,
     inv:"INV/3333",
     total:10000,
     time:new Date().toLocaleString(),
   },
   {
     key: 4,
     inv:"INV/4444",
     total:25000,
     time:new Date().toLocaleString(),
   },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Invoice</DataTable.Title>
        <DataTable.Title>Time</DataTable.Title>
        <DataTable.Title>Total</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.inv}</DataTable.Cell>
          <DataTable.Cell numeric>{item.time}</DataTable.Cell>
          <DataTable.Cell numeric>Rp. {item.total},00</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default daftarTransaksi;