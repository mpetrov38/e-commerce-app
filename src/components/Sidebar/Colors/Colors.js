import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Colors.css';

function Colors({ handleRadioChange }) {
  return (
    <Form.Group>
      <Form.Label><h2>Color</h2></Form.Label>
      <Input handleRadioChange={handleRadioChange} value="" title="All" name="color" />
      <Input handleRadioChange={handleRadioChange} value="black" title="Black" name="Black" />
      <Input handleRadioChange={handleRadioChange} value="blue" title="Blue" name="Blue" />
      <Input handleRadioChange={handleRadioChange} value="red" title="Red" name="Red" />
      <Input handleRadioChange={handleRadioChange} value="green" title="Green" name="Green" />
      <Input handleRadioChange={handleRadioChange} value="white" title="White" name="White" />
    </Form.Group>
  )
}

export default Colors;