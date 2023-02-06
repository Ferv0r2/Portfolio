import { createContext, useContext, useEffect, useState } from "react";
import { ThemeModeComponent } from "assets/ts/layout";

export type ThemeModeType = "dark" | "light";
const systemMode = ThemeModeComponent.getSystemMode() as "light" | "dark";

type ThemeModeContextType = {
  mode: ThemeModeType;
  menuMode: ThemeModeType;
  updateMode: (_mode: ThemeModeType) => void;
  updateMenuMode: (_mode: ThemeModeType) => void;
};

const themeModeSwitchHelper = (_mode: ThemeModeType) => {
  // change background image url
  const mode = _mode;
  const imageUrl =
    "/media/patterns/header-bg" + (mode === "light" ? ".jpg" : "-dark.png");
  document.body.style.backgroundImage = `url("${imageUrl}")`;
};

const themeModeLSKey = "kt_theme_mode_value";
const themeMenuModeLSKey = "kt_theme_mode_menu";

const getThemeModeFromLocalStorage = (lsKey: string): ThemeModeType => {
  if (!localStorage) {
    return "light";
  }

  const data = localStorage.getItem(lsKey);
  if (data === "dark" || data === "light") {
    return data;
  }

  if (document.documentElement.hasAttribute("data-theme")) {
    const dataTheme = document.documentElement.getAttribute("data-theme");
    if (dataTheme && (dataTheme === "dark" || dataTheme === "light")) {
      return dataTheme;
    }
  }

  return "light";
};

const defaultThemeMode: ThemeModeContextType = {
  mode: getThemeModeFromLocalStorage(themeModeLSKey),
  menuMode: getThemeModeFromLocalStorage(themeMenuModeLSKey),
  updateMode: (_mode: ThemeModeType) => {},
  updateMenuMode: (_menuMode: ThemeModeType) => {},
};

const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: defaultThemeMode.mode,
  menuMode: defaultThemeMode.menuMode,
  updateMode: (_mode: ThemeModeType) => {},
  updateMenuMode: (_menuMode: ThemeModeType) => {},
});

const useThemeMode = () => useContext(ThemeModeContext);

const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeModeType>(defaultThemeMode.mode);
  const [menuMode, setMenuMode] = useState<ThemeModeType>(
    defaultThemeMode.menuMode
  );

  const updateMode = (
    _mode: ThemeModeType,
    saveInLocalStorage: boolean = true
  ) => {
    setMode(_mode);
    // themeModeSwitchHelper(updatedMode)
    if (saveInLocalStorage && localStorage) {
      localStorage.setItem(themeModeLSKey, _mode);
    }

    if (saveInLocalStorage) {
      const updatedMode = _mode;
      document.documentElement.setAttribute("data-theme", updatedMode);
    }
    ThemeModeComponent.init();
  };

  const updateMenuMode = (
    _menuMode: ThemeModeType,
    saveInLocalStorage: boolean = true
  ) => {
    setMenuMode(_menuMode);
    if (saveInLocalStorage && localStorage) {
      localStorage.setItem(themeMenuModeLSKey, _menuMode);
    }
  };

  useEffect(() => {
    updateMode(mode, false);
    updateMenuMode(menuMode, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeModeContext.Provider
      value={{ mode, menuMode, updateMode, updateMenuMode }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider, useThemeMode, systemMode, themeModeSwitchHelper };
