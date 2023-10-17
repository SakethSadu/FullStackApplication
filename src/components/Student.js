import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
    const paperstyle = {padding:"50px 20px",width:600,margin:"20px auto"}
    const[name,setName] = React.useState('')
    const[address,setAddress]= React.useState('')
    const[students,setStudents]=React.useState([])
    const handleClick = (e)=>{
        e.preventDefault()
        const student = {name,address}
        console.log(student)
        fetch("http://localhost:8081/Student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)

    }).then(()=>{console.log("New Student is added to records")
    })
    }


  React.useEffect(()=>{
    fetch("http://localhost:8081/Student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result)})
  
  },[])  
  return (
    <Container
        
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Paper elevation={3} style={paperstyle}>
            <h1 style={{color:"blue"}}><u> Add Student</u></h1>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      style={{ marginBottom: '10px' }} 
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      style={{ marginBottom: '20px' }} 
      />
      <Button variant="contained" style={{backgroundColor:"red"}}
      onClick = {handleClick}
      >Submit</Button>
      </Paper>
      <h1>Students List</h1>
      <Paper elevation={3} style={paperstyle}>

        {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
            ID:{student.id}<br/>
            Name:{student.name}<br/>
            Address:{student.address}
          </Paper>
        ))}
      </Paper>

      </Container>
    
  );
}
