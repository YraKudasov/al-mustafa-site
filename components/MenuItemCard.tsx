// src/components/MenuItemCard.tsx
import React from 'react';
// 1. ИМПОРТ Image из next/image
import Image from 'next/image'; 
// Убедитесь, что путь к вашему файлу types/menu.ts правильный
import { MenuItem } from '../types/menu'; 

interface MenuItemCardProps {
  item: MenuItem;
}

// Устанавливаем фиксированное соотношение сторон для всех изображений в карточках.
// Это необходимо для компонента Image. 
const ASPECT_RATIO_WIDTH = 500;
const ASPECT_RATIO_HEIGHT = 300; 

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  
  // Функция для экранирования одиночных кавычек, чтобы избежать ошибок ESLint.
  const escapeQuotes = (text: string) => text.replace(/'/g, '&apos;');

  return (
    // Карточка: Темная, с закругленными углами, тенью и Hover-эффектом
    <div className="
      bg-gray-800 rounded-xl shadow-lg 
      overflow-hidden 
      flex flex-col 
      hover:shadow-2xl hover:scale-[1.02] transition duration-300
    ">
      
      {/* 1. Изображение (Родитель должен быть relative для правильного позиционирования) */}
      <div className="relative h-48 w-full">
        <Image
          // 2. ИСПОЛЬЗУЕМ Image: src={`/images/${item.image}`}
          src={`/images/${item.image}`}
          alt={item.name}
          width={ASPECT_RATIO_WIDTH} // Обязательный параметр
          height={ASPECT_RATIO_HEIGHT} // Обязательный параметр
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover" 
          priority={false}
        />
        
        {/* Акцентная метка цены в современном стиле */}
        <div className="
          absolute top-0 right-0 
          bg-yellow-500 text-gray-900 
          font-extrabold text-lg 
          p-2 px-4 
          rounded-bl-xl 
          shadow-lg
        ">
          {escapeQuotes(item.price)}€ {/* Экранирование цены */}
        </div>
      </div>

      {/* 2. Контент */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {escapeQuotes(item.name)} {/* Экранирование названия */}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {escapeQuotes(item.description)} {/* Экранирование описания */}
          </p>
        </div>
        
        {/* Кнопка "Заказать" (Call to Action) */}
        {/*<button className="
          w-full mt-3 py-2 
          bg-red-700 text-white 
          font-bold rounded-lg 
          hover:bg-red-600 transition
        ">
          Добавить в Заказ
        </button>
        */}
      </div>
    </div>
  );
};