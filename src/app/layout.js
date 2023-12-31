import { Inter } from "next/font/google";
import "./globals.css";
import DateContextProvider from "./components/date_context_provider/date_context_provider";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "ARM",
  },
  description: "ARM provides car rentals at a cheap rate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div role="main">
          <DateContextProvider>{children}</DateContextProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
