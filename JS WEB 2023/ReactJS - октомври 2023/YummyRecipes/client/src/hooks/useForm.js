import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    values.ingredients = initialValues.ingredients;
    console.log(values.ingredients);
    console.log(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
