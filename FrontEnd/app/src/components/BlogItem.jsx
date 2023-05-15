import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export const BlogItem = ({onClick}) => {
  const text = " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.…"
  const shortText = text.slice(0, 50) + '...'

  return (
    <>
      <ListItemText
        primary="Pavadinimas"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Lorem Ipsum
            </Typography>
            {shortText}
          </React.Fragment>
        }
      />
      <Button variant="contained" onClick={onClick}>More</Button>
    </>
  );
};
