import React from 'react';
import {Container,Skeleton,Grid} from '@mui/material'

export const SkeletonComp = () => {
  return (
<Container maxWidth={'md'} >
<Skeleton style={{marginTop:10}} variant={'rectangular'} width={110} height={28} animation='wave'/>
<Skeleton sx={{marginTop:2,borderRadius:1}} variant={'rectangular'} width={110} height={38} animation='wave'/>


<main style={{marginTop:23}}>
    
    <Grid container spacing={2}>
      {[...Array(6)].map((item,index)=>
  <Grid key={index} item xs={12} >
  <Skeleton sx={{marginTop:2,borderRadius:1}} variant={'rectangular'} width={'100%'} height={178} animation='wave'/>
  </Grid>
      )}
  
</Grid>
  </main>


    </Container>
    
  )
}
