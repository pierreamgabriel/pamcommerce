import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

function CoreComponents() {

const cp = useSelector((state) => state.adminComponent);

switch(cp.name) {
		
	case "products":
	return(
	<div className="container-fluid">
	<Products />	
	</div>
	);	
}	

}
export default CoreComponents;

function Products() {

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'product', headerName: 'Product Name', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
  { field: 'price', headerName: 'Price', flex: 1 },	
  { field: 'url', headerName: 'URL', flex: 1 },	
];	
const rows = [
  { id: 1, product: 'Samsung Galaxy S22', quantity: 500, price: 799, url: 'http://localhost' },
  
];	
	return(
	<div className="container-fluid">
	<div className="row">
	<div className="col">
	<Button variant="contained" className="add-products">Add Products</Button>
	</div>	
	</div>
	<div className="row">
	<div className="products-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
		sx={{
          boxShadow: 2,
          border: 2,
          borderColor: '#ccc',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
	</div>	
	</div>
	);
}