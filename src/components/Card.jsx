import PropTypes from "prop-types";

import { Button, Card } from "react-bootstrap"

const Cards = ({avatar , name , id , deleteCard , editCategory}) => {
  return (
    <Card >
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
    <Button variant="primary">See products</Button>
    <Button onClick={()=>deleteCard(id)} variant="danger">Delete</Button>
    <Button onClick={()=>editCategory(id)} variant="warning">Edit</Button>
  </Card>
  )
}

Cards.propTypes = {
  name: PropTypes.string ,
  id : PropTypes.string ,
  avatar: PropTypes.string ,
  deleteCard : PropTypes.func,
  editCategory : PropTypes.func
}

export default Cards