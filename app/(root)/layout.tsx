"use client";
// / <reference path="@/types/telegram.d.ts" />
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "@/components/sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Spinner from "@/components/shared/spinner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<{
    userName?: string;
    userId?: string;
  }>({});

  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);

    let userName = searchParams.get("user_name") || undefined;
    let userId = searchParams.get("user_id") || undefined;

    // Проверка, если открыто из Telegram Mini App
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      const telegramUserId = tg.initDataUnsafe?.user?.id?.toString();
      const telegramUserName =
        tg.initDataUnsafe?.user?.username ||
        tg.initDataUnsafe?.user?.first_name;

      if (telegramUserId && telegramUserName) {
        userId = telegramUserId;
        userName = telegramUserName;

        // Добавляем параметры в URL (если нужно)
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("user_id", telegramUserId);
        currentUrl.searchParams.set("user_name", telegramUserName);
        window.history.replaceState({}, "", currentUrl.toString());
      }
    }

    setUserData({ userName, userId });
    setLoading(false);
  }, [searchParams]);

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {loading && <Spinner />}
      <Sidebar userData={userData} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation userData={userData} />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
