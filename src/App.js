import React from 'react';
import product from './product';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Description';

const App = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <h1><Price/></h1>
        
        </Card.Text>
       
      </Card.Body>
      <h2><Description/></h2>
    </Card>
    </div>
  )
}

export default App
