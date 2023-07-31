import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Price.css';

function Price({ handleRadioChange }) {
  return (
    <Form.Group>
      <Form.Label><h2>Price</h2></Form.Label>
      <Input handleRadioChange={handleRadioChange} value="" title="All" name="price" />
      <Input handleRadioChange={handleRadioChange} value="0-50" title="$0-50" name="50" />
      <Input handleRadioChange={handleRadioChange} value="50-100" title="$50-100" name="100" />
      <Input handleRadioChange={handleRadioChange} value="100-150" title="$100-150" name="150" />
      <Input handleRadioChange={handleRadioChange} value="150+" title="Over $150" name="200" />
    </Form.Group>
  )
}

export default Price;