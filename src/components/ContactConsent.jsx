function ContactConsent({ error, onError }) {
  return (
    <fieldset>
      <div className="flex items-center gap-4 ">
        <input
          type="checkbox"
          id="consent"
          name="consentAuth"
          aria-live="polite"
          aria-describedby="error-consent"
          className="accent-(--primary-green) cursor-pointer peer"
          onChange={() => onError({ ...error, consentAuth: false })}
        />
        <label
          htmlFor="consent"
          className="cursor-pointer peer-focus:text-(--primary-green) font-normal py-1"
          aria-label="I consent to being contacted by the team"
        >
          I consent to being contacted by the team
        </label>
      </div>
      <span
        className={`err-msg ${error.consentAuth ? "show" : ""}`}
        id="error-consent"
      >
        To submit this form, please consent to being contacted
      </span>
    </fieldset>
  );
}

export default ContactConsent;
