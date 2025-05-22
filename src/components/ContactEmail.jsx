import { useState } from "react";

function ContactEmail({ children, id }) {
  const [message, setMessage] = useState("");

  function handleValidation(el) {
    if (!el.value) {
      el.ariaInvalid = true;
      setMessage("This field is required");
    } else if (!el.value.includes("@")) {
      el.ariaInvalid = true;
      setMessage("Please enter a valid email address");
    } else {
      el.ariaInvalid = false;
      setMessage("");
    }
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{children}</label>
      <input
        type="email"
        required
        id={id}
        name={id}
        aria-invalid="false"
        autoComplete="email"
        aria-live="polite"
        aria-describedby={`error ${id}`}
        aria-autocomplete="inline"
        aria-errormessage={`error ${id}`}
        onBlur={(e) => handleValidation(e.target)}
      />
      <span className={`err-msg ${message ? "show" : ""}`} id={`error ${id}`}>
        {message}
      </span>
    </div>
  );
}
export default ContactEmail;
