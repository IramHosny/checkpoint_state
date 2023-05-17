import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Product() {
    const [categorie,setcategorie] = useState("");
  return (
    <div className='body'>
<div className="btn11">
<button className="btn1" onClick={() => setcategorie("makeup")}> Clic here to see our makeup </button>
  { categorie=="makeup"? <div className="div1">
   <Card className="makeup" style={{ width: '60%', height:'10px' }}>
      <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5d14e8bfa505890001205e37/b74988d7-045f-4724-a5dc-5aa1d41e5d5f/liste-de-mes-dix-produits-maquillage-indispensables-d%C3%A9couverts-en-2021-pauuulette.jpg?format=1000w" />
      <Card.Body>
        <Card.Title>Makeup</Card.Title>
    
        <Button variant="primary">See more </Button>
      </Card.Body>
    </Card>
     </div> : null }
    </div>
    <div classsName="btn22">
    <button className="btn2" onClick={() => setcategorie("acc")}> Clic here to see our accessories </button>
    { categorie=="acc"? <div>
   <Card className ="accessoires" style={{ width: '70%', height:'20px' }}>
    
      <Card.Img variant="top" src="https://cms.eliza.co.uk/wp-content/uploads/2023/03/SEI_148261535.jpg?w=1024" />
      <Card.Body>
        <Card.Title>Accessories</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"> See more </Button>
      </Card.Body>
    </Card>
    </div> : null }
    </div>
    </div>
  )
}

export default Product