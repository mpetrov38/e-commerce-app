import './Input.css';
import { Form } from "react-bootstrap";

function Input({ handleRadioChange, value, title, name ,color}) {
  return (
    <Form.Check 
      custom
      type="radio"
      id={`custom-${name}-${value}`}
      label={title}
      value={value}
      onChange={handleRadioChange}
      name={name}
    />
  )
}

export default Input;
