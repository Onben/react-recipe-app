import { useTheme as useThemeFromContext } from '../contexts/ThemeContext';

export const useTheme = () => {
  return useThemeFromContext();
};