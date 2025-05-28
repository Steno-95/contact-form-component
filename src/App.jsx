import { useEffect, useRef, useState } from "react";
import ContactForm from "./components/ContactForm";
import ModalToast from "./components/ModalToast";
import Footer from "./ui/Footer";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState({ query: false, consentAuth: false });

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data);

    if (!formValues.query || !formValues.consentAuth) {
      if (!formValues.query && !formValues.consentAuth)
        return setError({ ...error, query: true, consentAuth: true });
      !formValues.query && setError({ ...error, query: true });
      !formValues.consentAuth && setError({ ...error, consentAuth: true });
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      e.target.reset();
    }, 5000);
  }

  //Attempt at making the modal toast readable from screen reader

  const toastRef = useRef();
  useEffect(() => {
    console.log(toastRef);

    if (showToast && toastRef.current) {
      toastRef.current.focus();
    }
  }, [showToast]);

  return (
    <>
      <main className="min-h-screen bg-(--primary-light) py-5 flex flex-col items-center justify-around">
        <article
          className="bg-(--white) p-5 max-w-[20rem]
        md:max-w-[30rem]
        lg:min-w-[40rem]
        mx-auto flex flex-col gap-3 rounded-xl"
        >
          <h1 className="text-(--grey-darker) font-bold text-2xl">
            Contact Us
          </h1>
          <ContactForm
            handleSubmit={handleSubmit}
            error={error}
            onError={setError}
          />
        </article>
        <Footer />
      </main>
      <div aria-live="assertive">
        {showToast && <ModalToast ref={toastRef} />}
      </div>
    </>
  );
}

export default App;
