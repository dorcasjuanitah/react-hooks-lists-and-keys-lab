import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <div>
  <nav>
    <a href="#" key = {links} >home</a>
    <a key = {links} href="#">about</a>
    <a key = {links} href="#">projects</a>
    </nav> 
    </div>)
}

export default NavBar;
