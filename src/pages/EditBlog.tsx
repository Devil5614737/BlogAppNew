import React, { FormEventHandler, useState, useContext } from "react";
import { Container, TextField, Box, Button, CircularProgress } from "@mui/material";
import { Header } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { editBlog, newBlog } from "../api/request";
import { AxiosError } from "axios";
import { BlogContext } from "../context/BlogContext";
import { IBlogContext } from "../Interfaces/IBlogContext";

export default function EditBlog() {
  const { blogData } = useContext<IBlogContext>(BlogContext);
  const [title, setTitle] = useState<string>(blogData?.title as string);
  const [desc, setDesc] = useState<string>(blogData?.desc as string);
  const [markdown, setMarkdown] = useState<string>(
    blogData?.markdown as string
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUpdateArticle = async (e: any) => {
    e.preventDefault();
setIsLoading(true)
    try {
      const { data } = await editBlog(
        blogData?.slug as string,
        title,
        desc,
        markdown
      );
      if(data){
        setIsLoading(false)
         navigate(-1);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setIsLoading(false)
        alert(error.response?.data);
      }
    }
    setTitle("");
    setDesc("");
    setMarkdown("");
  };

  return (
    <Container maxWidth="md">
      <Header title="Edit Article" />
      <main style={{ marginTop: 32 }}>
        <form onSubmit={handleUpdateArticle}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            sx={{ width: "100%", marginBottom: 2 }}
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.currentTarget.value)
            }
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            sx={{ width: "100%", marginBottom: 2 }}
            value={desc}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDesc(e.currentTarget.value)
            }
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            id="outlined-textarea"
            label="Markdown"
            placeholder="Placeholder"
            multiline
            rows={10}
            value={markdown}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMarkdown(e.currentTarget.value)
            }
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              onClick={() => navigate(-1)}
              color="error"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              disabled={!title || !desc || !markdown}
              onClick={handleUpdateArticle}
              variant="outlined"
            >
              {isLoading?    <CircularProgress color="primary" size={20} />:"Save"}
            </Button>
          </Box>
        </form>
      </main>
    </Container>
  );
}
