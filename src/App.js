import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/Post' element={<Post />} />
        <Route  path='/Project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

