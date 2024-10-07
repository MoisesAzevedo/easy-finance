"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./layout.module.scss";
import { Button } from "@/components/ui/button";
import DropDownMenuComponent from "@/components/ui/DropDownMenuComponent";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {" "}
      <nav>
        <img className={styles.logo} src="/icons/Easy Finance.png" />
        <div>
          <Button
            variant="outline"
            className="bg-green-200 border-green-200 hover:bg-green-300 "
          >
            Logout
          </Button>

          <DropDownMenuComponent />
        </div>
      </nav>
    </header>
  );
};
