import { NavLink } from "react-router-dom";
import { AppBar, Container, Toolbar } from "@mui/material";
import logo from "../../src/logo.png";

export const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "lightgrey" }}>
      <Toolbar><NavLink
            href="#"
            to="/"
            style={{ margin: "8px",display: "flex", justifyContent: "center", alignItems: 'center'}}
          >
            <img
          src={logo}
          alt="Logo"
          style={{ width: "50%", height: "50%"}}
        />
          </NavLink>
        
        <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <NavLink
            href="#"
            to="/add"
            style={{ margin: "8px", textDecoration: "none" }}
          >
            New Post
          </NavLink>
          
        </Container>
      </Toolbar>
    </AppBar>
  );
};
