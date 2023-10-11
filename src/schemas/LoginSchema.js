
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup.string().email("This field must be valid email!"),
  password: yup.string().min(6 ,"Minimal length must be 6!"),
});

export default LoginSchema