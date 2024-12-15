"use client";

import React, { useState, useEffect, useTransition } from "react";
import Sidebar from "@/components/sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Spinner from "@/components/shared/spinner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Эмуляция начала загрузки (для демонстрации при переходах или долгих запросах)
    startTransition(() => {
      setLoading(true); // Показываем спиннер
      setTimeout(() => {
        setLoading(false); // Прячем спиннер после завершения
      }, 1000); // Задержка для имитации загрузки
    });
  }, []);

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Глобальный спиннер */}
      {(loading || isPending) && <Spinner />}

      <Sidebar />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
