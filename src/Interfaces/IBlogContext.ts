import { IBlog } from "./IBlog";

export interface IBlogContext{
    blogData?:IBlog,
    setBlogData:(blogData:IBlog)=>void
}