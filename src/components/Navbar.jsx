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
            <Link to="/hookUseCallback">useCallback</Link>
            <Link to="/hookUseRef">useRef</Link>
            <Link to="/hookUseContext">useContext</Link>
            <Link to="/hookUseReducer">useReducer</Link>
        </div>
    </nav>
  )
}

export default Navbar