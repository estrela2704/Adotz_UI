import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className="bold">Get A Pet</span> &copy; 2023
        <small>Desenvolvido por Felipe Estrela de Albuquerque </small>
      </p>
    </footer>
  );
}

export default Footer;
