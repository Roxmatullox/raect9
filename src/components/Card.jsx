import PropTypes from "prop-types";

import { Button, Card } from "react-bootstrap"

const Cards = ({avatar , name}) => {
  return (
    <Card >
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Button variant="primary">See products</Button>
    </Card.Body>
  </Card>
  )
}

Cards.propTypes = {
  name: PropTypes.string ,
  avatar: PropTypes.string ,
}

export default Cards