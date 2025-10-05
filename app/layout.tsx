// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// *Внимание: Стандартные импорты Geist удалены*

export const metadata: Metadata = {
  // 1. ИЗМЕНЕНО: Заголовок для SEO и вкладки браузера
  title: "AL-MUSTAFA | Döner Kebab & Pizza | Доставка",
  // 2. ИЗМЕНЕНО: Описание для поисковых систем
  description: "Лучшая пицца, донеры и кебаб в L'Hospitalet. Быстрая доставка и свежие ингредиенты. Закажите прямо сейчас!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. ИЗМЕНЕНО: Язык с 'en' на 'ru'
    <html lang="ru">
      {/* 4. ИЗМЕНЕНО: Удалены классы шрифтов geistSans/geistMono, оставлен только antialiased */}
      <body className={`antialiased`}>
        {/* Здесь будет контент (Header, Footer, Menu, Home Page) */}
        {children}
      </body>
    </html>
  );
}