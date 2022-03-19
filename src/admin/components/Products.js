import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminComponent, addProductDetails } from '../../state';
import ReactQuill from 'react-quill';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

export function Products() {
    
    const dispatch = useDispatch();

    const setSubCP = (arg) => {
        dispatch(setAdminComponent({"subcomponent": arg}));
    };

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
        <Button variant="contained" className="add-product-button" onClick={() => 
            setSubCP("AddProduct")}>Add Product</Button>
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

    export function AddProduct() {
        
        const site = useSelector((state) => state.settings);
        const langFile = require('../lang/' + site.lang);
        const dispatch = useDispatch();
        const product = useSelector((state) => state.productDetails);
        const productDetails = (e) => {
        const { name, value, type} = e.target;  
        console.log(product);  
        if (type == "number") {
        dispatch(addProductDetails({[name]: parseInt(value)}));     
        } else {
        dispatch(addProductDetails({[name]: value}));
        }    
        };
        const textEditor = (value) => {
        dispatch(addProductDetails({"description": value}));    
        };
        const modules = {
            toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] } ],
                [{'size': []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, 
                 {'indent': '-1'}, {'indent': '+1'}],
                ['link',],
                ['clean']                                     
          ]};

        return(
          <div className='container-fluid new-product-main'>
       &nbsp;
       <div style={{fontSize: "1.4rem"}}>
           <i class="icofont-arrow-left" style={{marginRight: "5px"}}></i>
           <span>{langFile.addProducts[0]}</span>
        </div>       
       <div class="mb-3" style={{marginTop: "4rem"}}>  
      <h4 className='form-label add-product-label'>{langFile.addProducts[1]}</h4>      
      <input type="name" name="name" className="form-control" value={product.name} onChange={productDetails}></input>
      </div>
      <div class="mb-3">  
      <h4 className='form-label add-product-label'>{langFile.addProducts[2]}</h4>   
      <ReactQuill theme="snow" value={product.description} onChange={textEditor}  modules={modules}/>   
      </div>
      <AddImages lang={langFile.addProducts}/>
      <div className="row">
      <h4 className='form-label add-product-label'>{langFile.addProducts[6]}</h4>    
      <div className="col">
      <label className="form-label">{langFile.addProducts[7]}</label> 
      <input type="number" name="price" value={product.price} 
      onChange={productDetails} className="form-control" />  
    </div>
    <div className="col">
      <label className="form-label">{langFile.addProducts[8]}</label> 
      <input type="number" name="promoprice" value={product.promoprice} 
      onChange={productDetails} className="form-control" />  
    </div>      
      </div>
      <div className="row">
      <div className="col">
      <label className="form-label" style={{marginTop: "0.5rem"}}>{langFile.addProducts[9]}</label> 
      <input type="number" name="quantity" value={product.quantity} 
      onChange={productDetails} className="form-control" />  
    </div>
    <div className="col">
      <label className="form-label" style={{marginTop: "0.5rem"}}>{langFile.addProducts[10]}</label> 
      <input type="number" name="max" value={product.max} 
      onChange={productDetails} className="form-control" />  
    </div>      
      </div>
      <button type="button" class="btn btn-secondary" style={{marginTop: "1rem"}}>{langFile.addProducts[11]}</button>
          </div>
        );
      }

      function AddImages (prop) {
        
        const dispatch = useDispatch();
        const img = useSelector((state) => state.productDetails);
        const [error, setError] = useState(false);
        const [progress, setProgress] = useState(false);

        const processImage = (e) => {
        if (e.target.files[0] == null) {
            return false;
        }
        setProgress(true);    
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        axios.post('./api/upload.php', formData, {
        })
        .then(res => {
            if (res.data.error == false) {
            dispatch(addProductDetails({"images": [...img.images, res.data.url]}));
            setProgress(false);  
            setError(false);  
            } else {
            setProgress(false);    
            setError(true);    
            }
            
        });
        }

          return(
            <div class="row" style={{marginBottom: "1.5rem"}}>
            <h4 className='form-label add-product-label'>{prop.lang[3]}</h4>    
            {img.images.map((img, index) => {
            return(    
            <div class="col" key={index} className="list-product-img-div">
            <div style={{minHeight: "72px", marginLeft: "5px"}}>
               <img src={img} className="list-product-img"/>
               </div>
               <div>
               <i class="icofont-edit" style={{marginRight: "5px"}}></i> 
               <i class="icofont-ui-delete"></i>    
               </div>
          </div> 
            );   
            })}    
            <div class="col add-product-img-icon">
                 <p>{progress && <CircularProgress />}</p>
                 <label for="add-product-image">
                 <i class="icofont-plus-circle" style={{fontSize: "25px"}}></i>    
                 </label>   
                 <input type="file" id="add-product-image" accept=".jpg, .png"
                 onChange={processImage}/>
            </div>
            {error && <p>{prop.lang[4]}</p>}
          </div>  
          );
      }