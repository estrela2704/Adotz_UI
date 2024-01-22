import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>
        <small> Desenvolvido por Felipe Estrela de Albuquerque </small>
      </div>
      <div className={styles.copy}>
        <span className="yellow">Adotz</span> &copy; 2023
      </div>
      <div className={styles.copy}></div>
    </footer>
  );
}

export default Footer;
