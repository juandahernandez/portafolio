"use client";
import { Inter } from "next/font/google";
// import Navigation from "@/components/Navigation/Navigation";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "./store";
import i18n from "./i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            {/* <Navigation /> */}
            {children}
          </I18nextProvider>
        </Provider>
      </body>
    </html>
  );
}
