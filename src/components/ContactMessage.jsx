function ContactMessage({ children, errorMessage, id }) {
  function handleValidation(el) {
    el.ariaInvalid = !el.value;
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{children}</label>
      <textarea
        required
        id={id}
        name={id}
        aria-invalid="false"
        aria-autocomplete="false"
        aria-errormessage={`error ${id}`}
        onBlur={(e) => handleValidation(e.target)}
        className="h-[12rem]"
      />
      <span className="err-msg" id={`error ${id}`}>
        {errorMessage}
      </span>
    </div>
  );
}

export default ContactMessage;
