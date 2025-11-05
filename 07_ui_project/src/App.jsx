
import Navbar from './components/navbar.jsx'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'

const App = () => {
  const arr = [
    {
      tag: "Capital Raised",
      value: "115k"
    },
    {
      tag: "Happy Customers",
      value: "70k"
    },
    {
      tag: "Property Options",
      value: "47k"
    }
  ]

  return (
    <>
    <Navbar />
    <div className='flex'>
      <Section1 data={arr} />
      <Section2 />   
    </div>
    </ >
  )
}

export default App