import { NavLink } from "react-router-dom"


function NavigateLinks() {
  return<>

  <div style={{border:"2px solid red"}}>
    <ul style={{display:"flex",listStyle:"none"}}>
      <li><NavLink to="./skills">Skills</NavLink></li>
      <li><NavLink to="./work" >Work</NavLink></li>
      <li><NavLink to="./blogs">Blogs</NavLink></li>
      <li><NavLink to="./about">About</NavLink></li>


    </ul>
    </div>
  


  </>
}

export default NavigateLinks