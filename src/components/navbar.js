import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBDropdown, 
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

class NavBarPage extends Component {
  state = {
    collapsed: false,
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  componentDidMount() {
    const str = window.location.pathname.substr(
      1,
      window.location.pathname.length - 1
    )
    const len = str.indexOf('/')
    this.setState({
      parentNav: len < 0 ? str : str.substr(0, len),
    })
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    )

    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: 'nav-link active' } : {}
    }

    const isPartiallyActive = ({ isPartiallyCurrent }) => {
      return isPartiallyCurrent ? { className: 'nav-link active' } : {}
    }

    return (
      <div>
        <MDBNavbar
          color="top-nav-collapse"
          dark
          expand="lg"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="Company logo"
                  title="Logo"
                  height="32"
                />
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              aria-label="Mobile Navigation Button"
              onClick={this.handleTogglerClick}
            />
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                <Link to="/about/about-me/" getProps={isPartiallyActive} className="nav-link">
                    Page 1
                  </Link>
                </MDBNavItem>

                <MDBNavItem>
                <Link to="/" className="nav-link d-none d-lg-block" aria-label="Search">
                    <FontAwesomeIcon icon={faSearch} className="cms-fa1" />
                  </Link>
                  <Link to="/" className="nav-link d-lg-none d-sm-block" aria-label="Search">
                    Search
                  </Link>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapsed && overlay}
      </div>
    )
  }
}

export default NavBarPage