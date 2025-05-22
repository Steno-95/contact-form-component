import ContactConsent from "./ContactConsent";
import ContactEmail from "./ContactEmail";
import ContactInput from "./ContactInput";
import ContactMessage from "./ContactMessage";
import ContactQuery from "./ContactQuery";
import ContactSubmit from "./ContactSubmit";

function ContactForm({ handleSubmit, error, onError }) {
  return (
    <form
      className="text-(--grey-darker) flex flex-col"
      onSubmit={handleSubmit}
      aria-live="polite"
    >
      <fieldset className="flex flex-col md:flex-row md:gap-3">
        <ContactInput errorMessage={"This field is required"} id={"first-name"}>
          First Name
        </ContactInput>
        <ContactInput errorMessage={"This field is required"} id={"last-name"}>
          Last Name
        </ContactInput>
      </fieldset>
      <ContactEmail id="email">Email Address</ContactEmail>
      <fieldset>
        <legend className="pb-4 font-bold">
          Query Type <span className="text-(--primary-green)">*</span>
        </legend>
        <ContactQuery onError={onError} error={error} />
        <span
          className={`err-msg ${error.query ? "show" : ""}`}
          id="error-query"
        >
          Please select a query type
        </span>
      </fieldset>
      <ContactMessage errorMessage={"This field is required"} id={"message"}>
        Message
      </ContactMessage>
      <ContactConsent onError={onError} error={error} />
      <ContactSubmit />
    </form>
  );
}

export default ContactForm;
