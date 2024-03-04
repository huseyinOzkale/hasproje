import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Bar from './components/Bar/Bar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <div>
      <Navbar/>
      <Footer/>
   </div>
)
