import "./globals.css";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const gambetta = localFont({
  src: "./fonts/Gambetta-Variable.ttf",
  variable: "--font-gambetta",
});

const gambettaIta = localFont({
  src: "./fonts/Gambetta-VariableItalic.ttf",
  variable: "--font-gambettaIta",
});

export const metadata = {
  title: "Maddie Adair",
  description: "Personal Portfolio Website",
  icon: 'app/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${gambetta.variable} ${gambettaIta.variable}`}>
        <main>{children}
        </main>
      </body>
    </html>
  );
}
