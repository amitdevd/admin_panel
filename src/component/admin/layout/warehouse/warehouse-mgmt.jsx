import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '../cad';
import productData from '../product.json';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function WarehouseMgmt() {

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const [selectedDate, setselectedDate] = useState(null);

  const handleDateChange = (date) => {
    selectedDate = (date);
  };

  let [addCounter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter; // do nothing if already 20
    });
  }

  const decreaseValue = () => {
    setCounter(nextCounter => {
      if (nextCounter > 0) {
        return nextCounter - 1;
      }
      return nextCounter; // do nothing if already 20
    });
  }

  return (
    <div className=''>
      <div class="service-panel mb-2">
        <h4>Warehouse Management</h4>
      </div>
      
      <div className="row">
        {productData.map((item) => (
          <div key={item.id} className='col-lg-4'>
            <Card  productData={item}  />
          </div>
        ))}
      </div>
      <div className='innerPanel card-body'>
        <div className="search-panel addUserpanel mb-3 p-2">
          <div className="row w-100 justify-content-between">
            <div className="col-lg-4 col-md-4 col-12">
              <div class="form-group">
                {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
            </div>
            <div className="col-lg-4">
              <p>Counter: {addCounter}</p>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex justify-content-end'>
                <button className='btn customBtn' type='button' onClick={addValue}>Add Warehouse</button>
                <button className='btn customBtn' type='button' onClick={decreaseValue}>less Warehouse</button>
              </div>
            </div>
            <div className='col-lg-12'>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/DD/YYYY"
                className='form-control'
              />

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  
                </Table>
                
              </TableContainer>
              <Stack spacing={2} className='mt-4'>
                <Pagination count={10} />
              </Stack>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WarehouseMgmt;