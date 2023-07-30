function Button({ onClickHandler, value, title }) {
  return (
    <button className="btns" onClick={() => onClickHandler(value)}>
      {title}
    </button>
  );
}

export default Button;
