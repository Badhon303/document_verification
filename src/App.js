import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import SignUpScreen from "./screens/SignUpScreen"
import Layout from "./components/Layout"
import UsersScreen from "./screens/UsersScreen"
import Verify from "./screens/Verify"
import Certificates from "./screens/Certificates"
import Publish from "./screens/Publish"
import Certificate from "./screens/Certificate"
import Test from "./screens/Test"
import { ProtectedRoute, PublicRoute } from "./utils/ProtectedRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signup' element={<SignUpScreen />} />
        <Route path='/test' element={<Test />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/' element={<Layout />}>
            <Route path='users' element={<UsersScreen />} />
            <Route path='certificates' element={<Certificates />} />
            <Route path='publish' element={<Publish />} />
          </Route>
          <Route path='certificate/:id' element={<Certificate />} />
        </Route>
        <Route path='/verify/:id' element={<Verify />} />
        <Route path='/' element={<PublicRoute />}>
          {/* <Route path='/' element={<Layout />}>
            <Route path='verify/:id' element={<Verify />} />
          </Route> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
