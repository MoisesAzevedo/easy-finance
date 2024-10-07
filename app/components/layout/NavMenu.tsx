import React from "react";
import styles from "./layout.module.scss";
import { Button } from "@/components/ui/button";

const NavMenu = () => {
  const classname_button =
    "flex-shrink-0 flex justify-start w-[336px] h-[80px] siz bg-transparent border-2 border-green-200 font-semibold gap-1 text-[24px] text-[#14ae5c] hover:rounded-3g hover:bg-green-200 hover:border-green-400 hover:text-[#14ae5c] ";

  return (
    <nav className={styles.nav_menu}>
      <Button variant="outline" className={classname_button}>
        <img src="/icons/Entradas.png" />
        <p>Entradas</p>
      </Button>
      <Button variant="outline" className={classname_button}>
        <img src="/icons/Reservas.png" />
        <p>Reservas</p>
      </Button>
      <Button variant="outline" className={classname_button}>
        <img src="/icons/Saidas.png" />
        <p>Saídas</p>
      </Button>
      <Button variant="outline" className={classname_button}>
        <img src="/icons/Medias.png" />
        <p>Médias</p>
      </Button>
      <Button variant="outline" className={classname_button}>
        <img src="/icons/Investimentos.png" />
        <p>Investimentos</p>
      </Button>
    </nav>
  );
};

export default NavMenu;
