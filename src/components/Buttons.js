function Button({ onClickHandler, value, title }) {
  return (
    <button className="btns btn-secondary" onClick={() => onClickHandler(value)}>
      {title}
    </button>
  );
}

export default Button;
