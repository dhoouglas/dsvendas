function Footer() {
  return (
    <footer className="footer mt-auto py-1 bg-dark">
      <div className="container">
        <p className="text-light mb-2">
          App desenvolvido por{" "}
          <a
            href="https://github.com/dhoouglas"
            target="_blank"
            rel="noreferrer"
          >
            Douglas Araújo
          </a>
        </p>
        <p className="text-light mb-2">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
              
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
