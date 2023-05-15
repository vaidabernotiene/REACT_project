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
    blogTitle: "",
    blogMainText: "",
    blogFooter: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // POST request i "http://localhost:5000........"
    axios
      .post("http://localhost:5000/", formData)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <CardHeader title="NEW BLOG"></CardHeader>
          <TextField sx={{ marginBottom: "10px"}}
            fullWidth
            variant="filled"
            type="text"
            name="blogTitle"
            label="Title"
            onChange={handleOnChange}
            required
          />
          <TextField sx={{ marginBottom: "10px"}}
            fullWidth
            variant="filled"
            type="text"
            name="blogMainText"
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
            name="blogFooter"
            label="Username"
            onChange={handleOnChange}
            required
          />
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "30px", width: '100%'}}
            onSubmit={handleOnSubmit}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
