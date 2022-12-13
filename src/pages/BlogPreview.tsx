import React, { useEffect, useState ,useContext} from "react";
import ReactMarkdown from "react-markdown";
import { useParams,useNavigate } from "react-router-dom";
import { fetchBlogBySlug, removeBlog } from "../api/request";
import { IBlog } from "../Interfaces/IBlog";
import { Typography, Container,Box,Button } from "@mui/material";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeRaw from "rehype-raw";
import { BlogContext } from "../context/BlogContext";
import { IBlogContext } from "../Interfaces/IBlogContext";
import { SkeletonComp } from "../Components/Skeleton";

export default function BlogPreview() {
  const {setBlogData}=useContext<IBlogContext>(BlogContext)
  const navigate=useNavigate();
  const params = useParams();
  const[isLoading,setIsLoading]=useState<boolean>(false);
  const { slug } = params;
  const [blog, setBlog] = useState<IBlog>();

  const fetchBlog = async () => {
    setIsLoading(true)
    const { data } = await fetchBlogBySlug(slug as string);
    data && setIsLoading(false)
    setBlog(data[0]);
  };

  useEffect(() => {
    fetchBlog();
  }, []);


const handleRemoveBlog=async(slug:string)=>{
  try {
    const {data}=await removeBlog(slug);
    data && navigate('/')
  } catch (error) {
    alert(error)
  }
}


  return (
    <Container maxWidth="md" sx={{ paddingY: 2 }}>
    {isLoading?<SkeletonComp/>:<>
    <Typography
        variant="h1"
        component="h4"
        sx={{ fontWeight: 600, fontSize: 28, marginBottom: 3 }}
      >
        {blog?.title}
      </Typography>
      <ReactMarkdown children={blog?.markdown as string} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw,rehypeHighlight,rehypeAutolinkHeadings,rehypeAccessibleEmojis]} />
        
      
      <Box sx={{marginTop:2,display:'flex',gap:'0 12px'}}>
      <Button
      onClick={()=>{navigate('/edit-blog')
    setBlogData(blog as IBlog )
    }}
      color='warning'
      variant="outlined">Edit</Button>
      <Button
      onClick={()=>handleRemoveBlog(blog?.slug as string)}
      color='error'
      variant="outlined">Delete</Button>
      <Button
      onClick={()=>navigate(-1)}
      color='primary'
      variant="outlined">Back</Button>
      </Box>
    </>}
    </Container>
  );
}
