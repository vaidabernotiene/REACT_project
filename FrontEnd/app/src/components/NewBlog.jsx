import {
  Card,
  Button,
  CardHeader,
  TextField,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    username: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // POST request i "http://localhost:5000........"
    axios
      .post("http://localhost:5000/posts", formData)
      .then((response) => {
        console.log(response);
          navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card sx={{ maxWidth:"sm", margin: '20px 0' }}>
        <CardContent>
          <CardHeader title="NEW BLOG"></CardHeader>
          <TextField sx={{ marginBottom: "10px"}}
            fullWidth
            variant="filled"
            type="text"
            name="title"
            label="Title"
            onChange={handleOnChange}
            required
          />
          <TextField sx={{ marginBottom: "10px"}}
            fullWidth
            variant="filled"
            type="text"
            name="text"
            label="Text"
            multiline
            rows={4}
            onChange={handleOnChange}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            name="username"
            label="Username"
            onChange={handleOnChange}
            required
          />
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "30px", width: '100%'}}
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
