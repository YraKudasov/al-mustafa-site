// src/app/menu/page.tsx
import { MenuCategory } from '../../types/menu'; 
import { MenuItemCard } from '../../components/MenuItemCard'; 
import menuData from '../../menuData.json';
import Link from 'next/link';

// Используем data as MenuCategory[] для строгой типизации JSON-данных
const categories = menuData as MenuCategory[];

export default function MenuPage() {
  return (
    // Темный фон, чтобы соответствовать Главной странице
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Шапка/Навигация (можно вынести в отдельный компонент Header) */}
      <header className="bg-gray-800/90 shadow-lg sticky top-0 z-20">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-black text-yellow-500 cursor-pointer">
              AL-MUSTAFA
            </h1>
          </Link>
          <a 
            href="tel:604950291" 
            className="px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition"
          >
            Звонок: 604 950 291
          </a>
        </div>
      </header>

      {/* Основной Контент Меню */}
      <main className="container mx-auto py-12 px-4">
        
        <h2 className="text-5xl font-extrabold text-center mb-10 text-white">
          Наше Вкусное Меню
        </h2>

        {/* Навигация по категориям (Фиксированная) */}
        <nav className="sticky top-[72px] bg-gray-900/95 backdrop-blur-sm z-10 py-4 mb-8 border-b border-gray-700">
          <div className="flex justify-center flex-wrap gap-3">
              {categories.map(cat => (
                  <a 
                      key={cat.slug} 
                      href={`#${cat.slug}`} 
                      className="px-5 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-yellow-500 hover:text-gray-900 transition shadow-md text-sm md:text-base"
                  >
                      {cat.category}
                  </a>
              ))}
          </div>
        </nav>

        {/* Секции Категорий */}
        {categories.map((category) => (
          <section key={category.slug} id={category.slug} className="mb-16 pt-2">
            <h3 className="
              text-4xl font-extrabold 
              text-white mb-8 
              border-b-4 border-yellow-500 
              pb-3
            ">
              {category.category}
            </h3>
            
            {/* Сетка Карточек Блюд */}
            <div className="
              grid 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              gap-8
            ">
              {category.items.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Футер (Повторяет стиль Главной) */}
      <footer className="w-full bg-gray-800/80 text-gray-400 p-4 text-center">
        <p className="text-sm font-light">
          Адрес: Carrer Igualtat 46, L&apos;Hospitalet &bull; Часы работы: Ежедневно 12:00 – 23:00
        </p>
      </footer>
    </div>
  );
}