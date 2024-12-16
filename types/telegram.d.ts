interface TelegramUser {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
}

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: TelegramUser;
  };
  version: string;
  platform: string;
  isExpanded: boolean;
  themeParams: Record<string, string>;
  openTelegramLink: (url: string) => void;
  close: () => void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
