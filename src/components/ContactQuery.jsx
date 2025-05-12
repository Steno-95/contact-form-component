function ContactQuery({ onError, error }) {
  return (
    <div className="flex flex-col gap-3 w-full md:flex-row">
      <label htmlFor="query-1" className="radio-label font-normal ">
        <input
          id="query-1"
          name="query"
          type="radio"
          value="General Enquiry"
          onClick={() => onError({ ...error, query: false })}
        />
        General Enquiry
      </label>
      <label htmlFor="query-2" className="radio-label font-normal">
        <input
          id="query-2"
          name="query"
          type="radio"
          value="Support Request"
          onClick={() => onError({ ...error, query: false })}
        />
        Support Request
      </label>
    </div>
  );
}

export default ContactQuery;
