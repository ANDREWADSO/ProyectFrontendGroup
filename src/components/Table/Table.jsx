import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status};
}

const rows = [
  createData('Java Script',12890240, "2 March 2023", "Aproved"),
  createData('MySQL',52250214, "2 March 2023", "Pending"),
  createData('Python',16995829, "2 March 2023", "Aproved"),
  createData('GitHub',451202343, "2 March 2023", "Delivered"),
 
];

const makeStyles=(status)=>{
  if(status === 'Aproved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
}
  else if(status === 'Pending')
  {
    return {
      background: 'ffadad8f',
      color: 'red',

    }
  }
  else {

    return{
      background: '59bfff',
      color: 'blue',

    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
     
    
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Curso</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Fecha</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left"></TableCell>
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
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left"> 

              <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              
              
              </TableCell>
              <TableCell align="left">Detalle</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
