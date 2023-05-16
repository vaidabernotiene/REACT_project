// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BlogList } from "./components/BlogList";
import { NewBlog } from "./components/NewBlog";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add" element={<NewBlog />} />
      </Routes>
    </>
  );
}

export default App;
