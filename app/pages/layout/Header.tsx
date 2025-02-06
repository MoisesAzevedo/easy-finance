"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.scss";
import { Button } from "@/components/ui/button";
import DropDownMenuComponent from "@/components/ui/DropDownMenuComponent";
import ButtonCustom from "@/components/ui/ButtonCustom";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {" "}
      <nav>
        <img className={styles.logo} src="/icons/Easy Finance.png" />

        <div className={styles.interaction}>
          <div className="flex items-center     ">
            <img
              src="/icons/search.png"
              className="w[24px] h-[24px] ml-1 absolute ml-0"
            />
            <input
              placeholder="Pesquisar"
              className="w-[180px] h-[36px] p-2 pl-[34px] border border-solid border-[#1F4D18]  rounded-[4px] "
            />
          </div>

          <ButtonCustom
            value={
              <div className="gap-[5px] flex">
                <p>2021</p>
                <img src="/icons/DropDown.png" className="w-[15px]" />
              </div>
            }
            className="bg-[#A9E2BD]   hover:bg-green-300 w-[90px] h-[36px]"
          />

          <DropDownMenuComponent />
        </div>
      </nav>
    </header>
  );
};

export default Header;
