function ContactConsent() {
  return (
    <fieldset>
      <input
        type="checkbox"
        id="consent"
        name="consent-auth"
        aria-autocomplete="false"
      />
      <label htmlFor="consent">I consent to being contacted by the team</label>
      <span>To submit this form, please consent to being contacted</span>
    </fieldset>
  );
}

export default ContactConsent;
