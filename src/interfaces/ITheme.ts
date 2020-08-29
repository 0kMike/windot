export enum baseColor {
  dark = "#1c1c1c",
  light = "#eeeeee"
}

export enum accentColor {
  orange = "#ff3d00",
  blue = "#649df1",
  cyan = "#00ab84",
  yellow = "#f6be00"
}

interface themeColors {
  background: baseColor,
  foreground: baseColor,
}

export interface theme {
  baseColors: themeColors,
  accentColor: accentColor
}