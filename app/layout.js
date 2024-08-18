import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flashcards SaaS",
  description: "Generate Flashcards",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
