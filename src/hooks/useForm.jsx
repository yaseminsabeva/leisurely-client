import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "file" ? e.target?.files?.[0] : e.target.value,
    });
  };
  const reset = () => {
    setValues(initialValues);
  };
  return [values, handleChange, reset, setValues];
};
export default useForm;
