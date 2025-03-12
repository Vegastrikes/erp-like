import './App.css'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './layouts/MainLayout'

import { BrowserRouter, Route, Routes } from 'react-router'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='' element={<MainLayout userOnline={false}/>}>
          <Route path='' element={<Welcome />}></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<MainLayout userOnline={true}/>}>
            <Route path='' element={<Dashboard />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}