import { Button, Form, InputGroup, Modal, Row } from "react-bootstrap"


import "./Home.css"
import { useEffect, useState } from "react"
import request from "../constants/request"
import Cards from "../components/Card"

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search ,setSearch] = useState("")

  const [allCategories , setAllCategories] = useState([])


  useEffect(()=>{
    async function getCategories(){
      try {
        let {data} = await request(`category?name=${search}` )
        setAllCategories(data);
        console.log("a");
      } catch (err) {
        console.log(err);
      }
    }
    getCategories()
  } , [search])


  return (
    <main className="home-main">
      <div className="container">
        <section className="py-3 w-50 mx-auto" id="search">
        <InputGroup className="mb-3">
          <Form.Control
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search..."
          />
          <Button variant="primary" onClick={handleShow}>
            Add category
          </Button>
        </InputGroup>
        </section>
        <section id="categories">
          {
            allCategories.map((category)=>{
              return <Cards {...category} key={category.createdAt} />
            })
          }
        </section>
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Row className="mb-3">
              <Form.Group
                controlId="email"
                className="position-relative mb-3"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  className="mb-1"
                  name="email"
                />
              </Form.Group>
              <Form.Group
                controlId="password"
                className="position-relative mb-3"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  className="mb-1"
                  name="password"
                />
              </Form.Group>
            </Row>
            <Button className="w-100" type="submit">Login</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add category
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  )
}

export default Home