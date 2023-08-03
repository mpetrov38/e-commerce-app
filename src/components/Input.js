import './Input.css';
import { Form } from "react-bootstrap";

function Input({ handleRadioChange, value, title, name, selectedCategory }) {
  return (
    <Form.Check
      custom
      type="radio"
      id={`custom-${name}-${value}`}
      label={title}
      value={value}
      onChange={handleRadioChange}
      name={name}
      checked={selectedCategory[name] === value}
    />
  )
}

export default Input;
