import React from "react";
import { Card, CardContent, Typography,Box } from "@mui/material";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {useNavigate} from 'react-router-dom'
import { IBlog } from "../Interfaces/IBlog";
import { formatDistanceToNow } from 'date-fns'

interface IProps{
  blog:IBlog
}

export const Blog = ({blog}:IProps) => {
  const navigate=useNavigate()
  return (
    <Card   onClick={()=>navigate(`/blog/${blog.slug}`)} variant="outlined" id='blog'>
      <CardContent>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontWeight: 600, fontSize: 18 }}
        
        >
        {blog.title}
        </Typography>
        <Typography my={1} component="p" sx={{ color: "gray" }} fontSize={15}>
        {blog.desc}
        </Typography>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography component="p" fontSize={14}>
        {formatDistanceToNow(new Date(blog?.createdAt as string),{addSuffix:true})}
        </Typography>
        <ArrowUpRightIcon id="arrow-icon" width={15} height={15} color='#b5b5b5' style={{cursor:'pointer'}}/>
        </Box>
      </CardContent>
    </Card>
  );
};
