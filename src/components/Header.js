import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h2>Weather App</h2>
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