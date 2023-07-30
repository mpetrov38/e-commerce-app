function Input({ handleRadioChange, value, title, name, color }) {
  return (
    <label className='sidebar-label'>
      <input onChange={handleRadioChange} type='radio' value={value} name={name} />
      <span className='checkmark' style={{ backgroundColor: color }}></span>{title}
    </label>
  )
}
export default Input;
