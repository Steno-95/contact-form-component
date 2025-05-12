function ContactConsent({ error, onError }) {
  return (
    <fieldset>
      <div className="flex items-center gap-4 ">
        <input
          type="checkbox"
          id="consent"
          name="consentAuth"
          aria-autocomplete="false"
          className="accent-(--primary-green) cursor-pointer peer"
          onChange={() => onError({ ...error, consentAuth: false })}
        />
        <label
          htmlFor="consent"
          className="cursor-pointer peer-focus:text-(--primary-green) font-normal"
        >
          I consent to being contacted by the team
        </label>
      </div>
      <span className={`err-msg ${error.consentAuth ? "show" : ""}`}>
        To submit this form, please consent to being contacted
      </span>
    </fieldset>
  );
}

export default ContactConsent;
