/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1E1E1E',
    background: '#F9F9F9',
    primary: '#0655A0',
    secondary: '#355982',
    textSecondary: '#677383',
    whiteText: '#FFFFFF',
    disabledBackground: '#E0E0E0',
    disabledText: '#A0A0A0',
    borderColor: '#677383',
    alertBg: '#D8E3F3',
    error: '#DC2828',
    badgeBg: '#DAE0E7'
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    primary: '#0655A0',
    secondary: '#355982',
    textSecondary: '#B0B4BA',
    whiteText: '#FFFFFF',
    disabledBackground: '#E0E0E0',
    disabledText: '#A0A0A0',
    borderColor: '#677383',
    alertBg: '#D8E3F3',
    error: '#DC2828',
    badgeBg: '#DAE0E7'
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
