
import { Button, Form, Row } from "react-bootstrap"
import "./Login.css"
import { useFormik } from "formik";
import LoginSchema from "../schemas/LoginSchema";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({setLogin}) => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema:LoginSchema ,

    onSubmit: values => {
      localStorage.setItem("Login" , values.email)
      setLogin(true)
      navigate("/")
    },
  });

  return (
    <main id="login">
      <div className="container login">
        <div className="login-page w-50 mx-auto">
          <h2 className="mb-2 text-center">Welcome !</h2>
          <Form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email ? <p className="text-danger">{formik.errors.email}</p> : null}
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
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password ? <p className="text-danger">{formik.errors.password}</p> : null}
              </Form.Group>
            </Row>
            <Button className="w-100" type="submit">Login</Button>
          </Form>
        </div>
      </div>
    </main>
  )
}

Login.propTypes = {
  setLogin: PropTypes.func
}

export default Login