import * as yup from "yup";

const CategorySchema = yup.object().shape({
  name: yup.string("This field must be valid name!"),
  avatar: yup.string().url("This field must be valid url!"),
});

export default CategorySchema