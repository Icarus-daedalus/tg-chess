export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      user?: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
      };
    };
    colorScheme: 'light' | 'dark';
    themeParams: Record<string, string>;

    ready(): void;
    expand(): void;
    close(): void;

    setHeaderColor(color: string): void;
    setBackgroundColor(color: string): void;

    MainButton: {
      text: string;
      color: string;
      textColor: string;
      show(): void;
      hide(): void;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
      setText(text: string): void;
    };
  }
}