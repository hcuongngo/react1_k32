import React from 'react'

function Header() {
  return (
    <div style={{
      padding: '10px 50px',
      backgroundColor: '#F8E1DB'
    }}>
      <img src="/imgs/logoicon.png" alt="" />
      <div style={{
        display: 'flex',
        gap: 30
      }}>
        <p>Home</p>
        <p>Search</p>
        <p>Destination</p>
        <p>Events</p>
        <p>Gallery</p>
        <p>Contact us</p>
      </div>
    </div>
  )
}

export default Header