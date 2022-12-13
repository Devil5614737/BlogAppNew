import React from 'react';
import { Typography,Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

interface IProps{
  title:string
}

export const Header = ({title}:IProps) => {
  const navigate=useNavigate()
  return (
    <header onClick={()=>navigate('/')} style={{marginTop:10,cursor:'pointer'}}>
  <Typography variant="h5" component="h2" sx={{fontWeight:'bold'}}>
  {title}
</Typography>
    </header>
  )
}
