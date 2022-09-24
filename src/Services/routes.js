import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "../Pages/Home/home.jsx"
import {Characters} from "../Pages/Characters/characters.jsx"
import {Error} from "../Pages/Error/error.jsx"
import {Students} from "../Pages/Students/students.jsx"
import {Staff} from "../Pages/Staff/staff.jsx"

export default function Rotas(){

  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/characters" element={<Characters />}/>
          <Route path="/staff" element={<Staff />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </>
  )
}