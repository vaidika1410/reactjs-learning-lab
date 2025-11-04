
import Navbar from './components/navbar.jsx'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'

const App = () => {
  

  return (
    <>
    <Navbar />
    <div className='flex'>
      <Section1 />
      <Section2 />   
    </div>
    </ >
  )
}

export default App