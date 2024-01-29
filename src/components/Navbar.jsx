import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to="/">Home</Link>
            <Link to="/hookUseState">useState</Link>
            <Link to="/hookUseEffect">useEffect</Link>
            <Link to="/hookUseMemo">useMemo</Link>
        </div>
    </nav>
  )
}

export default Navbar