// al-mustafa-site/types/menu.ts

// Описывает одно блюдо
export interface MenuItem {
  name: string;
  description: string;
  price: string; // Используем строку, чтобы легко добавить '€'
  image: string; // Имя файла изображения в public/images
}

// Описывает категорию блюд (например, 'Кебаб' или 'Пицца')
export interface MenuCategory {
  category: string;
  slug: string; // Для якорных ссылок (например, #kebab-doner)
  items: MenuItem[];
}