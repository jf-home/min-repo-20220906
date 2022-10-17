import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const today = new Date();

const Footer = () => {
  return (
    <MDBFooter className="ug-footer">
      <MDBContainer>
        <MDBRow className="pt-80 pb-5">
          <MDBCol lg="3" md="6" className="b-3 footer-col">
            <h4>Useful links</h4>
            <p className="font-w-400 letter-spacing-1 text-gray-dark text-small pb-3">
              <Link to="/about/about-me/">About me</Link>
            </p>       
          </MDBCol>

          <hr className="clearfix w-100 d-lg-none pb-3" />

          <MDBCol lg="3" md="6" className="b-3 footer-col">
            <h4>Legal</h4>
            <p className="font-w-400 letter-spacing-1 text-gray-dark text-small pb-3">
              <Link to="/legal-notice/">Legal</Link>
            </p>                
          </MDBCol>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <MDBCol lg="3" md="6" className="b-3 footer-col">
            <h4>Social media</h4>
            <ul className="list-inline">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" rel="noopener">
                <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x mx-2 mr-md-2 cms-fa2"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" aria-label="Twitter" rel="noopener">
                <FontAwesomeIcon icon={faTwitter} className="fa-2x mx-2 mr-md-2 cms-fa2"/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" rel="noopener">
                <FontAwesomeIcon icon={faFacebookF} className="fa-2x mx-2 mr-md-2 cms-fa2"/>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube" rel="noopener">
                <FontAwesomeIcon icon={faYoutube} className="fa-2x mx-2 mr-md-2 cms-fa2"/>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>

        <MDBRow className="align-items-center pb-60">
          <MDBCol className="text-left">
            <span
              className="font-w-700 letter-spacing-1 text-white text-extra-small text-uppercase"
            >
              © {today.getFullYear()} My Company Limited 
            </span>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer