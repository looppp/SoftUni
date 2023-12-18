export default function UserValidation(values) {
  const errors = {};

  const password_check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const email_check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (values.email === "") {
    errors.email = "Email is required";
  }
  if (email_check.test(values.email)) {
    errors.email = "Email is not correct";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  }
  if (password_check.test(values.password)) {
    errors.password =
      "Password has to have 1 capital letter and 1 number  and it needs to be atleats 8 characters long";
  }

  return errors;
}
