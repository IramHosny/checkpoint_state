import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div> 
        <Nav className="Navbarr" variant="tabs" defaultActiveKey="/home">
      <Nav.Item style={{fontSize:"20px"}}>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{fontSize:"20px"}}>
        <Nav.Link eventKey="link-1"> Products </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{fontSize:"20px"}}>
        <Nav.Link eventKey="disabled" disabled>
          Offers
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Header