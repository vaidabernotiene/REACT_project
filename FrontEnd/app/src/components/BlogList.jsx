import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogItem } from "./BlogItem";
import { Card, CardContent } from "@mui/material";

export const BlogList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/posts")
      .then((resp) => {
        setPosts(resp.data); // resp arba response arba betkas.data => pagal nutylejima
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card
        sx={{
          bgcolor: "background.paper",
          margin: "20px 0",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {posts.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </CardContent>
      </Card>
    </>
  );
};
