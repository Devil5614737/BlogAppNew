import React from 'react'
import {Container,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  const navigate=useNavigate()
  return (
  <Container sx={{height:'100vh',display:'grid',placeContent:'center'}}>
 <Typography variant='h2'>
😪Not Found
 </Typography>
 <Typography
 onClick={()=>navigate('/')}
 variant='caption' sx={{textAlign:'center',marginTop:2,fontSize:18,cursor:'pointer'}}>
  go back to home
 </Typography>
  </Container>
  )
}
