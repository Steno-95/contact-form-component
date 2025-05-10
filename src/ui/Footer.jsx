function Footer() {
  return (
    <footer className="text-center text-[.9rem] text-gray-600 mt-10 min-w-fit">
      Challenge by{" "}
      <a
        className="text-(--purple-dark) hover:text-(--purple) focus:text-(--purple) hover:font-semibold"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-(--purple-dark) hover:text-(--purple) focus:text-(--purple) hover:font-semibold"
        href="https://github.com/Steno-95"
        title="The link will redirect to the github of Stefano Lezzi"
      >
        Stefano Lezzi
      </a>
      .
    </footer>
  );
}

export default Footer;
