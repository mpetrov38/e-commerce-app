import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Price.css';

function Price({ handleRadioChange, selectedCategory }) {
  return (
    <Form.Group>
      <Form.Label><h4 className="price-title">Price</h4></Form.Label>
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="" title="All" name="price" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="0-50" title="$0-50" name="price" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="50-100" title="$50-100" name="price" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="100-150" title="$100-150" name="price" />
      <Input handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} value="150-200" title="Over $150" name="price" />
    </Form.Group>
  )
}

export default Price;