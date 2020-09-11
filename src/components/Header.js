import React from 'react'
import './../App.css'

function Header() {
    return (
        <header style={headerStyle}>
            <h2><span className="con">Con's</span> Weather App</h2>
        </header>
    )
}
//<Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    paddingBottom: '20px'
}

export default Header