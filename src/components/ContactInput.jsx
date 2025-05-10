function ContactInput({ children, errorMessage, id }) {
  function handleValidation(el) {
    el.ariaInvalid = !el.value;
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        required
        id={id}
        name={id}
        aria-invalid="false"
        autoComplete="name"
        aria-autocomplete="both"
        aria-errormessage={`error ${id}`}
        onBlur={(e) => handleValidation(e.target)}
      />
      <span className="err-msg" id={`error ${id}`}>
        {errorMessage}
      </span>
    </div>
  );
}

export default ContactInput;
