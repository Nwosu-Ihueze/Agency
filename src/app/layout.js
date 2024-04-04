import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "7Decagon",
  description: "At 7Decagon, we're here to make your vision a reality. Whether you're a startup or an established company, we specialize in crafting your Minimum Viable Product (MVP) and bringing your ideas to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
