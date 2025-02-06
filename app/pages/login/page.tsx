import { Inter } from "next/font/google";
import styles from "./login.module.scss"
import { Button } from "@/components/ui/button";


const mainFontFamily = Inter({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-family-main"
});

export default function LoginPage() {
  return (
    <html lang="en" className={mainFontFamily.variable}>
      <body>
        <main className={styles.container}> 
        <img src="/icons/Easy Finance.png" alt="logo"  className={styles.logo}/>
        <img src="/walpapper/walpapper_login.png" alt="Wallpaper" className={styles.wallpaper} />
        </main>

        <form action="" className={styles.form}>
          <h1> Acesse sua conta </h1>
          <label htmlFor="">Email</label>
          <input type="text" />

          <label htmlFor="">Senha</label>
          <input type="text" />

          <Button variant="default" value="Entrar" />
          <Button />
          <p>Não possui uma conta?</p>

        </form>

      </body>
    </html>
  );
}
