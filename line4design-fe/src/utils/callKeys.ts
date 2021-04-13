/** @format */
interface keyListMapTypes {
  [key: string]: string;
}
const keyListMap: keyListMapTypes = {
  LANG_KEY: 'line4design_lang',
};

export const getFindKeys = (key: string): string | null => {
  if (!key) {
    return null;
  }
  return keyListMap[key] ?? '';
};
