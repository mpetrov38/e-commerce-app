import './Colors.css';
import Input from '../../Input';

function Colors({ handleRadioChange }) {
  return (
    <>
      <div className='ml'>
        <h2 className="sidebar-title color-title">Color</h2>
        <label className='sidebar-label'>
          <input type='radio' onChange={handleRadioChange} value='' name='test2' />
          <span className='checkmark all' />All
        </label>
        <Input handleRadioChange={handleRadioChange} value='black' title='Black' name='test1' color='black' />
        <Input handleRadioChange={handleRadioChange} value='blue' title='Blue' name='test1' color='blue' />
        <Input handleRadioChange={handleRadioChange} value='red' title='Red' name='test1' color='red' />
        <Input handleRadioChange={handleRadioChange} value='green' title='Green' name='test1' color='green' />
        <label className='sidebar-label'>
          <input type='radio' onChange={handleRadioChange} value="white" name='test1' />
          <span className='checkmark' style={{ backgroundColor: "white", border: "2px solid black" }} />White
        </label>
      </div>
    </>
  )
}

export default Colors;