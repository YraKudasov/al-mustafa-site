// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
  ======================================================
  ОБЯЗАТЕЛЬНЫЕ НАСТРОЙКИ ДЛЯ GITHUB PAGES
  ======================================================
  */
  
  // 1. Включает статический HTML-экспорт. 
  // Это критически важно, так как GitHub Pages не может запускать Node.js сервер.
  output: 'export', 
  
  // 2. Указывает базовый путь (имя репозитория) для правильной загрузки ресурсов
  // (CSS, JS, изображения). 
  // Предполагается, что ваш сайт будет доступен по адресу: 
  // https://ВАШ_НИК.github.io/al-mustafa-site/
  basePath: '/al-mustafa-site', 

  // 3. Добавляет завершающий слэш ко всем URL (например, /about -> /about/). 
  // Это помогает статическому экспорту лучше работать на некоторых хостингах.
  trailingSlash: true, 

  /* config options here */
};

export default nextConfig;