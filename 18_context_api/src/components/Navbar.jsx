import { useContext } from 'react'
import {Link} from 'react-router-dom'
import {ThemeDataContext} from '../context/ThemeContext'

const Navbar = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)

  const themeBtn = () => {
    setTheme('dark')
  }

  return (
    <div className='absolute top-0 w-full p-6 bg-white text-2xl flex justify-between align-center'>
        <div className="nav-left">
            <Link to='/'>EXIA</Link>
        </div>
        <div className="nav-right flex gap-8 capitalize">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/services'>Services</Link>
                <h1 onClick={themeBtn} className='px-5 rounded cursor-pointer text-xl font-semibold bg-cyan-300'>{theme}</h1>
        </div>
    </div>
  )
}

export default Navbar