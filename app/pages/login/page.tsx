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
        <section className={styles.container}> 
        <div className={styles.left}> 
        <img src="/icons/Easy Finance.png" alt="logo"  className={styles.logo}/>
        <img src="/walpapper/walpapper_login.png" alt="Wallpaper" className={styles.wallpaper} /> 
        </div>
        <div className={styles.right}>
        <form action="" className={styles.form}>
          <h1 className={styles.textmain}>Acesse sua conta </h1>
          <label  className={styles.label}>E-mail</label>
          <input type="text" name="E-mail" id="Email" className={styles.input} />
          <label  className={styles.label}>Senha  <a className={styles.forget}> Esqueci minha senha </a> </label>
         
          <input type="text" name="Password" id="Password" className={styles.input} />

          <Button className={styles.btnlogin}> Login </Button> 
          <Button className={styles.btngoogle}> Conectar com o Google </Button>
   

          <a className={styles.createacc}> Não possui uma conta? </a>
          
          <div className={styles.networks}>
          <img src="/icons/linkedin.png" alt="Linkedin" />
          <img src="/icons/github.png" alt="Github" />
          <img src="/icons/gmail.png" alt="Gmail" />
         </div>

        <p className={styles.baseboard}> Criado por Moises & Guilherme </p>

        </form>
        </div>
        </section>
      </body>
    </html>
  );
}
