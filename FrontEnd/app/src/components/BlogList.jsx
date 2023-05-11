import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { BlogItem } from "./BlogItem";
import { useEffect, useState, useContext, useMemo } from "react";

export const BlogList = () => {

    const handleOnClick =()=>{
        console.log('Mane paspaude')
    }
  return ( 
    <>
     <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'purple' }}>A</Avatar>
        </ListItemAvatar>
        <BlogItem />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'purple' }}>B</Avatar>
        </ListItemAvatar>
        <BlogItem onClick={handleOnClick}/>
      </ListItem>
    </List>
    </>
  );
};
