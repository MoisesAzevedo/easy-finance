import React from "react";
import styles from "./layout.module.scss";
import { Button } from "@/components/ui/button";

const NavMenu = () => {
  const projects = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_menu}>
        <Button variant="outline" className={styles.button}>
          <img src="/icons/Entradas.png" />
          <p>Entradas</p>
        </Button>
        <Button variant="outline" className={styles.button}>
          <img src="/icons/Reservas.png" />
          <p>Reservas</p>
        </Button>
        <Button variant="outline" className={styles.button}>
          <img src="/icons/Saidas.png" />
          <p>Saídas</p>
        </Button>
        <Button variant="outline" className={styles.button}>
          <img src="/icons/Medias.png" />
          <p>Médias</p>
        </Button>
        <Button variant="outline" className={styles.button}>
          <img src="/icons/Investimentos.png" />
          <p>Investimentos</p>
        </Button>
        <Button variant="outline" className={styles.button}>
          <img src="/icons/Dividas.png" />
          <p>Dividas</p>
        </Button>

        <section className={styles.projects}>
          {projects.map((e, index) => {
            return (
              <Button key={index} className={styles.project_button}>
                {e}
              </Button>
            );
          })}
        </section>
      </div>
      <section className={styles.nav_footer}>
        <div className={styles.author}>
          <div>
            <img src="icons/linkedin.png" alt="" />
            <img src="icons/github.png" alt="" />
            <img src="icons/gmail.png" alt="" />
          </div>
          <p>Criado por Moisés Azevedo</p>
        </div>
        <div className={styles.new_project}>
          <img src="icons/new-project.png" />
        </div>
      </section>
    </nav>
  );
};

export default NavMenu;
