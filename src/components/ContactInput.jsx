function ContactInput({ children, errorMessage, id }) {
  function handleValidation(el) {
    el.ariaInvalid = !el.value;
  }
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        required
        id={id}
        name={id}
        aria-invalid="false"
        autoComplete="name"
        aria-live="polite"
        aria-autocomplete="both"
        aria-describedby={`error-${id}`}
        aria-errormessage={`error-${id}`}
        onBlur={(e) => handleValidation(e.target)}
      />
      <span className="err-msg" id={`error-${id}`} aria-label={errorMessage}>
        {errorMessage}
      </span>
    </div>
  );
}

export default ContactInput;
