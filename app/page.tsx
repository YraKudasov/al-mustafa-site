// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    // Фон: Глубокий темно-серый для премиум-ощущения (можно заменить на темный зеленый)
    <main className="relative min-h-screen bg-gray-900 text-white">
      
      {/* 1. ФОНОВОЕ ИЗОБРАЖЕНИЕ (С эффектом затемнения) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('/images/bg-img.png')" }}
      ></div>

      {/* 2. ОСНОВНОЙ КОНТЕНТ (По центру) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">

        {/* ЗАГОЛОВОК и ЛОГОТИП */}
        <header className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h1 className="
            text-7xl sm:text-8xl md:text-9xl 
            font-extrabold tracking-tight 
            text-yellow-400 
            drop-shadow-lg 
            // Добавим тонкий градиент
            bg-clip-text text-transparent 
            bg-gradient-to-r from-yellow-300 to-amber-500
          ">
            AL-MUSTAFA
          </h1>
          <p className="
            text-xl sm:text-2xl mt-4 font-light 
            text-gray-300 tracking-widest 
            uppercase 
            border-t border-yellow-500/50 pt-2 
            max-w-md mx-auto
          ">
            DONER KEBAB & PIZZA
          </p>
        </header>

        {/* БЛОК С ПРЕДЛОЖЕНИЕМ (Чистый, светлый блок на темном фоне) */}
        <section className="
          bg-white/5 backdrop-blur-sm 
          p-6 md:p-10 rounded-xl shadow-2xl 
          text-center max-w-xl mb-12 
          border-l-4 border-yellow-500 
          animate-fadeIn delay-300
        ">
          <h2 className="text-3xl font-bold text-white mb-3">
            Откройте Вкус Востока
          </h2>
          <p className="text-md text-gray-300 mb-6">
            Свежее мясо, оригинальные соусы и идеальное тесто. Мы поднимаем качество кебаба на новый уровень.
          </p>
          <p className="text-xl font-bold text-yellow-500">
            Доставка по L&apos;Hospitalet — <span className="text-red-500">БЕСПЛАТНО</span> от 15€!
          </p>
        </section>

        {/* КНОПКИ ДЕЙСТВИЯ (Контрастные и чистые) */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn delay-500">
          
          <Link href="/menu" passHref>
            <button className="
              px-12 py-4 
              bg-yellow-500 text-gray-900 
              text-xl font-extrabold 
              rounded-lg 
              shadow-lg hover:shadow-xl 
              hover:bg-yellow-400 transition 
              transform hover:scale-105 
              w-full sm:w-auto
            ">
              ПЕРЕЙТИ К МЕНЮ
            </button>
          </Link>
          
          <a href="tel:604950291" target="_blank" rel="noopener noreferrer">
            <button className="
              px-12 py-4 
              border-2 border-white/50 
              text-white text-xl font-medium 
              rounded-lg 
              hover:bg-white/10 transition 
              transform hover:scale-105 
              w-full sm:w-auto
            ">
              ЗАКАЗ ПО ТЕЛЕФОНУ
            </button>
          </a>
        </div>
      </div>
      
      {/* 3. ФУТЕР (Минималистичный) */}
      <footer className="relative z-20 w-full bg-gray-800/80 text-gray-400 p-4 text-center">
        <p className="text-sm font-light">
          Carrer Igualtat 46, L&apos;Hospitalet &bull; Ежедневно 12:00 – 23:00
        </p>
      </footer>
    </main>
  );
}