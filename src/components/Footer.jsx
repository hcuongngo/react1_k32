import React from 'react'

function Footer() {
  return (
    <div style={{
      marginTop: 50,
      padding: '50px 30px',
      backgroundColor: '#F8E1DB',
      borderRadius: '30px 30px 0 0',
    }}>
      <div style={{
        display: 'flex'
      }}>
        <div style={{
          width: '40%'
        }}>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, cupiditate eum soluta laudantium beatae fugit eveniet ipsam, autem officiis qui, veritatis sunt ex quidem? Hic suscipit aperiam voluptates unde distinctio?</p>
        </div>
        <div style={{
          width: '60%',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
          <div>
            <h4>Lorem, ipsum</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div>
            <h4>Lorem, ipsum</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div>
            <h4>Lorem, ipsum</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
      <p style={{
        textAlign: 'center',
        marginTop: 30,
      }}>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Footer