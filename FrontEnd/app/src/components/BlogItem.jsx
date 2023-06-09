import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

export const BlogItem = ({ post }) => {
  const { title, text, username } = post;
  const [blogText, setBlogText] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleOnClick = () => {
    setShowText(!showText);
    setBlogText(!blogText);
  };

  return (
    <>
      <ListItemText
        primary={
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "purple" }}>{title[0]}</Avatar>
          </ListItemAvatar>
        }
        secondary={
          <React.Fragment>
            <Typography>{title}</Typography>
            <Typography
              component="span"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="span" variant="body2" color="text.primary">
                {blogText ? <p>{text}</p> : <p>{text.slice(0, 30) + "..."}</p>}
              </Typography>
              <Button variant="contained" onClick={handleOnClick}>
                {showText ? "LESS" : "MORE"}
              </Button>
            </Typography>
            <Typography sx={{ alignItems: "flex-start" }} component="span">
              {username}
            </Typography>
            <Divider variant="inset" component="span" />
          </React.Fragment>
        }
      ></ListItemText>
    </>
  );
};
