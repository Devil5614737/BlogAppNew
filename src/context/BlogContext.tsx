import {createContext,ReactNode,useState} from 'react';
import { IBlog } from '../Interfaces/IBlog';
import { IBlogContext } from '../Interfaces/IBlogContext';


export const BlogContext=createContext({} as IBlogContext)

interface IBlogContextProviderProps{
    children:ReactNode
}

export const BlogContextProvider=({children}:IBlogContextProviderProps)=>{
    const[blogData,setBlogData]=useState<IBlog>()
    return (
        <BlogContext.Provider value={{blogData,setBlogData}}>
            {children}
        </BlogContext.Provider>
    )
}