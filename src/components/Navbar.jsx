import React from 'react'
import './Navbar.scss'
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLibrary } from 'react-icons/bi';
import { MdAddBox } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BiGlobe } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="warpar">
        <div className="logobar">
          <img src="./public/logo.png" className='logo' alt="Spotify" />
          <span className='logotext'>Spotify</span>
        </div>

        <div className="icon">
          <nav>
            <ul>
              <li><AiFillHome className='icons'/> <a href=""> Home</a></li>
              <li><AiOutlineSearch className='icons'/><a href=""> Search</a></li>
              <li><BiLibrary className='icons'/><a href=""> Your Library</a></li>
            </ul>
          </nav>
          <div className="secIcon">
          <li><MdAddBox className='icons'/> <a href=""> Create Playlist</a></li>
          <li><FcLike className='icons'/> <a href=""> Liked Songs</a></li>
          </div>
        </div>

        <footer>
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
          <p>Accessibility</p>
          <p>Cookies</p>
        </footer>
        <button className='globleButton'><BiGlobe className='gloIcon'/> English</button>
      </div>
    </div>
  )
}
