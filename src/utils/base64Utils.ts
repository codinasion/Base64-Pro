export const encodeBase64 = (text: string): string => {
  return btoa(unescape(encodeURIComponent(text)));
};

export const decodeBase64 = (base64: string): string => {
  return decodeURIComponent(escape(atob(base64)));
};
