import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Category.css';

function Category({handleRadioChange}) {
  return (
    <Form.Group>
      <Form.Label><h2>Category</h2></Form.Label>
      <Input handleRadioChange={handleRadioChange} value="" title="All" name="category" />
      <Input handleRadioChange={handleRadioChange} value="sneakers" title="Sneakers" name="category" />
      <Input handleRadioChange={handleRadioChange} value="flats" title="Flats" name="category" />
      <Input handleRadioChange={handleRadioChange} value="sandals" title="Sandals" name="category" />
      <Input handleRadioChange={handleRadioChange} value="heels" title="Heels" name="category" />
    </Form.Group>
  )
}

export default Category;