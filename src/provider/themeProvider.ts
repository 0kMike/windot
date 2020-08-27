export interface themeProvider {
  background: string,
  foreground: string,
  accent: string;
}

export const defaultTheme: themeProvider = {
  background: "#eeeeee",
  foreground: "#1c1c1c",
  accent: "#ff3d00",
}

export var currentTheme: themeProvider = defaultTheme;

export function applyTheme(background: string, foreground: string, accent: string) {
  currentTheme = {
    background: background,
    foreground: foreground,
    accent: accent
  }
}