import React,{useEffect,useState} from 'react'

import { Container,Grid,Button } from '@mui/material'
import { Header } from '../Components/Header'
import { Blog } from '../Components/Blog'
import {useNavigate} from 'react-router-dom';
import {fetchBlogs} from '../api/request'
import { IBlog } from '../Interfaces/IBlog';


export default function Home() {
  const[blogs,setBlogs]=useState<IBlog[]>([])
  const navigate=useNavigate();


const getBlogs=async()=>{
  const {data:blogs}=await fetchBlogs();
  setBlogs(blogs)
}

useEffect(()=>{
  getBlogs()
},[]);




  return (
  <>
  <Container maxWidth='md'>
    <Header title='Blog Articles'/>
    <Button 
    onClick={()=>navigate('/new-blog')}
sx={{marginTop:2}}
size='medium'
variant="outlined">New Article</Button>
  <main style={{marginTop:23}}>
    
    <Grid container spacing={2}>
      {blogs?.map((blog:IBlog)=>
  <Grid key={blog._id} item xs={12} >
  <Blog blog={blog}/>
  </Grid>
      )}
  
</Grid>
  </main>
  </Container>
  </>
  )
}
