import { faFacebook, faFacebookMessenger, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function StayInTouch() {
  return (
    <div style={{
      backgroundImage: 'url(/imgs/mask.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 400,
      backgroundColor: '#F8E1DB',
      display: 'flex',
    }}>
      <div style={{
        flex: 1
      }}>
        <img style={{
          marginLeft: 30
        }} src="/imgs/homeicon.png" alt="" />
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        color: '#8D8D8D'
      }}>
        <h3 style={{
          fontSize: 30,
          fontWeight: 600,
        }}>Let's stay in touch</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil quibusdam atque quod, labore eligendi.</p>
        <div style={{
          display: 'flex',
          gap: 20,
          marginTop: 10,
        }}>
          <div>
            <p style={{
              fontWeight: 600,
              marginBottom: 20
            }}>Download our App</p>
            <img src="/imgs/download-on-the-app-store-apple-1.png" alt="" />
            <img src="/imgs/google-play-badge-1.png" alt="" />
          </div>
          <div>
            <p style={{
              fontWeight: 600,
              marginBottom: 20,
            }}>Follow us</p>
            <div style={{
              display: 'flex',
              gap: 5
            }}>
              <FontAwesomeIcon style={{
                color: '#E76F51'
              }} icon={faFacebook} />
              <FontAwesomeIcon style={{
                color: '#E76F51'
              }} icon={faFacebookMessenger} />
              <FontAwesomeIcon style={{
                color: '#E76F51'
              }} icon={faYoutube} />
              <FontAwesomeIcon style={{
                color: '#E76F51'
              }} icon={faTiktok} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StayInTouch