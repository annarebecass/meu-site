import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Anna Rebeca dos Santos Seabra (koelha_dev)</h1>
        <p className={styles.text}>Desenvolvedora Fullstack focado em soluções simples e funcionais</p>
      </section>

      {/* SERVIÇOS */}
      <section className={styles.section}>
        <h2>Serviços</h2>
        <ul>
          <li>Criação de sites</li>
          <li>Landing pages</li>
          <li>Sistemas simples</li>
        </ul>
      </section>

      {/* PORTFÓLIO */}
      <section className={styles.section}>
        <h2>Projetos</h2>
        <p>meu site - apresentação pessoal, serviços e contado</p>
        <p>Projeto 2 - descrição rápida :)</p>
      </section>

      {/* CONTATO */}
      <section className={styles.section}>
        <h2>Contato</h2>
        <p>Email: arsseabra10@email.com</p>
      </section>

    </main>
  );
}