import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Colors.css';

function Colors({ handleRadioChange, selectedCategory }) {
  return (
    <Form.Group>
      <Form.Label><h2>Color</h2></Form.Label>
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="" title="All" name="color" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="black" title="Black" name="color" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="blue" title="Blue" name="color" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="red" title="Red" name="color" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="green" title="Green" name="color" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="white" title="White" name="color" />
    </Form.Group>
  )
}

export default Colors;