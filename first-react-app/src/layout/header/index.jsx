import React from 'react'
import "./index.scss"
import { TbAlienFilled } from "react-icons/tb";
function Header() {
  return (
  <header>
    <div className="container">
        <div className="header">
            <div className="logo">
                <h1><TbAlienFilled /> Electrotip</h1>
            </div>
            <div className="hom">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  </header>
  )
}

export default Header
