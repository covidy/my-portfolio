import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from 'react-social-icons'
export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="infline-flex items-center py-4 px-3 mr-2 text-red-400 hover:text-green-100 text-2xl font-bold cursive tracking-widest"
          >
            Vangeliste
          </NavLink>
          <NavLink
            to="/post"
            className="infline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="infline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="infline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me !
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-6">
          <SocialIcon
            url="https://www.instagram.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 15, width:15 }}
          />
          <SocialIcon
            url="https://www.facebook.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 15, width: 15 }}
          />
          <SocialIcon
            url="https://www.youtube.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 15, width: 15 }}
          />
        </div>
      </div>
    </header>
  )
}