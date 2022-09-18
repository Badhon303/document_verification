import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const SubSidebar = ({ icon, title, submenu }) => {
  // style={{ display: "none" }} sidebar-toggle { transform: rotate( -180deg );}
  const [show, setShow] = useState(false)
  return (
    <li className={show ? "open" : ""}>
      <NavLink onClick={() => setShow(!show)} to='#'>
        {icon}
        {title}
        <i className='fas fa-chevron-right dropdown-icon'></i>
        {/* {shwo && (document.getElementById("menu-toggle").style.rotate = (45))}  */}
        {/* {!show ? (
          <i className="fas fa-chevron-right dropdown-icon"></i>
        ) : (
          <i className="fas fa-chevron-down dropdown-icon"></i>
        )} */}
      </NavLink>
      {show && (
        <ul>
          {submenu.map((elem) => (
            <li key={elem.name}>
              <NavLink to={elem.path}>
                <i className='far fa-circle'></i>
                {elem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default SubSidebar
