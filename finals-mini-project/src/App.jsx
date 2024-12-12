import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, Contact, Products, NotFound, Product, ComProfile, CompanyRes, Devs,DevPage, Feedback } from './Pages'
import { Header, Footer, AnimationBG } from './Components'
import Mission from './Pages/Mission'
function App() {
  
  return (
    <>
      <div className="overlay">
        <div className="scanline-overlay"></div>
      </div>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/*' element = {<NotFound/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path='/Devs/*' >
            <Route index element={<DevPage/>}/>
            <Route path=':devID' element={<Devs/>}/>
          </Route>
          <Route path='/CompanyProfile/*'>
            <Route index  element={<ComProfile/>}/>
            <Route path=':resumeID/' element={<CompanyRes/>}/>
          </Route>
          <Route path='/Products/*'>
            <Route index element={<Products/>}/>
            <Route path=':productID/*' element={<Product/>}/>
          </Route>
          <Route path='/Mission-Vision' element={<Mission/>}></Route>
        </Routes>
      </main>
      <Footer/>
      <AnimationBG/>
      
    </>
  )
}

export default App
