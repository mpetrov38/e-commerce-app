import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Category.css';

function Category({handleRadioChange}) {
  return (
    <Form.Group>
      <Form.Label><h2>Category</h2></Form.Label>
      <Input handleRadioChange={handleRadioChange} value="" title="All" name="category" />
      <Input handleRadioChange={handleRadioChange} value="sneakers" title="Sneakers" name="Sneakers" />
      <Input handleRadioChange={handleRadioChange} value="flats" title="Flats" name="Flats" />
      <Input handleRadioChange={handleRadioChange} value="sandals" title="Sandals" name="Sandals" />
      <Input handleRadioChange={handleRadioChange} value="heels" title="Heels" name="Heels" />
    </Form.Group>
  )
}

export default Category;