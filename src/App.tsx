import React,{lazy,Suspense} from 'react'
import {Route,Routes} from 'react-router-dom';
import {ThemeProvider} from '@mui/material';
import { theme } from './Components/Theme';
import NotFound from './pages/NotFound';
import { BlogContextProvider } from './context/BlogContext';
import { SkeletonComp } from './Components/Skeleton';

const Home=lazy(()=>import('./pages/Home'))
const BlogPreview=lazy(()=>import('./pages/BlogPreview'))
const EditBlog=lazy(()=>import('./pages/EditBlog'))
const NewBlog=lazy(()=>import('./pages/NewBlog'))


export default function App() {
  return (
<>

<ThemeProvider theme={theme}>
<BlogContextProvider>
<Suspense fallback={<SkeletonComp/>}>
<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/new-blog' element={<NewBlog/>}/>
  <Route path='/edit-blog' element={<EditBlog/>}/>
  <Route path='/blog/:slug' element={<BlogPreview/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
</Suspense>
</BlogContextProvider>
</ThemeProvider>
</>
  )
}
