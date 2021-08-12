import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { truncateText } from '../utils'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ height: 400 }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={product.image} 
          variant='top'
          style={{
            height: 200,
          }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{truncateText(product.name)}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
