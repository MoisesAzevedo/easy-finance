import Image from "next/image";
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
