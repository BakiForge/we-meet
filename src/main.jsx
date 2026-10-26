import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Auth from './pages/Auth.jsx'
import App from './App.jsx'
import AuthProvider from './context/AuthContext.jsx'
import { Navbar } from './components/Navbar.jsx'
import './index.css'
import Profile from './pages/Profile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
