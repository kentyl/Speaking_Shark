import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
      {/* Заголовок */}
      <h1 className="mb-8 text-3xl font-bold text-gray-800">О нас</h1>

      {/* Описание */}
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">
        Мы — команда страстных исследователей языков и технологий, объединивших
        усилия, чтобы упростить и обогатить процесс изучения иностранных слов.
        Наша цель — превратить каждое занятие в осознанное погружение, где
        прогресс даётся не только эффективными методами, но и вдохновением. Мы
        верим, что язык — это не набор абстрактных правил, а живая ткань
        культуры и истории. Поэтому мы стремимся не просто расширять ваш
        словарный запас, но и пробуждать в вас любопытство, интерес к миру и
        уверенность в собственных силах. Мы рады быть частью вашего пути к
        свободному общению, помогать открывать новые горизонты и дарить
        вдохновение для постоянного роста.
      </p>

      {/* Кнопки с логотипами */}
      <div className="flex gap-6">
        {/* Кнопка Telegram */}
        <a
          href="https://t.me/kentyl_fd"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/assets/img/telegram-logo.png"
            alt="Telegram"
            width={80}
            height={80}
            className="rounded-lg shadow-md"
          />
        </a>

        {/* Кнопка VK */}
        <a
          href="https://vk.com/kentyl"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/assets/img/vk-logo.png"
            alt="VK"
            width={80}
            height={80}
            className="rounded-lg shadow-md"
          />
        </a>
      </div>
    </div>
  );
}
