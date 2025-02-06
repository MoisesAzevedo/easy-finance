/* import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Header from "./components/layout/Header";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { Inter } from "next/font/google";
import NavMenu from "./components/layout/NavMenu";

const mainFontFamily = Inter({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-family-main"
});

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en" className={mainFontFamily.variable}>
        <body className={styles.body}>
          <Header />
          <section className={styles.section}>
            <NavMenu />
            <main className={styles.main}>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
 */

"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Header from "./pages/layout/Header";


import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { Inter } from "next/font/google";
import NavMenu from "./pages/layout/NavMenu";
import LoginPage from "./pages/login/page";
import Reservationpage from "./pages/reservations/page"

const mainFontFamily = Inter({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-family-main"
});

interface Props {
  readonly children: ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/pages/login"];

  if (noLayoutRoutes.includes(pathname)) {
    return <>{children}</>; // Renderiza apenas o conteúdo da página
  }

  if(pathname === "/login") {
    return (
    <LoginPage />
    )
  }

  if(pathname === "/reservations") {
    return (
    <Reservationpage />
    )
  }

  return (
    <html lang="en" className={mainFontFamily.variable}>
      <body className={styles.body}>
        <Header />
        <section className={styles.section}>
          <NavMenu />
          <main className={styles.main}>{children}</main>
          
        </section>
      </body>
    </html>
  );
}
