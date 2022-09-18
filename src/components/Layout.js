import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

const Layout = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <section className={sidebar ? "sidebar-hidden" : null}>
      <div className='page-container'>
        <Header ToggleClass={() => setSidebar(!sidebar)} />
        <SideBar />
        <div className='page-content'>
          <div className='main-wrapper'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
