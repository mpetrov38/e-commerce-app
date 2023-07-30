import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Colors.css';

function Colors({ handleRadioChange }) {
  return (
    <Form.Group>
      <Form.Label><h2>Color</h2></Form.Label>
      <Input handleRadioChange={handleRadioChange} value="" title="All" name="color" />
      <Input handleRadioChange={handleRadioChange} value="black" title="Black" name="color" />
      <Input handleRadioChange={handleRadioChange} value="blue" title="Blue" name="color" />
      <Input handleRadioChange={handleRadioChange} value="red" title="Red" name="color" />
      <Input handleRadioChange={handleRadioChange} value="green" title="Green" name="color" />
      <Input handleRadioChange={handleRadioChange} value="white" title="White" name="color" />
    </Form.Group>
  )
}

export default Colors;