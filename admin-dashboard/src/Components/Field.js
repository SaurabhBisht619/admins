import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import './Field.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Field() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [data,setData] = useState([]);

    const addData = ()=>{
        setData([...data,{ name,email}]);
        setName("");
        setEmail("");
    }

    const removeItem = (index) =>{
        let arr = data;
        arr.splice(index,1);
        setData([...arr]);
    }

  return (
    <div>
        <div className='field'>
        <Stack spacing={6} direction="row">
            <TextField onChange={(e)=>setName(e.target.value)} value={name} id="outlined-basic" label="name" variant="outlined" />
            <TextField onChange={(e)=>setEmail(e.target.value)} value={email} id="outlined-basic" label="email" variant="outlined" />
            <button onClick={addData} className='field-btn'><AddIcon fontSize='large'/></button>
        </Stack>
        </div>

        <div className="field">
        <div className="field_val">
          <h5>Name</h5>
          <h5>Email</h5>
          <h5>Remove</h5>
        </div>

    {
      data.map((val,index)=>{
        return(
          <div className="field_val">
          <h5>{val.name}</h5>
          <h5>{val.email}</h5>
          <h5 className='delete-btn' onClick={()=>removeItem(index)}><DeleteForeverIcon fontSize='large'/></h5>
        </div>
        )
      })

    }


    </div>
    
    </div>
  )
}

export default Field