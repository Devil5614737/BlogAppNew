import axios from "axios";

const BASE_URL = "https://blogapp-backend-zx4r.onrender.com/api/";

const fetchBlogs = () => axios.get(`${BASE_URL}/get-blog`);
const fetchBlogBySlug = (slug: string) => axios.get(`${BASE_URL}/blog/${slug}`);

const newBlog = (title: string, desc: string, markdown: string) =>
  axios.post(`${BASE_URL}/create-blog`, { title, desc, markdown });

const removeBlog = (slug: string) =>
  axios.post(`${BASE_URL}/remove-blog`, { slug });


  const editBlog=(slug:string,title: string, desc: string, markdown: string)=>axios.put(`${BASE_URL}/edit-blog`,{slug,title,desc,markdown})
export { fetchBlogs, fetchBlogBySlug, newBlog, removeBlog,editBlog };
