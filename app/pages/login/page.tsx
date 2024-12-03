import { Inter } from "next/font/google";

const mainFontFamily = Inter({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-family-main"
});

export default function LoginPage() {
  return (
    <html lang="en" className={mainFontFamily.variable}>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  );
}
