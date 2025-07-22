import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import copyright from '../../assets/c.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift cards</li>
           <li>Media Centre</li>
            <li>Investor relations</li>
             <li>jobs</li>
              <li>terms of use</li>
               <li>privacy</li>
                <li>legal notice</li>
                 <li>cookie preference</li>
                  <li>corporate informations</li>
                   <li>contach us</li>
        </ul>
        <p className='copyright-text'><img src={copyright} className='copy' alt="" />1997-2025 Netflix,inc.</p>

      </div>
      
    
  )
}

export default Footer
