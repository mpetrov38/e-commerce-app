import { Form } from "react-bootstrap";
import Input from '../../Input';
import './Category.css';

function Category({ handleRadioChange, selectedCategory }) {
  return (
    <Form.Group>
      <Form.Label><h2>Category</h2></Form.Label>
      <Input
        handleRadioChange={handleRadioChange}
        selectedCategory={selectedCategory}
        value="sneakers" 
        title="Sneakers"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        selectedCategory={selectedCategory}
        value="flats" 
        title="Flats"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        selectedCategory={selectedCategory}
        value="sandals" 
        title="Sandals"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        selectedCategory={selectedCategory}
        value="heels" 
        title="Heels"
        name="category"
      />
    </Form.Group>
  )
}

export default Category;