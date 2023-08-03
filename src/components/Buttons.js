function Button({ onClickHandler, value, title, name }) {
  return (
    <button className="btns btn-secondary" onClick={() => onClickHandler({ [name]: value })}>
      {title}
    </button>
  );
}

export default Button;