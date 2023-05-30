import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Navbar/Home";
import Search from '../components/Navbar/Search'
import Library from '../components/Navbar/Library'
import Playlist from '../components/Navbar/Playlist'
import Liked from '../components/Navbar/Liked'
import Erorr from '../components/Navbar/Erorr'
import Navbar from "./Navbar";

export default function Nav() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="*" element={<Erorr />} />
      </Routes>
    </BrowserRouter>
  );
}
