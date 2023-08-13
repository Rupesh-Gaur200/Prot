import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'


import Navbar from "./components/Navbar"

function App() {
     
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Skills' element={<Skills/>}/>
       <Route path='/About' element={<About/>}/>

    </Route>
  ))



  return (
    <>
      <RouterProvider router={router}/> 
    
    </>
  )
}

export default App
