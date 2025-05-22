function ContactQuery({ onError, error }) {
  return (
    <div className="flex flex-col gap-3 w-full md:flex-row">
      <label
        htmlFor="query-1"
        className="radio-label font-normal "
        aria-label="general enquiry"
      >
        <input
          id="query-1"
          name="query"
          type="radio"
          value="General Enquiry"
          aria-live="polite"
          aria-describedby="error-query"
          onClick={() => onError({ ...error, query: false })}
        />
        General Enquiry
      </label>
      <label
        htmlFor="query-2"
        className="radio-label font-normal"
        aria-label="support request"
      >
        <input
          id="query-2"
          name="query"
          type="radio"
          value="Support Request"
          aria-live="polite"
          aria-describedby="error-query"
          onClick={() => onError({ ...error, query: false })}
        />
        Support Request
      </label>
    </div>
  );
}

export default ContactQuery;
