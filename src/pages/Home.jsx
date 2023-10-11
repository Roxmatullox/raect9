import { Button, Form, InputGroup, Modal, Row } from "react-bootstrap"

import { yupResolver } from "@hookform/resolvers/yup"

import "./Home.css"
import { useEffect, useState } from "react"
import request from "../constants/request"
import Cards from "../components/Card"
import { useForm } from "react-hook-form"
import CategorySchema from "../schemas/categorySchema"

const Home = () => {

  const [callback , setCallback] = useState(false)
  const [selected , setSelected] = useState(null)
  
  const refresh = () =>{
    setCallback(!callback)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSelected(null)
    reset({name:"" , avatar:""})
    setShow(true)
  };

  const { register, handleSubmit ,formState: { errors },reset } = useForm({
    resolver : yupResolver(CategorySchema)
  })

  const onSubmit = async (data) =>{ 
    try {
      if (selected === null) {
        await request.post("category" , data)
      } else {
        await request.put(`category/${selected}` , data)
      }
      handleClose()
      refresh()
    } catch (err) {
      console.log(err);
    }
  }

  const deleteCard = async (id) =>{
    let confirmDelete = confirm(`${id} shu id lik category ochirilsinmi?`)
    if (confirmDelete) {
      await request.delete(`category/${id}`)
      refresh()
    }
  }

  const editCategory = async (id) =>{
    try {
      setSelected(id)
      setShow(true)
      const {data} = await request.get(`category/${id}`)
      reset(data)
    } catch (err) {
      console.log(err);
    }
  }

  

  const [show, setShow] = useState(false);

  const [search ,setSearch] = useState("")

  const [allCategories , setAllCategories] = useState([])




  useEffect(()=>{
    async function getCategories(){
      try {
        let {data} = await request(`category?name=${search}` )
        setAllCategories(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories()
  } , [search , callback])


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
              return <Cards deleteCard={deleteCard} editCategory={editCategory} {...category} key={category.id} />
            })
          }
        </section>
      </div>
      

      <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>            
            {selected === null ? "Add" : "Save"} category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className="mb-3">
              <Form.Group
                controlId="email"
                className="position-relative mb-3"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                {...register("name")}
                  className="mb-1"
                />
              <p className="text-danger">{errors.name?.message}</p>
              </Form.Group>
              <Form.Group
                controlId="password"
                className="position-relative mb-3"
              >
                <Form.Label>Image url</Form.Label>
                <Form.Control
                {...register("avatar")}
                  className="mb-1"
                />
                <p className="text-danger">{errors.avatar?.message}</p>
              </Form.Group>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            {selected === null ? "Add" : "Save"} category
          </Button>
        </Modal.Footer>
      </Form>
      </Modal>
    </main>
  )
}

export default Home