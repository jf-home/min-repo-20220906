import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBBtn, MDBCollapse, MDBContainer } from 'mdbreact'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons'

export default class CollapsePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapseID: '',
    }
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }))
  }

  render() {
    const platforms = this.props.data
    return (
     <section className="bg-light-blue">
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="12">
              {platforms.map(({ node }, index) => (
                <div key={index}>
                  
                  <MDBRow className="mb-5">
                    <MDBCol lg="10">
                      <h4 className="font-alt font-w-700 letter-spacing-1 mb-3 text-xs-large text-large">
                        {node.frontmatter.platformname}
                      </h4>
                      <p className="mb-0">{node.frontmatter.platformdescription}</p>
                    </MDBCol>
                    <MDBCol lg="2" bottom>
                      <MDBBtn
                        onClick={this.toggleCollapse(
                          node.frontmatter.platformname
                        )}
                        className="btn btn-md btn-mdb-color"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                        View
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                  

                  <MDBCollapse
                    className="mt-4 mb-5"
                    id={node.frontmatter.platformname}
                    isOpen={this.state.collapseID}
                  >
                    <MDBRow>
                      {node.frontmatter.related.map((relates, index) => (
                        <MDBCol lg="4" key={index}>
                          <p className="font-w-400 text medium">
                            <Link to={relates.link} className="effect">
                              {relates.name}
                            </Link>
                          </p>
                        </MDBCol>
                      ))}
                    </MDBRow>
                  </MDBCollapse>
                </div>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </section>
      
    )
  }
}